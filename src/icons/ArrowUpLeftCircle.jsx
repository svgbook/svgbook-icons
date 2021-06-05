import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <line x1='10' y1='10' x2='14' y2='14' />
    <polyline fill='none' points='14 10 10 10 10 14' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5ZM9.72,9.59l.08-.05h0a.43.43,0,0,1,.19,0h4a.5.5,0,0,1,0,1H11.2l3.15,3.15a.48.48,0,0,1,0,.7.48.48,0,0,1-.7,0L10.5,11.2V14a.5.5,0,0,1-1,0V10a.43.43,0,0,1,0-.19h0a.22.22,0,0,1,.05-.08'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <line x1='10' y1='10' x2='14' y2='14' />
    <polyline fill='none' points='14 10 10 10 10 14' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <line x1='10' y1='10' x2='14' y2='14' />
    <polyline fill='none' points='14 10 10 10 10 14' />
  </Fragment>
)

const ArrowUpLeftCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowUpLeftCircle
