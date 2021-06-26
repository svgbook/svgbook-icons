import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='6.71' cy='10.24' r='0.71' />
    <circle fill='none' cx='10.24' cy='6.71' r='0.71' />
    <circle fill='none' cx='10.24' cy='13.76' r='0.71' />
    <circle fill='none' cx='6.71' cy='17.29' r='0.71' />
    <circle fill='none' cx='13.76' cy='10.24' r='0.71' />
    <circle fill='none' cx='17.29' cy='6.71' r='0.71' />
    <circle fill='none' cx='13.76' cy='17.29' r='0.71' />
    <circle fill='none' cx='17.29' cy='13.76' r='0.71' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='6.71' cy='10.24' r='0.71' />
    <circle cx='10.24' cy='6.71' r='0.71' />
    <circle cx='10.24' cy='13.76' r='0.71' />
    <circle cx='6.71' cy='17.29' r='0.71' />
    <circle cx='13.76' cy='10.24' r='0.71' />
    <circle cx='17.29' cy='6.71' r='0.71' />
    <circle cx='13.76' cy='17.29' r='0.71' />
    <circle cx='17.29' cy='13.76' r='0.71' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='6.71' cy='10.24' r='0.71' />
    <circle fillOpacity='.2' cx='10.24' cy='6.71' r='0.71' />
    <circle fillOpacity='.2' cx='10.24' cy='13.76' r='0.71' />
    <circle fillOpacity='.2' cx='6.71' cy='17.29' r='0.71' />
    <circle fillOpacity='.2' cx='13.76' cy='10.24' r='0.71' />
    <circle fillOpacity='.2' cx='17.29' cy='6.71' r='0.71' />
    <circle fillOpacity='.2' cx='13.76' cy='17.29' r='0.71' />
    <circle fillOpacity='.2' cx='17.29' cy='13.76' r='0.71' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='6.71' cy='10.24' r='0.71' />
    <circle fill={secondaryColor} cx='10.24' cy='6.71' r='0.71' />
    <circle fill={secondaryColor} cx='10.24' cy='13.76' r='0.71' />
    <circle fill={secondaryColor} cx='6.71' cy='17.29' r='0.71' />
    <circle fill={secondaryColor} cx='13.76' cy='10.24' r='0.71' />
    <circle fill={secondaryColor} cx='17.29' cy='6.71' r='0.71' />
    <circle fill={secondaryColor} cx='13.76' cy='17.29' r='0.71' />
    <circle fill={secondaryColor} cx='17.29' cy='13.76' r='0.71' />
  </Fragment>
)

const Grain = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Grain
