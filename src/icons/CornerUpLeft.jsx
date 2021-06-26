import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,18V12.46a2.77,2.77,0,0,0-2.77-2.77H6' />
    <polyline fill='none' points='9.69 6 6 9.69 9.69 13.38' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M18,18V12.46a2.77,2.77,0,0,0-2.77-2.77H6' />
    <polyline fill='none' points='9.69 6 6 9.69 9.69 13.38' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M18,18V12.46a2.77,2.77,0,0,0-2.77-2.77H6'
    />
    <polyline fill='none' points='9.69 6 6 9.69 9.69 13.38' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M18,18V12.46a2.77,2.77,0,0,0-2.77-2.77H6'
    />
    <polyline fill='none' points='9.69 6 6 9.69 9.69 13.38' />
  </Fragment>
)

const CornerUpLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerUpLeft
