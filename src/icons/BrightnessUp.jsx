import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='11.67' cy='12' r='2' />
    <line x1='11.67' y1='7.33' x2='11.67' y2='6' />
    <line x1='15' y1='8.67' x2='15.93' y2='7.73' />
    <line x1='16.33' y1='12' x2='17.67' y2='12' />
    <line x1='15' y1='15.33' x2='15.93' y2='16.27' />
    <line x1='11.67' y1='16.67' x2='11.67' y2='18' />
    <line x1='8.33' y1='15.33' x2='7.4' y2='16.27' />
    <line x1='7.67' y1='12' x2='6.33' y2='12' />
    <line x1='8.33' y1='8.67' x2='7.4' y2='7.73' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='11.67' cy='12' r='2' />
    <line x1='11.67' y1='7.33' x2='11.67' y2='6' />
    <line x1='15' y1='8.67' x2='15.93' y2='7.73' />
    <line x1='16.33' y1='12' x2='17.67' y2='12' />
    <line x1='15' y1='15.33' x2='15.93' y2='16.27' />
    <line x1='11.67' y1='16.67' x2='11.67' y2='18' />
    <line x1='8.33' y1='15.33' x2='7.4' y2='16.27' />
    <line x1='7.67' y1='12' x2='6.33' y2='12' />
    <line x1='8.33' y1='8.67' x2='7.4' y2='7.73' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='11.67' cy='12' r='2' />
    <line x1='11.67' y1='7.33' x2='11.67' y2='6' />
    <line x1='15' y1='8.67' x2='15.93' y2='7.73' />
    <line x1='16.33' y1='12' x2='17.67' y2='12' />
    <line x1='15' y1='15.33' x2='15.93' y2='16.27' />
    <line x1='11.67' y1='16.67' x2='11.67' y2='18' />
    <line x1='8.33' y1='15.33' x2='7.4' y2='16.27' />
    <line x1='7.67' y1='12' x2='6.33' y2='12' />
    <line x1='8.33' y1='8.67' x2='7.4' y2='7.73' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='11.67' cy='12' r='2' />
    <line x1='11.67' y1='7.33' x2='11.67' y2='6' />
    <line x1='15' y1='8.67' x2='15.93' y2='7.73' />
    <line x1='16.33' y1='12' x2='17.67' y2='12' />
    <line x1='15' y1='15.33' x2='15.93' y2='16.27' />
    <line x1='11.67' y1='16.67' x2='11.67' y2='18' />
    <line x1='8.33' y1='15.33' x2='7.4' y2='16.27' />
    <line x1='7.67' y1='12' x2='6.33' y2='12' />
    <line x1='8.33' y1='8.67' x2='7.4' y2='7.73' />
  </Fragment>
)

const BrightnessUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BrightnessUp
