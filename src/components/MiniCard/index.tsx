import React from 'react'
import Style from './styles'

import Perspective from 'components/Perspective'

export interface MiniCardProps {
  link: string
  image: string
  title: string
  color: 'green' | 'yellow' | 'red'
}

const MiniCard = ({ image, title, color, link }: MiniCardProps) => {
  const onMiniCardClick = () => window.open(link, '_ blank')

  return (
    <Perspective>
      <Style onClick={onMiniCardClick}>
        <img src={image} />

        <span className='title'>{title}</span>

        {color === 'red' && <div className='bar' id='red' />}
        {color === 'green' && <div className='bar' id='green' />}
        {color === 'yellow' && <div className='bar' id='yellow' />}
      </Style>
    </Perspective>
  )
}

export default MiniCard
