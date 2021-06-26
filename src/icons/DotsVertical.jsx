import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='0.75' />
    <circle fill='none' cx='12' cy='17.25' r='0.75' />
    <circle fill='none' cx='12' cy='6.75' r='0.75' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='12' r='0.75' />
    <circle cx='12' cy='17.25' r='0.75' />
    <circle cx='12' cy='6.75' r='0.75' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='0.75' />
    <circle fillOpacity='.2' cx='12' cy='17.25' r='0.75' />
    <circle fillOpacity='.2' cx='12' cy='6.75' r='0.75' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='0.75' />
    <circle fill={secondaryColor} cx='12' cy='17.25' r='0.75' />
    <circle fill={secondaryColor} cx='12' cy='6.75' r='0.75' />
  </Fragment>
)

const DotsVertical = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DotsVertical
