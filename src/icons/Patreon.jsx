import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M5.83,6h2V18h-2Z' />
    <circle fill='none' cx='13.83' cy='10.33' r='4.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M5.83,6h2V18h-2Z' />
    <circle cx='13.83' cy='10.33' r='4.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M5.83,6h2V18h-2Z' />
    <circle fillOpacity='.2' cx='13.83' cy='10.33' r='4.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M5.83,6h2V18h-2Z' />
    <circle fill={secondaryColor} cx='13.83' cy='10.33' r='4.33' />
  </Fragment>
)

const Patreon = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Patreon
