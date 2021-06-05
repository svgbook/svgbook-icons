import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M15.33,13.33H18V10.67' />
    <path d='M13.33,18,6,10.67' />
    <path fill='none' d='M6,13.33V10.67H8.67' />
    <line x1='10.67' y1='6' x2='18' y2='13.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M15.33,13.33H18V10.67' />
    <path d='M13.33,18,6,10.67' />
    <path fill='none' d='M6,13.33V10.67H8.67' />
    <line x1='10.67' y1='6' x2='18' y2='13.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M15.33,13.33H18V10.67' />
    <path strokeOpacity='.2' d='M13.33,18,6,10.67' />
    <path fill='none' d='M6,13.33V10.67H8.67' />
    <line strokeOpacity='.2' x1='10.67' y1='6' x2='18' y2='13.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='10.67' y1='6' x2='18' y2='13.33' />
    <path fill='none' d='M15.33,13.33H18V10.67' />
    <path stroke={secondaryColor} d='M13.33,18,6,10.67' />
    <path fill='none' d='M6,13.33V10.67H8.67' />
  </Fragment>
)

const ArrowsDoubleNWSE = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsDoubleNWSE
