import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='10.33' cy='10.33' r='4.33' />
    <rect
      fill='none'
      x='10.67'
      y='10.67'
      width='7.33'
      height='7.33'
      rx='1.33'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='10.33' cy='10.33' r='4.33' />
    <rect x='10.67' y='10.67' width='7.33' height='7.33' rx='1.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='10.33' cy='10.33' r='4.33' />
    <rect
      fillOpacity='.2'
      x='10.67'
      y='10.67'
      width='7.33'
      height='7.33'
      rx='1.33'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' cx='10.33' cy='10.33' r='4.33' />
    <rect
      fill={secondaryColor}
      x='10.67'
      y='10.67'
      width='7.33'
      height='7.33'
      rx='1.33'
    />
  </Fragment>
)

const CircleSquare = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CircleSquare
