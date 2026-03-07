export interface Profile {
  id: string
  email: string
  full_name: string | null
  plan: 'junior' | 'custom'
  created_at: string
}

export interface EmailConnection {
  id: string
  user_id: string
  provider: 'google' | 'microsoft'
  email_address: string
  n8n_credential_id: string | null
  status: 'active' | 'expired' | 'revoked'
  created_at: string
  updated_at: string
}

export interface AutomationRun {
  id: string
  user_id: string
  run_at: string
  emails_scanned: number
  invoices_found: number
  status: 'success' | 'error' | 'partial'
}
