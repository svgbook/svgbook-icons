import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='13.5' y1='10.5' x2='18' y2='6' />
    <polyline fill='none' points='15 6 18 6 18 9' />
    <line x1='6' y1='18' x2='10.5' y2='13.5' />
    <polyline fill='none' points='9 18 6 18 6 15' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='13.5' y1='10.5' x2='18' y2='6' />
    <polyline fill='none' points='15 6 18 6 18 9' />
    <line x1='6' y1='18' x2='10.5' y2='13.5' />
    <polyline fill='none' points='9 18 6 18 6 15' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='13.5' y1='10.5' x2='18' y2='6' />
    <polyline fill='none' points='15 6 18 6 18 9' />
    <line strokeOpacity='.2' x1='6' y1='18' x2='10.5' y2='13.5' />
    <polyline fill='none' points='9 18 6 18 6 15' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='13.5' y1='10.5' x2='18' y2='6' />
    <polyline fill='none' points='15 6 18 6 18 9' />
    <line stroke={secondaryColor} x1='6' y1='18' x2='10.5' y2='13.5' />
    <polyline fill='none' points='9 18 6 18 6 15' />
  </Fragment>
)

const ArrowDiagonal2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowDiagonal2
