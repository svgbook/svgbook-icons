import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='8.67' cy='14.67' r='2' />
    <circle fill='none' cx='15.33' cy='16.67' r='1.33' />
    <circle fill='none' cx='14.33' cy='9' r='3' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='8.67' cy='14.67' r='2' />
    <circle cx='15.33' cy='16.67' r='1.33' />
    <circle cx='14.33' cy='9' r='3' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='8.67' cy='14.67' r='2' />
    <circle fillOpacity='.2' cx='15.33' cy='16.67' r='1.33' />
    <circle fillOpacity='.2' cx='14.33' cy='9' r='3' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='8.67' cy='14.67' r='2' />
    <circle fill={secondaryColor} cx='15.33' cy='16.67' r='1.33' />
    <circle fill={secondaryColor} cx='14.33' cy='9' r='3' />
  </Fragment>
)

const ChartBubble = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartBubble
