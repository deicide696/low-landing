import { clsx } from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'emerald'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-white text-slate-900 hover:bg-slate-100 shadow-sm',
  secondary: 'bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md',
  ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
  emerald: 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-sm',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: React.ReactNode
}

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
