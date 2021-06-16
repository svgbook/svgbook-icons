import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15,15l-3,2.36V12m0-2.67V6.67l3.33,2.66-1.85,1.48M12,12,8.67,14.67'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M15,15l-3,2.36V12m0-2.67V6.67l3.33,2.66-1.85,1.48M12,12,8.67,14.67'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M15,15l-3,2.36V12m0-2.67V6.67l3.33,2.66-1.85,1.48M12,12,8.67,14.67'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M15,15l-3,2.36V12m0-2.67V6.67l3.33,2.66-1.85,1.48M12,12,8.67,14.67'
    />
    <line stroke={secondaryColor} x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const BluetoothOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BluetoothOff
