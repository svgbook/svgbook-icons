import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='10' y2='10' />
    <polyline fill='none' points='7.33 10 10 10 10 7.33' />
    <line x1='6' y1='18' x2='10' y2='14' />
    <polyline fill='none' points='7.33 14 10 14 10 16.67' />
    <line x1='14' y1='10' x2='18' y2='6' />
    <polyline fill='none' points='16.67 10 14 10 14 7.33' />
    <line x1='14' y1='14' x2='18' y2='18' />
    <polyline fill='none' points='16.67 14 14 14 14 16.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='6' x2='10' y2='10' />
    <polyline fill='none' points='7.33 10 10 10 10 7.33' />
    <line x1='6' y1='18' x2='10' y2='14' />
    <polyline fill='none' points='7.33 14 10 14 10 16.67' />
    <line x1='14' y1='10' x2='18' y2='6' />
    <polyline fill='none' points='16.67 10 14 10 14 7.33' />
    <line x1='14' y1='14' x2='18' y2='18' />
    <polyline fill='none' points='16.67 14 14 14 14 16.67' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='6' y1='6' x2='10' y2='10' />
    <polyline fill='none' points='7.33 10 10 10 10 7.33' />
    <line strokeOpacity='.2' x1='6' y1='18' x2='10' y2='14' />
    <polyline fill='none' points='7.33 14 10 14 10 16.67' />
    <line strokeOpacity='.2' x1='14' y1='10' x2='18' y2='6' />
    <polyline fill='none' points='16.67 10 14 10 14 7.33' />
    <line strokeOpacity='.2' x1='14' y1='14' x2='18' y2='18' />
    <polyline fill='none' points='16.67 14 14 14 14 16.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='6' y1='6' x2='10' y2='10' />
    <polyline fill='none' points='7.33 10 10 10 10 7.33' />
    <line stroke={secondaryColor} x1='6' y1='18' x2='10' y2='14' />
    <polyline fill='none' points='7.33 14 10 14 10 16.67' />
    <line stroke={secondaryColor} x1='14' y1='10' x2='18' y2='6' />
    <polyline fill='none' points='16.67 10 14 10 14 7.33' />
    <line stroke={secondaryColor} x1='14' y1='14' x2='18' y2='18' />
    <polyline fill='none' points='16.67 14 14 14 14 16.67' />
  </Fragment>
)

const ArrowsMinimize = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsMinimize
