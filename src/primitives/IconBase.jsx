import React from 'react'
import PropTypes from 'prop-types'

const IconBase = ({
  design,
  size,
  primaryColor,
  secondaryColor,
  strokeWidth,
  renderPath
}) => {
  return (
    <svg
      xmlns={'http://www.w3.org/2000/svg'}
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      fill={primaryColor}
      stroke={primaryColor}
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      {/* TODO: Validate if style exits */}
      {renderPath &&
        renderPath[design](primaryColor, secondaryColor, strokeWidth)}
    </svg>
  )
}

IconBase.propTypes = {
  renderPath: PropTypes.object
}

IconBase.defaultProps = {
  primaryColor: '#000000',
  size: '18',
  stroke: '2',
  style: 'outline'
}

export default IconBase
