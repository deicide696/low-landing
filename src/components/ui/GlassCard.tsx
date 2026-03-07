import { clsx } from 'clsx'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div className={clsx('glass-dark rounded-2xl', className)}>
      {children}
    </div>
  )
}
