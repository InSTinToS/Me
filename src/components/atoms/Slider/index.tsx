import { Range, Style, Thumb, Track } from './styles'

import React, { forwardRef } from 'react'

export const Slider = forwardRef<React.Ref<HTMLSpanElement> | undefined, any>(
  (props, forwardedRef) => {
    const circles = []
    const thumbSize = 10
    const subtractToFit = 0.1 * thumbSize

    for (let i = 0; i <= props.step; i++) {
      const stepP = 100 / props.step
      let additional = 0

      i < 0
        ? (additional = thumbSize / 2 - subtractToFit * i)
        : (additional = thumbSize / 2 - subtractToFit * i)

      circles.push(
        <div
          key={i}
          style={{
            width: thumbSize,
            height: thumbSize,
            left: `calc(${stepP * i}% + ${additional}px)`,
            transform: `translate(-${thumbSize / 2}px, -50%)`
          }}
        />
      )
    }

    return (
      <Style {...props} ref={forwardedRef}>
        <Track>
          {circles.map(circle => circle)}

          <Range />
        </Track>

        <Thumb css={{ size: thumbSize }} />
      </Style>
    )
  }
)

Slider.displayName = 'Slider'
