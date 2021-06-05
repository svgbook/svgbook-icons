import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='12' x2='18' y2='12' />
    <polyline fill='none' points='8.67 9.33 6 12 8.67 14.67' />
    <polyline fill='none' points='15.33 9.33 18 12 15.33 14.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='12' x2='18' y2='12' />
    <polyline fill='none' points='8.67 9.33 6 12 8.67 14.67' />
    <polyline fill='none' points='15.33 9.33 18 12 15.33 14.67' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='6' y1='12' x2='18' y2='12' />
    <polyline fill='none' points='8.67 9.33 6 12 8.67 14.67' />
    <polyline fill='none' points='15.33 9.33 18 12 15.33 14.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='6' y1='12' x2='18' y2='12' />
    <polyline fill='none' points='8.67 9.33 6 12 8.67 14.67' />
    <polyline fill='none' points='15.33 9.33 18 12 15.33 14.67' />
  </Fragment>
)

const ArrowsHorizontal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsHorizontal
