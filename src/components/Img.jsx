import { useState } from 'react'

// Rasm yuklanmasa, chiroyli gradient ko'rsatiladi
export default function Img({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`bg-gradient-to-br from-[#3a2c1c] via-[#1d1915] to-[#0e0c0a] ${className}`}
      />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  )
}
