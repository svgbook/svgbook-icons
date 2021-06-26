import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='18' y1='15.43' x2='15.43' y2='15.43' />
    <line x1='8.57' y1='8.57' x2='8.57' y2='6' />
    <path
      fill='none'
      d='M15.43,9.43v6h-6a.85.85,0,0,1-.86-.86v-6h6A.85.85,0,0,1,15.43,9.43Z'
    />
    <line x1='15.43' y1='18' x2='15.43' y2='15.43' />
    <line x1='8.57' y1='8.57' x2='6' y2='8.57' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='18' y1='15.43' x2='15.43' y2='15.43' />
    <line x1='8.57' y1='8.57' x2='8.57' y2='6' />
    <path d='M15.43,9.43v6h-6a.85.85,0,0,1-.86-.86v-6h6A.85.85,0,0,1,15.43,9.43Z' />
    <line x1='15.43' y1='18' x2='15.43' y2='15.43' />
    <line x1='8.57' y1='8.57' x2='6' y2='8.57' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='18' y1='15.43' x2='15.43' y2='15.43' />
    <line x1='8.57' y1='8.57' x2='8.57' y2='6' />
    <path
      fillOpacity='.2'
      d='M15.43,9.43v6h-6a.85.85,0,0,1-.86-.86v-6h6A.85.85,0,0,1,15.43,9.43Z'
    />
    <line x1='15.43' y1='18' x2='15.43' y2='15.43' />
    <line x1='8.57' y1='8.57' x2='6' y2='8.57' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='18' y1='15.43' x2='15.43' y2='15.43' />
    <line x1='8.57' y1='8.57' x2='8.57' y2='6' />
    <path
      fill={secondaryColor}
      d='M15.43,9.43v6h-6a.85.85,0,0,1-.86-.86v-6h6A.85.85,0,0,1,15.43,9.43Z'
    />
    <line x1='15.43' y1='18' x2='15.43' y2='15.43' />
    <line x1='8.57' y1='8.57' x2='6' y2='8.57' />
  </Fragment>
)

const Crop = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Crop
