import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='10.13' cy='10.13' r='4.13' />
    <circle fill='none' cx='13.88' cy='13.88' r='4.13' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='10.13' cy='10.13' r='4.13' />
    <circle cx='13.88' cy='13.88' r='4.13' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='10.13' cy='10.13' r='4.13' />
    <circle fillOpacity='.2' cx='13.88' cy='13.88' r='4.13' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='10.13' cy='10.13' r='4.13' />
    <circle fill={secondaryColor} cx='13.88' cy='13.88' r='4.13' />
  </Fragment>
)

const ChartCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartCircle
