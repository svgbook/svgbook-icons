import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M16.67,14.33,19,12,16.67,9.67' />
    <path d='M5,12H19' />
    <path d='M5,9.67v4.66' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M16.67,14.33,19,12,16.67,9.67' />
    <path d='M5,12H19' />
    <path d='M5,9.67v4.66' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M16.67,14.33,19,12,16.67,9.67' />
    <path strokeOpacity='.2' d='M5,12H19' />
    <path d='M5,9.67v4.66' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path stroke={secondaryColor} d='M5,12H19' />
    <path fill='none' d='M16.67,14.33,19,12,16.67,9.67' />
    <path d='M5,9.67v4.66' />
  </Fragment>
)

const ArrowRightBar = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowRightBar
