'use client'

import { useSpeech } from '@/lib/useSpeech'

interface SpeakButtonProps {
  text: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

export function SpeakButton({
  text,
  className = '',
  size = 'md',
  showLabel = false
}: SpeakButtonProps) {
  const { speak, isSpeaking, isSupported } = useSpeech()

  if (!isSupported) {
    return null
  }

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    speak(text)
  }

  return (
    <button
      onClick={handleClick}
      disabled={isSpeaking}
      className={`
        inline-flex items-center justify-center gap-2
        ${sizeClasses[size]}
        rounded-full
        transition-all duration-200
        ${isSpeaking
          ? 'bg-red-500 text-white animate-pulse'
          : 'bg-red-100 text-red-600 hover:bg-red-200 hover:scale-110'
        }
        ${className}
      `}
      title="Ouvir pronúncia"
      aria-label={`Ouvir pronúncia de ${text}`}
    >
      {isSpeaking ? (
        <svg className={iconSizes[size]} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
          <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      ) : (
        <svg className={iconSizes[size]} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      )}
      {showLabel && (
        <span className="text-sm font-medium">
          {isSpeaking ? 'Falando...' : 'Ouvir'}
        </span>
      )}
    </button>
  )
}

interface SpeedControlProps {
  className?: string
}

export function SpeechSpeedControl({ className = '' }: SpeedControlProps) {
  const { rate, setRate } = useSpeech()

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="text-sm text-slate-500">Velocidade:</span>
      <input
        type="range"
        min="0.5"
        max="1.5"
        step="0.1"
        value={rate}
        onChange={(e) => setRate(parseFloat(e.target.value))}
        className="w-24 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500"
      />
      <span className="text-sm text-slate-600 w-8">{rate}x</span>
    </div>
  )
}
