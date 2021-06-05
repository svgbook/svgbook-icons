import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <line x1='14' y1='10' x2='10' y2='14' />
    <polyline fill='none' points='14 14 14 10 10 10' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5ZM14.5,14a.5.5,0,0,1-1,0V11.2l-3.15,3.15a.48.48,0,0,1-.7,0,.48.48,0,0,1,0-.7L12.8,10.5H10a.5.5,0,0,1,0-1h4a.43.43,0,0,1,.19,0h0l.08.05a.27.27,0,0,1,.13.13.22.22,0,0,1,.05.08h0a.43.43,0,0,1,0,.19Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <line x1='14' y1='10' x2='10' y2='14' />
    <polyline fill='none' points='14 14 14 10 10 10' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <line x1='14' y1='10' x2='10' y2='14' />
    <polyline fill='none' points='14 14 14 10 10 10' />
  </Fragment>
)

const ArrowUpRightCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowUpRightCircle
