import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='11.13' cy='10.42' r='2.53' />
    <path
      fill='none'
      d='M7.81,14.21a5.06,5.06,0,0,0,6.64-7.64,4.87,4.87,0,0,0-.8-.57'
    />
    <line x1='11.13' y1='15.47' x2='11.13' y2='18' />
    <line x1='8.6' y1='18' x2='13.65' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='11.13' cy='10.42' r='2.53' />
    <path
      fill='none'
      d='M7.81,14.21a5.06,5.06,0,0,0,6.64-7.64,4.87,4.87,0,0,0-.8-.57'
    />
    <line x1='11.13' y1='15.47' x2='11.13' y2='18' />
    <line x1='8.6' y1='18' x2='13.65' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='11.13' cy='10.42' r='2.53' />
    <path
      fill='none'
      d='M7.81,14.21a5.06,5.06,0,0,0,6.64-7.64,4.87,4.87,0,0,0-.8-.57'
    />
    <line x1='11.13' y1='15.47' x2='11.13' y2='18' />
    <line x1='8.6' y1='18' x2='13.65' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='11.13' cy='10.42' r='2.53' />
    <path
      fill='none'
      d='M7.81,14.21a5.06,5.06,0,0,0,6.64-7.64,4.87,4.87,0,0,0-.8-.57'
    />
    <line x1='11.13' y1='15.47' x2='11.13' y2='18' />
    <line x1='8.6' y1='18' x2='13.65' y2='18' />
  </Fragment>
)

const Globe = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Globe
