import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='8.4' r='2.4' />
    <circle fill='none' cx='15.6' cy='15.6' r='2.4' />
    <circle fill='none' cx='8.4' cy='15.6' r='2.4' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='8.4' r='2.4' />
    <circle cx='15.6' cy='15.6' r='2.4' />
    <circle cx='8.4' cy='15.6' r='2.4' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='8.4' r='2.4' />
    <circle fillOpacity='.2' cx='15.6' cy='15.6' r='2.4' />
    <circle fillOpacity='.2' cx='8.4' cy='15.6' r='2.4' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='8.4' r='2.4' />
    <circle fill={secondaryColor} cx='15.6' cy='15.6' r='2.4' />
    <circle fill={secondaryColor} cx='8.4' cy='15.6' r='2.4' />
  </Fragment>
)

const Asana = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Asana
