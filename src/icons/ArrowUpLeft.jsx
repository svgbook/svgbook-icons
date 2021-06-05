import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <polyline fill='none' points='16.8 6 6 6 6 16.8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <polyline fill='none' points='16.8 6 6 6 6 16.8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='6' y1='6' x2='18' y2='18' />
    <polyline fill='none' points='16.8 6 6 6 6 16.8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='6' y1='6' x2='18' y2='18' />
    <polyline fill='none' points='16.8 6 6 6 6 16.8' />
  </Fragment>
)

const ArrowUpLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowUpLeft
