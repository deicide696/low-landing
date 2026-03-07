import { clsx } from 'clsx'

type BadgeVariant = 'active' | 'pending' | 'error' | 'inactive'

const variantClasses: Record<BadgeVariant, string> = {
  active: 'bg-emerald-500/20 text-emerald-400',
  pending: 'bg-yellow-500/20 text-yellow-500',
  error: 'bg-red-500/20 text-red-400',
  inactive: 'bg-slate-700/50 text-slate-400',
}

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

export default function Badge({ variant = 'inactive', children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {variant === 'active' && (
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
      )}
      {children}
    </span>
  )
}
