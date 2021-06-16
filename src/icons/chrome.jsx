import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <circle fill='none' cx='12' cy='12' r='2' />
    <line x1='12' y1='10' x2='17.6' y2='10' />
    <line x1='13.73' y1='13' x2='10.93' y2='17.85' />
    <line x1='10.27' y1='13' x2='7.47' y2='8.15' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <circle cx='12' cy='12' r='2' />
    <line x1='12' y1='10' x2='17.6' y2='10' />
    <line x1='13.73' y1='13' x2='10.93' y2='17.85' />
    <line x1='10.27' y1='13' x2='7.47' y2='8.15' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <circle fill='none' cx='12' cy='12' r='2' />
    <line x1='12' y1='10' x2='17.6' y2='10' />
    <line x1='13.73' y1='13' x2='10.93' y2='17.85' />
    <line x1='10.27' y1='13' x2='7.47' y2='8.15' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='12' y1='10' x2='17.6' y2='10' />
    <line stroke={secondaryColor} x1='13.73' y1='13' x2='10.93' y2='17.85' />
    <line stroke={secondaryColor} x1='10.27' y1='13' x2='7.47' y2='8.15' />
    <circle fill='none' stroke={secondaryColor} cx='12' cy='12' r='2' />
    <circle fill='none' cx='12' cy='12' r='6' />
  </Fragment>
)

const Chrome = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Chrome
