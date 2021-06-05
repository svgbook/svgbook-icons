import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <polyline fill='none' points='18 7.2 18 18 7.2 18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <polyline fill='none' points='18 7.2 18 18 7.2 18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='6' y1='6' x2='18' y2='18' />
    <polyline fill='none' points='18 7.2 18 18 7.2 18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='6' y1='6' x2='18' y2='18' />
    <polyline fill='none' points='18 7.2 18 18 7.2 18' />
  </Fragment>
)

const ArrowDownRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowDownRight
