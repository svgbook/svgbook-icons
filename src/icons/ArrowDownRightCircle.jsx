import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <line x1='14' y1='14' x2='10' y2='14' />
    <polyline fill='none' points='14 10 14 14 10 10' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5ZM14.5,14a.54.54,0,0,1-.08.28.79.79,0,0,1-.22.18h0a.43.43,0,0,1-.19,0H10a.5.5,0,0,1,0-1h2.8L9.65,10.35a.49.49,0,0,1,.7-.7l3.15,3.14V10a.5.5,0,0,1,1,0Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <line x1='14' y1='14' x2='10' y2='14' />
    <polyline fill='none' points='14 10 14 14 10 10' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <line x1='14' y1='14' x2='10' y2='14' />
    <polyline fill='none' points='14 10 14 14 10 10' />
  </Fragment>
)

const ArrowDownRightCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowDownRightCircle
