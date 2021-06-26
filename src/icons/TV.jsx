import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='9' width='12' height='8.67' rx='1.33' />
    <polyline fill='none' points='14.67 6.33 12 9 9.33 6.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect x='6' y='9' width='12' height='8.67' rx='1.33' />
    <polyline fill='none' points='14.67 6.33 12 9 9.33 6.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='9' width='12' height='8.67' rx='1.33' />
    <polyline fill='none' points='14.67 6.33 12 9 9.33 6.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6'
      y='9'
      width='12'
      height='8.67'
      rx='1.33'
    />
    <polyline fill='none' points='14.67 6.33 12 9 9.33 6.33' />
  </Fragment>
)

const TV = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default TV
