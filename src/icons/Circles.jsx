import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='8.67' r='2.67' />
    <circle fill='none' cx='8.33' cy='15.33' r='2.67' />
    <circle fill='none' cx='15.67' cy='15.33' r='2.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='8.67' r='2.67' />
    <circle cx='8.33' cy='15.33' r='2.67' />
    <circle cx='15.67' cy='15.33' r='2.67' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='8.67' r='2.67' />
    <circle fillOpacity='.2' cx='8.33' cy='15.33' r='2.67' />
    <circle fillOpacity='.2' cx='15.67' cy='15.33' r='2.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='8.67' r='2.67' />
    <circle fill={secondaryColor} cx='8.33' cy='15.33' r='2.67' />
    <circle fill={secondaryColor} cx='15.67' cy='15.33' r='2.67' />
  </Fragment>
)

const Circles = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Circles
