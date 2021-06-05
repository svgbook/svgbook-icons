import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='9' y='9' width='9' height='9' rx='1.5' />
    <path
      fill='none'
      d='M15,9V7.5A1.5,1.5,0,0,0,13.5,6h-6A1.5,1.5,0,0,0,6,7.5v6A1.5,1.5,0,0,0,7.5,15H9'
    />
  </Fragment>
)

renderPath['fill'] = (color) => (
  <Fragment>
    <rect x='9' y='9' width='9' height='9' rx='1.5' />
    <path
      fill='none'
      d='M15,9V7.5A1.5,1.5,0,0,0,13.5,6h-6A1.5,1.5,0,0,0,6,7.5v6A1.5,1.5,0,0,0,7.5,15H9'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='9' y='9' width='9' height='9' rx='1.5' />
    <path
      fill='none'
      d='M15,9V7.5A1.5,1.5,0,0,0,13.5,6h-6A1.5,1.5,0,0,0,6,7.5v6A1.5,1.5,0,0,0,7.5,15H9'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='9' y='9' width='9' height='9' rx='1.5' />
    <path
      fill='none'
      d='M15,9V7.5A1.5,1.5,0,0,0,13.5,6h-6A1.5,1.5,0,0,0,6,7.5v6A1.5,1.5,0,0,0,7.5,15H9'
    />
  </Fragment>
)

const Copy = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Copy
