import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='10.67' x2='13.33' y2='18' />
    <path fill='none' d='M13.33,15.33V18H10.67' />
    <path d='M18,13.33,10.67,6' />
    <path fill='none' d='M13.33,6H10.67V8.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='10.67' x2='13.33' y2='18' />
    <path fill='none' d='M13.33,15.33V18H10.67' />
    <path d='M18,13.33,10.67,6' />
    <path fill='none' d='M13.33,6H10.67V8.67' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='6' y1='10.67' x2='13.33' y2='18' />
    <path fill='none' d='M13.33,15.33V18H10.67' />
    <path strokeOpacity='.2' d='M18,13.33,10.67,6' />
    <path fill='none' d='M13.33,6H10.67V8.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='6' y1='10.67' x2='13.33' y2='18' />
    <path fill='none' d='M13.33,15.33V18H10.67' />
    <path stroke={secondaryColor} d='M18,13.33,10.67,6' />
    <path fill='none' d='M13.33,6H10.67V8.67' />
  </Fragment>
)

const ArrowsDoubleSENW = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsDoubleSENW
