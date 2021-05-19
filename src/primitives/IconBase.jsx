import React, { forwardRef, useContext } from 'react'
import PropTypes from 'prop-types'
import { IconContext } from './IconProvider'
import useFinalValue from '../hooks/useFinalValue'

const IconBase = forwardRef(
  ({ design, size, color, secondaryColor, strokeWidth, renderPath }, ref) => {
    const context = useContext(IconContext)

    const {
      design: contextDesign,
      size: contextSize,
      color: contextColor,
      secondaryColor: contextSecondaryColor,
      strokeWidth: contextStrokeWidth
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
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        {renderPath[design] ? renderPath[design](color) : null}
      </svg>
    )
  }
)

IconBase.propTypes = {
  renderPath: PropTypes.object
}

export default IconBase
