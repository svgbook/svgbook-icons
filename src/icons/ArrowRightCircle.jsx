import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M16.64,14.33,19,12,16.64,9.68' />
    <circle fill='none' cx='6.55' cy='12' r='1.55' />
    <path d='M8.1,12H19' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M16.64,14.33,19,12,16.64,9.68' />
    <circle cx='6.55' cy='12' r='1.55' />
    <path d='M8.1,12H19' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M16.64,14.33,19,12,16.64,9.68' />
    <circle fillOpacity='.2' cx='6.55' cy='12' r='1.55' />
    <path strokeOpacity='.2' d='M8.1,12H19' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path stroke={secondaryColor} d='M8.1,12H19' />
    <path fill='none' d='M16.64,14.33,19,12,16.64,9.68' />
    <circle fill={secondaryColor} cx='6.55' cy='12' r='1.55' />
  </Fragment>
)

const ArrowRightCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowRightCircle
