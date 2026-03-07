import { clsx } from 'clsx'

interface SpinnerProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-2',
}

export default function Spinner({ className, size = 'md' }: SpinnerProps) {
  return (
    <div
      className={clsx(
        'rounded-full border-white/20 border-t-blue-400 animate-spin',
        sizeClasses[size],
        className,
      )}
    />
  )
}
