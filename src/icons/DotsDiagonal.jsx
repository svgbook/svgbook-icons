import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='7' cy='17' r='1' />
    <circle fill='none' cx='12' cy='12' r='1' />
    <circle fill='none' cx='17' cy='7' r='1' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='7' cy='17' r='1' />
    <circle cx='12' cy='12' r='1' />
    <circle cx='17' cy='7' r='1' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='7' cy='17' r='1' />
    <circle fillOpacity='.2' cx='12' cy='12' r='1' />
    <circle fillOpacity='.2' cx='17' cy='7' r='1' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='7' cy='17' r='1' />
    <circle fill={secondaryColor} cx='12' cy='12' r='1' />
    <circle fill={secondaryColor} cx='17' cy='7' r='1' />
  </Fragment>
)

const DotsDiagonal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DotsDiagonal
