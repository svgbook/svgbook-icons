import React, { forwardRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { IconContext } from './IconProvider'
import useFinalValue from '../hooks/useFinalValue'

const IconBase = forwardRef(
  (
    {
      design,
      size,
      color,
      secondaryColor,
      strokeWidth,
      renderPath,
      frameColor,
      frameBorderColor,
      frameBorderRadius
    },
    ref
  ) => {
    const context = useContext(IconContext)

    const {
      design: contextDesign,
      size: contextSize,
      color: contextColor,
      secondaryColor: contextSecondaryColor,
      strokeWidth: contextStrokeWidth,
      frameColor: contextFrameColor,
      frameBorderColor: contextFrameBorderColor,
      frameBorderRadius: contextFrameBorderRadius
    } = context

    design = useFinalValue(design, contextDesign, 'outline')
    color = useFinalValue(color, contextColor, '#000000')
    size = useFinalValue(size, contextSize, 36)
    strokeWidth = useFinalValue(strokeWidth, contextStrokeWidth, 1)
    secondaryColor = useFinalValue(
      secondaryColor,
      contextSecondaryColor,
      '#A6A6A6'
    )
    frameColor = useFinalValue(frameColor, contextFrameColor, null)
    frameBorderColor = useFinalValue(
      frameBorderColor,
      contextFrameBorderColor,
      null
    )
    frameBorderRadius = useFinalValue(
      frameBorderRadius,
      contextFrameBorderRadius,
      0
    )

    return (
      <svg
        ref={ref}
        xmlns={'http://www.w3.org/2000/svg'}
        width={size}
        height={size}
        viewBox={`0 0 24 24`}
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap='round' // butt | round | square
        strokeLinejoin='round' // arcs | bevel |miter | miter-clip | round
      >
        {(frameColor || frameBorderColor) && (
          <rect
            fill={frameColor}
            stroke={(frameBorderColor && frameBorderColor) || 'none'}
            strokeWidth='1'
            width='23'
            height='23'
            rx={frameBorderRadius}
            x='.5'
            y='.5'
          />
        )}

        {renderPath[design] ? renderPath[design](color, secondaryColor) : null}
      </svg>
    )
  }
)

IconBase.propTypes = {
  renderPath: PropTypes.object
}

export default IconBase
