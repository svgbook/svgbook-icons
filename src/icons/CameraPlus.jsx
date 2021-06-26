import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='13' r='2' />
    <path
      fill='none'
      d='M7.33,9H8.67A1.34,1.34,0,0,0,10,7.67.67.67,0,0,1,10.67,7H12m6,4.67v4.66a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,16.33v-6A1.34,1.34,0,0,1,7.33,9'
    />
    <line x1='14' y1='8.33' x2='18' y2='8.33' />
    <line x1='16' y1='6.33' x2='16' y2='10.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='13' r='2' />
    <path
      fill='none'
      d='M7.33,9H8.67A1.34,1.34,0,0,0,10,7.67.67.67,0,0,1,10.67,7H12m6,4.67v4.66a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,16.33v-6A1.34,1.34,0,0,1,7.33,9'
    />
    <line x1='14' y1='8.33' x2='18' y2='8.33' />
    <line x1='16' y1='6.33' x2='16' y2='10.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='13' r='2' />
    <path
      fill='none'
      d='M7.33,9H8.67A1.34,1.34,0,0,0,10,7.67.67.67,0,0,1,10.67,7H12m6,4.67v4.66a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,16.33v-6A1.34,1.34,0,0,1,7.33,9'
    />
    <line x1='14' y1='8.33' x2='18' y2='8.33' />
    <line x1='16' y1='6.33' x2='16' y2='10.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='13' r='2' />
    <path
      fill='none'
      d='M7.33,9H8.67A1.34,1.34,0,0,0,10,7.67.67.67,0,0,1,10.67,7H12m6,4.67v4.66a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,16.33v-6A1.34,1.34,0,0,1,7.33,9'
    />
    <line x1='14' stroke={secondaryColor} y1='8.33' x2='18' y2='8.33' />
    <line x1='16' stroke={secondaryColor} y1='6.33' x2='16' y2='10.33' />
  </Fragment>
)

const CameraPlus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CameraPlus
