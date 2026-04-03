'use client'

import { useEffect, useState } from 'react'
import { TYPEWRITER_PHRASES } from '@/lib/data'

export default function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = TYPEWRITER_PHRASES[phraseIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => {
        setDisplayed(phrase.slice(0, displayed.length + 1))
      }, 45)
    } else if (!isDeleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1))
      }, 22)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setPhraseIndex((i) => (i + 1) % TYPEWRITER_PHRASES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, phraseIndex])

  return (
    <span className="text-white/70 text-lg md:text-xl font-medium">
      {displayed}
      <span className="cursor" />
    </span>
  )
}
