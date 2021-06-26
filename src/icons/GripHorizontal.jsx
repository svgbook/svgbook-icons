import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='6.75' cy='9.75' r='0.75' />
    <circle fill='none' cx='6.75' cy='14.25' r='0.75' />
    <circle fill='none' cx='12' cy='9.75' r='0.75' />
    <circle fill='none' cx='12' cy='14.25' r='0.75' />
    <circle fill='none' cx='17.25' cy='9.75' r='0.75' />
    <circle fill='none' cx='17.25' cy='14.25' r='0.75' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='6.75' cy='9.75' r='0.75' />
    <circle cx='6.75' cy='14.25' r='0.75' />
    <circle cx='12' cy='9.75' r='0.75' />
    <circle cx='12' cy='14.25' r='0.75' />
    <circle cx='17.25' cy='9.75' r='0.75' />
    <circle cx='17.25' cy='14.25' r='0.75' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='6.75' cy='9.75' r='0.75' />
    <circle fillOpacity='.2' cx='6.75' cy='14.25' r='0.75' />
    <circle fillOpacity='.2' cx='12' cy='9.75' r='0.75' />
    <circle fillOpacity='.2' cx='12' cy='14.25' r='0.75' />
    <circle fillOpacity='.2' cx='17.25' cy='9.75' r='0.75' />
    <circle fillOpacity='.2' cx='17.25' cy='14.25' r='0.75' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='6.75' cy='9.75' r='0.75' />
    <circle fill={secondaryColor} cx='6.75' cy='14.25' r='0.75' />
    <circle fill={secondaryColor} cx='12' cy='9.75' r='0.75' />
    <circle fill={secondaryColor} cx='12' cy='14.25' r='0.75' />
    <circle fill={secondaryColor} cx='17.25' cy='9.75' r='0.75' />
    <circle fill={secondaryColor} cx='17.25' cy='14.25' r='0.75' />
  </Fragment>
)

const GripHorizontal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GripHorizontal
