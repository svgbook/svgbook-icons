import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='3.6' />
    <circle fill='none' cx='7.8' cy='9.6' r='1.2' />
    <circle fill='none' cx='12' cy='7.2' r='1.2' />
    <circle fill='none' cx='16.2' cy='9.6' r='1.2' />
    <circle fill='none' cx='7.8' cy='14.4' r='1.2' />
    <circle fill='none' cx='16.2' cy='14.4' r='1.2' />
    <path fill='none' d='M9.6,18,12,12l2.4,6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='3.6' />
    <circle cx='7.8' cy='9.6' r='1.2' />
    <circle cx='12' cy='7.2' r='1.2' />
    <circle cx='16.2' cy='9.6' r='1.2' />
    <circle cx='7.8' cy='14.4' r='1.2' />
    <circle cx='16.2' cy='14.4' r='1.2' />
    <path fill='none' d='M9.6,18,12,12l2.4,6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='3.6' />
    <circle fill='none' cx='7.8' cy='9.6' r='1.2' />
    <circle fill='none' cx='12' cy='7.2' r='1.2' />
    <circle fill='none' cx='16.2' cy='9.6' r='1.2' />
    <circle fill='none' cx='7.8' cy='14.4' r='1.2' />
    <circle fill='none' cx='16.2' cy='14.4' r='1.2' />
    <path fill='none' d='M9.6,18,12,12l2.4,6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='3.6' />
    <circle fill='none' cx='7.8' cy='9.6' r='1.2' />
    <circle fill='none' cx='12' cy='7.2' r='1.2' />
    <circle fill='none' cx='16.2' cy='9.6' r='1.2' />
    <circle fill='none' cx='7.8' cy='14.4' r='1.2' />
    <circle fill='none' cx='16.2' cy='14.4' r='1.2' />
    <path fill='none' d='M9.6,18,12,12l2.4,6' />
  </Fragment>
)

const Carousel = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Carousel
