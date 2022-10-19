import { useAvatar } from './logic'
import { Style } from './styles'

import { HTMLMotionProps } from 'framer-motion'
import Image from 'next/image'

export const Avatar = ({ ...props }: HTMLMotionProps<'button'>) => {
  const { avatarRef, toggleAvatar, avatarAnimations, avatarImageProps } =
    useAvatar()

  return (
    <Style
      {...props}
      tabIndex={0}
      ref={avatarRef}
      onClick={() => toggleAvatar()}
      {...avatarAnimations}
    >
      <Image
        layout='fill'
        draggable='false'
        objectFit='cover'
        alt={avatarImageProps.alt}
        src={avatarImageProps.src}
        style={avatarImageProps.style}
      />
    </Style>
  )
}
