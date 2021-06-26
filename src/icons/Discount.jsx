import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='10' y1='14' x2='14' y2='10' />
    <circle fill='none' cx='10.33' cy='10.33' r='0.33' />
    <circle fill='none' cx='13.67' cy='13.67' r='0.33' />
    <circle fill='none' cx='12' cy='12' r='6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm-1.67,4a.84.84,0,0,1,.84.83.85.85,0,0,1-.84.84.84.84,0,0,1-.83-.84A.83.83,0,0,1,10.33,9.5Zm3.34,5a.84.84,0,0,1-.84-.83.85.85,0,0,1,.84-.84.84.84,0,0,1,.83.84A.83.83,0,0,1,13.67,14.5Zm.68-4.15-4,4a.48.48,0,0,1-.7,0,.48.48,0,0,1,0-.7l4-4a.49.49,0,0,1,.7.7Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <line x1='10' y1='14' x2='14' y2='10' />
    <circle fill='none' cx='10.33' cy='10.33' r='0.33' />
    <circle fill='none' cx='13.67' cy='13.67' r='0.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <line x1='10' y1='14' x2='14' y2='10' />
    <circle fill='none' cx='10.33' cy='10.33' r='0.33' />
    <circle fill='none' cx='13.67' cy='13.67' r='0.33' />
  </Fragment>
)

const Discount = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Discount
