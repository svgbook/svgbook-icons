import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='15 6 18 6 18 9' />
    <line x1='13.5' y1='10.5' x2='18' y2='6' />
    <polyline fill='none' points='9 18 6 18 6 15' />
    <line x1='6' y1='18' x2='10.5' y2='13.5' />
    <polyline fill='none' points='15 18 18 18 18 15' />
    <line x1='13.5' y1='13.5' x2='18' y2='18' />
    <polyline fill='none' points='9 6 6 6 6 9' />
    <line x1='6' y1='6' x2='10.5' y2='10.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline fill='none' points='15 6 18 6 18 9' />
    <line x1='13.5' y1='10.5' x2='18' y2='6' />
    <polyline fill='none' points='9 18 6 18 6 15' />
    <line x1='6' y1='18' x2='10.5' y2='13.5' />
    <polyline fill='none' points='15 18 18 18 18 15' />
    <line x1='13.5' y1='13.5' x2='18' y2='18' />
    <polyline fill='none' points='9 6 6 6 6 9' />
    <line x1='6' y1='6' x2='10.5' y2='10.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline fill='none' points='15 6 18 6 18 9' />
    <line strokeOpacity='.2' x1='13.5' y1='10.5' x2='18' y2='6' />
    <polyline fill='none' points='9 18 6 18 6 15' />
    <line strokeOpacity='.2' x1='6' y1='18' x2='10.5' y2='13.5' />
    <polyline fill='none' points='15 18 18 18 18 15' />
    <line strokeOpacity='.2' x1='13.5' y1='13.5' x2='18' y2='18' />
    <polyline fill='none' points='9 6 6 6 6 9' />
    <line strokeOpacity='.2' x1='6' y1='6' x2='10.5' y2='10.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='13.5' y1='10.5' x2='18' y2='6' />
    <polyline fill='none' points='15 6 18 6 18 9' />
    <line stroke={secondaryColor} x1='6' y1='18' x2='10.5' y2='13.5' />
    <polyline fill='none' points='9 18 6 18 6 15' />
    <line stroke={secondaryColor} x1='13.5' y1='13.5' x2='18' y2='18' />
    <polyline fill='none' points='15 18 18 18 18 15' />
    <line stroke={secondaryColor} x1='6' y1='6' x2='10.5' y2='10.5' />
    <polyline fill='none' points='9 6 6 6 6 9' />
  </Fragment>
)

const ArrowsMaximize = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsMaximize
