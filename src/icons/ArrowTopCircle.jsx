import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='15.33' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <circle fill='none' cx='12' cy='16.67' r='1.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='15.33' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <circle cx='12' cy='16.67' r='1.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='12' y1='15.33' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <circle fillOpacity='.2' cx='12' cy='16.67' r='1.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='12' y1='15.33' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <circle fill={secondaryColor} cx='12' cy='16.67' r='1.33' />
  </Fragment>
)

const ArrowTopCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowTopCircle
