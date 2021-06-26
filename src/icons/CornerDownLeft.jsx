import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,6v5.54a2.77,2.77,0,0,1-2.77,2.77H6' />
    <polyline fill='none' points='9.69 18 6 14.31 9.69 10.62' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M18,6v5.54a2.77,2.77,0,0,1-2.77,2.77H6' />
    <polyline fill='none' points='9.69 18 6 14.31 9.69 10.62' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M18,6v5.54a2.77,2.77,0,0,1-2.77,2.77H6'
    />
    <polyline fill='none' points='9.69 18 6 14.31 9.69 10.62' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M18,6v5.54a2.77,2.77,0,0,1-2.77,2.77H6'
    />
    <polyline fill='none' points='9.69 18 6 14.31 9.69 10.62' />
  </Fragment>
)

const CornerDownLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerDownLeft
