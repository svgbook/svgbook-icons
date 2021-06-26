import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,7.33h7.33' />
    <path fill='none' d='M12,8.67l1.33-1.34L12,6' />
    <path fill='none' d='M7.33,6,6,7.33,7.33,8.67' />
    <path fill='none' d='M16.67,10.67V18' />
    <path fill='none' d='M15.33,16.67,16.67,18,18,16.67' />
    <path fill='none' d='M18,12l-1.33-1.33L15.33,12' />
    <rect fill='none' x='6' y='10.67' width='7.33' height='7.33' rx='1.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,7.33h7.33' />
    <path fill='none' d='M12,8.67l1.33-1.34L12,6' />
    <path fill='none' d='M7.33,6,6,7.33,7.33,8.67' />
    <path fill='none' d='M16.67,10.67V18' />
    <path fill='none' d='M15.33,16.67,16.67,18,18,16.67' />
    <path fill='none' d='M18,12l-1.33-1.33L15.33,12' />
    <rect x='6' y='10.67' width='7.33' height='7.33' rx='1.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M6,7.33h7.33' />
    <path fill='none' d='M12,8.67l1.33-1.34L12,6' />
    <path fill='none' d='M7.33,6,6,7.33,7.33,8.67' />
    <path fill='none' strokeOpacity='.2' d='M16.67,10.67V18' />
    <path fill='none' d='M15.33,16.67,16.67,18,18,16.67' />
    <path fill='none' d='M18,12l-1.33-1.33L15.33,12' />
    <rect fill='none' x='6' y='10.67' width='7.33' height='7.33' rx='1.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M6,7.33h7.33' />
    <path fill='none' d='M12,8.67l1.33-1.34L12,6' />
    <path fill='none' d='M7.33,6,6,7.33,7.33,8.67' />
    <path fill='none' stroke={secondaryColor} d='M16.67,10.67V18' />
    <path fill='none' d='M15.33,16.67,16.67,18,18,16.67' />
    <path fill='none' d='M18,12l-1.33-1.33L15.33,12' />
    <rect fill='none' x='6' y='10.67' width='7.33' height='7.33' rx='1.33' />
  </Fragment>
)

const Dimensions = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Dimensions
