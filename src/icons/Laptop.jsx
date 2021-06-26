import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='16.33' x2='18' y2='16.33' />
    <rect fill='none' x='7.33' y='7.67' width='9.33' height='6.67' rx='0.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='16.33' x2='18' y2='16.33' />
    <rect x='7.33' y='7.67' width='9.33' height='6.67' rx='0.67' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6' y1='16.33' x2='18' y2='16.33' />
    <rect
      fillOpacity='.2'
      x='7.33'
      y='7.67'
      width='9.33'
      height='6.67'
      rx='0.67'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6' y1='16.33' x2='18' y2='16.33' />
    <rect
      fill={secondaryColor}
      x='7.33'
      y='7.67'
      width='9.33'
      height='6.67'
      rx='0.67'
    />
  </Fragment>
)

const Laptop = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Laptop
