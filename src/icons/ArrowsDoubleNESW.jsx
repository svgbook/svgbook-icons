import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,13.33,13.33,6' />
    <path fill='none' d='M10.67,6h2.66V8.67' />
    <path fill='none' d='M10.67,15.33V18h2.66' />
    <path fill='none' d='M18,10.67,10.67,18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,13.33,13.33,6' />
    <path fill='none' d='M10.67,6h2.66V8.67' />
    <path fill='none' d='M10.67,15.33V18h2.66' />
    <path fill='none' d='M18,10.67,10.67,18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path strokeOpacity='.2' d='M6,13.33,13.33,6' />
    <path fill='none' d='M10.67,6h2.66V8.67' />
    <path strokeOpacity='.2' d='M18,10.67,10.67,18' />
    <path fill='none' d='M10.67,15.33V18h2.66' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path stroke={secondaryColor} d='M6,13.33,13.33,6' />
    <path fill='none' d='M10.67,6h2.66V8.67' />
    <path stroke={secondaryColor} d='M18,10.67,10.67,18' />
    <path fill='none' d='M10.67,15.33V18h2.66' />
  </Fragment>
)

const ArrowsDoubleNESW = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsDoubleNESW
