import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M16.67,14.33,19,12,16.67,9.67' />
    <path fill='none' d='M5,14.33,7.33,12,5,9.67' />
    <line x1='7.33' y1='12' x2='19' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M16.67,14.33,19,12,16.67,9.67' />
    <path fill='none' d='M5,14.33,7.33,12,5,9.67' />
    <line x1='7.33' y1='12' x2='19' y2='12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M16.67,14.33,19,12,16.67,9.67' />
    <path fill='none' d='M5,14.33,7.33,12,5,9.67' />
    <line strokeOpacity='.2' x1='7.33' y1='12' x2='19' y2='12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='7.33' y1='12' x2='19' y2='12' />
    <path fill='none' d='M16.67,14.33,19,12,16.67,9.67' />
    <path fill='none' d='M5,14.33,7.33,12,5,9.67' />
  </Fragment>
)

const ArrowRightTail = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowRightTail
