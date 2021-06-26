import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='18' x2='18' y2='18' />
    <path
      fill='none'
      d='M7.33,18V7.33A1.34,1.34,0,0,1,8.67,6h6.66a1.34,1.34,0,0,1,1.34,1.33V18'
    />
    <path
      fill='none'
      d='M10,18V15.33A1.34,1.34,0,0,1,11.33,14h1.34A1.34,1.34,0,0,1,14,15.33V18'
    />
    <line x1='10.67' y1='10' x2='13.33' y2='10' />
    <line x1='12' y1='8.67' x2='12' y2='11.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18,17.5h-.83V7.33A1.84,1.84,0,0,0,15.33,5.5H8.67A1.84,1.84,0,0,0,6.83,7.33V17.5H6a.5.5,0,0,0,0,1H18a.5.5,0,0,0,0-1Zm-4.5,0h-3V15.33a.83.83,0,0,1,.83-.83h1.34a.83.83,0,0,1,.83.83Zm-.17-7H12.5v.83a.5.5,0,0,1-1,0V10.5h-.83a.5.5,0,0,1,0-1h.83V8.67a.5.5,0,0,1,1,0V9.5h.83a.5.5,0,0,1,0,1Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.67,7.33V18H14V15.33A1.34,1.34,0,0,0,12.67,14H11.33A1.34,1.34,0,0,0,10,15.33V18H7.33V7.33A1.34,1.34,0,0,1,8.67,6h6.66A1.34,1.34,0,0,1,16.67,7.33Z'
    />
    <line x1='18' y1='18' x2='16.67' y2='18' />
    <line x1='14' y1='18' x2='10' y2='18' />
    <line x1='7.33' y1='18' x2='6' y2='18' />
    <line x1='10.67' y1='10' x2='13.33' y2='10' />
    <line x1='12' y1='8.67' x2='12' y2='11.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.67,7.33V18H14V15.33A1.34,1.34,0,0,0,12.67,14H11.33A1.34,1.34,0,0,0,10,15.33V18H7.33V7.33A1.34,1.34,0,0,1,8.67,6h6.66A1.34,1.34,0,0,1,16.67,7.33Z'
    />
    <line x1='18' y1='18' x2='16.67' y2='18' />
    <line x1='14' y1='18' x2='10' y2='18' />
    <line x1='7.33' y1='18' x2='6' y2='18' />
    <line x1='10.67' y1='10' x2='13.33' y2='10' />
    <line x1='12' y1='8.67' x2='12' y2='11.33' />
  </Fragment>
)

const Hospital = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Hospital
