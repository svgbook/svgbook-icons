import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline points='18.08 15.87 18.08 5.92 8.13 5.92' fill='none' />
    <rect x='5.92' y='8.13' width='9.95' height='9.95' fill='none' />
  </Fragment>
)

renderPath['fill'] = (color) => (
  <Fragment>
    <polyline points='18.08 15.87 18.08 5.92 8.13 5.92' fill='none' />
    <rect x='5.92' y='8.13' width='9.95' height='9.95' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline points='18.08 15.87 18.08 5.92 8.13 5.92' fill='none' />
    <rect x='5.92' y='8.13' width='9.95' height='9.95' fillOpacity='.2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline points='18.08 15.87 18.08 5.92 8.13 5.92' fill='none' />
    <rect x='5.92' y='8.13' width='9.95' height='9.95' fill={secondaryColor} />
  </Fragment>
)

const Copy = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Copy
