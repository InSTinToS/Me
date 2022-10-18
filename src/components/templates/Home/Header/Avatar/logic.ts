import { MotionProps, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export const useAvatar = () => {
  const avatarRef = useRef<HTMLButtonElement>(null)
  const isInView = useInView(avatarRef, { once: true })

  const [showAvatar, setShowAvatar] = useState(false)

  const [avatarImageProps, setAvatarImageProps] = useState({
    style: { transform: 'perspective(10000px) translateZ(1px)' },
    ariaLive: 'off',
    alt: 'Foto de perfil',
    src: '/avatar-circle.png'
  })

  const toggleAvatar = () => {
    setShowAvatar(prev => !prev)
  }

  const avatarAnimations: MotionProps = {
    initial: { opacity: 0 },
    transition: { type: 'tween', duration: 0.6 },
    animate: {
      x: isInView ? 0 : -100,
      opacity: isInView ? 1 : 0,
      rotateY: showAvatar ? 180 : 0,
      transformStyle: 'preserve-3d'
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setAvatarImageProps(prev => ({ ...prev, ariaLive: 'off' }))

      setAvatarImageProps({
        ariaLive: 'polite',
        alt: showAvatar ? 'Avatar' : 'Foto de perfil',
        src: showAvatar ? '/avatar2.png' : '/avatar-circle.png',
        style: showAvatar
          ? {
              transform:
                'perspective(10000px) translateZ(-1px) rotateY(-180deg)'
            }
          : { transform: 'perspective(10000px) translateZ(1px)' }
      })
    }, 300)
  }, [showAvatar])

  return { avatarRef, toggleAvatar, avatarAnimations, avatarImageProps }
}
