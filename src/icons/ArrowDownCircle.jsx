import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <line x1='9.33' y1='12' x2='12' y2='14.67' />
    <line x1='12' y1='9.33' x2='12' y2='14.67' />
    <line x1='14.67' y1='12' x2='12' y2='14.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm3,6.85L12.42,15l-.07.07a.48.48,0,0,1-.15.11h0a.47.47,0,0,1-.38,0h0a.48.48,0,0,1-.15-.11.46.46,0,0,1-.07-.07L9,12.35a.48.48,0,0,1,0-.7.5.5,0,0,1,.71,0l1.81,1.81V9.33a.5.5,0,1,1,1,0v4.13l1.81-1.81a.5.5,0,0,1,.71,0A.48.48,0,0,1,15,12.35Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <line x1='9.33' y1='12' x2='12' y2='14.67' />
    <line x1='12' y1='9.33' x2='12' y2='14.67' />
    <line x1='14.67' y1='12' x2='12' y2='14.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <line x1='9.33' y1='12' x2='12' y2='14.67' />
    <line x1='12' y1='9.33' x2='12' y2='14.67' />
    <line x1='14.67' y1='12' x2='12' y2='14.67' />
  </Fragment>
)

const ArrowDownCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowDownCircle
