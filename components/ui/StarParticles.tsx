'use client'

interface StarParticlesProps {
  count?: number
}

export default function StarParticles({ count = 60 }: StarParticlesProps) {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 0.5,
    duration: `${Math.random() * 4 + 2}s`,
    delay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.5 + 0.1,
  }))

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            '--duration': star.duration,
            '--delay': star.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
