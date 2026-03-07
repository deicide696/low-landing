-- =============================================
-- LOW Webapp - Schema de base de datos Supabase
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- =============================================

-- Perfil público del usuario (creado automáticamente al registrarse)
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  email text not null,
  full_name text,
  plan text default 'junior' check (plan in ('junior', 'custom')),
  created_at timestamptz default now()
);

-- Conexiones de correo (los tokens viven en n8n, aquí solo metadatos)
create table public.email_connections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  provider text not null check (provider in ('google', 'microsoft')),
  email_address text not null,
  n8n_credential_id text,       -- ID de la credencial creada en n8n
  status text default 'active' check (status in ('active', 'expired', 'revoked')),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique (user_id, provider)    -- un usuario puede tener 1 conexión por proveedor
);

-- Logs de ejecución (escritos por n8n usando service_role_key)
create table public.automation_runs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  run_at timestamptz default now(),
  emails_scanned int default 0,
  invoices_found int default 0,
  status text default 'success' check (status in ('success', 'error', 'partial'))
);

-- =============================================
-- Row Level Security (RLS)
-- =============================================

alter table public.profiles enable row level security;
alter table public.email_connections enable row level security;
alter table public.automation_runs enable row level security;

-- Cada usuario solo ve y modifica sus propios datos
create policy "own profile" on public.profiles
  for all using (auth.uid() = id);

create policy "own connections" on public.email_connections
  for all using (auth.uid() = user_id);

create policy "own runs" on public.automation_runs
  for all using (auth.uid() = user_id);

-- n8n puede escribir en automation_runs usando service_role (bypasa RLS)
-- No es necesario una política adicional; service_role bypasa RLS por defecto.

-- =============================================
-- Trigger: crear perfil al registrarse
-- =============================================

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
