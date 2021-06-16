import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='10.67' y='10' width='2.67' height='8' rx='0.74' />
    <rect fill='none' x='15.33' y='6' width='2.67' height='12' rx='0.74' />
    <circle fill='none' cx='7.33' cy='16.67' r='1.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect x='10.67' y='10' width='2.67' height='8' rx='0.74' />
    <rect x='15.33' y='6' width='2.67' height='12' rx='0.74' />
    <circle cx='7.33' cy='16.67' r='1.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='10.67' y='10' width='2.67' height='8' rx='0.74' />
    <rect fillOpacity='.2' x='15.33' y='6' width='2.67' height='12' rx='0.74' />
    <circle fillOpacity='.2' cx='7.33' cy='16.67' r='1.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='10.67'
      y='10'
      width='2.67'
      height='8'
      rx='0.74'
    />
    <rect
      fill={secondaryColor}
      x='15.33'
      y='6'
      width='2.67'
      height='12'
      rx='0.74'
    />
    <circle fill={secondaryColor} cx='7.33' cy='16.67' r='1.33' />
  </Fragment>
)

const GoogleAnalytics = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GoogleAnalytics
