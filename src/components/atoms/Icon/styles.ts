import { styled } from '@app/styles'

export const IconStyle = styled('svg', {
  flexCenter: 'row',

  variants: {
    size: {
      sm: { size: '$7' },
      md: { size: '$9', minSize: '$9' },
      lg: { size: '$12' }
    },
    fill: {
      primary: { fill: '$primary_1' },
      primary_contrast: { fill: '$primary_contrast_1' },

      secondary: { fill: '$secondary_1' },
      secondary_contrast: { fill: '$secondary_contrast_1' },

      tertiary: { fill: '$tertiary_1' },
      tertiary_contrast: { fill: '$tertiary_contrast_1' },

      success: { fill: '$success_1' },
      success_contrast: { fill: '$success_contrast_1' },

      error: { fill: '$error_1' },
      error_contrast: { fill: '$error_contrast_1' },

      info: { fill: '$info_1' },
      info_contrast: { fill: '$info_contrast_1' }
    },
    stroke: {
      primary: { stroke: '$primary_1' },
      primary_contrast: { stroke: '$primary_contrast_1' },

      secondary: { stroke: '$secondary_1' },
      secondary_contrast: { stroke: '$secondary_contrast_1' },

      tertiary: { stroke: '$tertiary_1' },
      tertiary_contrast: { stroke: '$tertiary_contrast_1' },

      success: { stroke: '$success_1' },
      success_contrast: { stroke: '$success_contrast_1' },

      error: { stroke: '$error_1' },
      error_contrast: { stroke: '$error_contrast_1' },

      info: { stroke: '$info_1' },
      info_contrast: { stroke: '$info_contrast_1' }
    }
  }
})
