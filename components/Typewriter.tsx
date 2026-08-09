'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
}

export default function Typewriter({
  text,
  speed = 40,
  delay = 200,
  className = '',
  onComplete,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    setDisplayedText('')
    setIsTyping(false)

    const startTimeout = setTimeout(() => {
      setIsTyping(true)
      let index = 0

      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1))
          index++
        } else {
          clearInterval(timer)
          setIsTyping(false)
          if (onComplete) onComplete()
        }
      }, speed)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [text, speed, delay, onComplete])

  return (
    <span className={className}>
      {displayedText}
      <span
        style={{
          display: 'inline-block',
          width: '0.5em',
          height: '1.1em',
          background: 'currentColor',
          marginLeft: '2px',
          verticalAlign: 'middle',
          animation: 'retro-blink 0.8s infinite',
        }}
        aria-hidden="true"
      />
    </span>
  )
}
