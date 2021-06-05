import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='18' y1='6' x2='6' y2='18' />
    <polyline fill='none' points='7.2 6 18 6 18 16.8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='18' y1='6' x2='6' y2='18' />
    <polyline fill='none' points='7.2 6 18 6 18 16.8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='18' y1='6' x2='6' y2='18' />
    <polyline fill='none' points='7.2 6 18 6 18 16.8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='18' y1='6' x2='6' y2='18' />
    <polyline fill='none' points='7.2 6 18 6 18 16.8' />
  </Fragment>
)

const ArrowUpRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowUpRight
