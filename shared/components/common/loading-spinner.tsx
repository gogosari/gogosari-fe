type LoadingSpinnerProps = {
  color?: string
  size?: number
}

export default function LoadingSpinner({ size = 40, color = '#00d492' }: LoadingSpinnerProps) {
  const strokeWidth = size * 0.1
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius

  return (
    <svg
      className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 animate-spin"
      height={size}
      style={{ transformOrigin: 'center' }}
      width={size}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        fill="none"
        r={radius}
        stroke="#009f6e"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        fill="none"
        r={radius}
        stroke={color}
        strokeDasharray={circumference}
        strokeDashoffset={circumference * 0.3}
        strokeLinecap="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  )
}
