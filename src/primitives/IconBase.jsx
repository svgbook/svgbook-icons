import React from 'react'
import Proptypes from 'prop-types'

const IconBase = ({ size, color, style, stroke: strokeWidth, renderPath }) => {
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      width={size}
      height={size}
      viewBox={`0 0 256 256`}
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      {renderPath && renderPath[style](color)}
    </svg>
  )
}

IconBase.propTypes = {
  renderPath: Proptypes.object
}

IconBase.defaultProps = {
  color: '#000000',
  size: '18',
  stroke: '1',
  style: 'outline'
}

export default IconBase
