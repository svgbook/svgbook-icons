import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='18' />
    <polyline fill='none' points='9.33 8.67 12 6 14.67 8.67' />
    <polyline fill='none' points='9.33 15.33 12 18 14.67 15.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='18' />
    <polyline fill='none' points='9.33 8.67 12 6 14.67 8.67' />
    <polyline fill='none' points='9.33 15.33 12 18 14.67 15.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='12' y1='6' x2='12' y2='18' />
    <polyline fill='none' points='9.33 8.67 12 6 14.67 8.67' />
    <polyline fill='none' points='9.33 15.33 12 18 14.67 15.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='12' y1='6' x2='12' y2='18' />
    <polyline fill='none' points='9.33 8.67 12 6 14.67 8.67' />
    <polyline fill='none' points='9.33 15.33 12 18 14.67 15.33' />
  </Fragment>
)

const ArrowsVertical = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsVertical
