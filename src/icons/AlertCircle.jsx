import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <line x1='12' y1='9.33' x2='12' y2='12' />
    <line x1='12' y1='14.67' x2='12.01' y2='14.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm-.5,3.33a.5.5,0,1,1,1,0V12a.5.5,0,0,1-1,0ZM12,15.17a.51.51,0,0,1-.51-.5.5.5,0,0,1,.5-.5h0a.5.5,0,0,1,.5.5A.51.51,0,0,1,12,15.17Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <line x1='12' y1='9.33' x2='12' y2='12' />
    <line x1='12' y1='14.67' x2='12.01' y2='14.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <line x1='12' y1='9.33' x2='12' y2='12' />
    <line x1='12' y1='14.67' x2='12.01' y2='14.67' />
  </Fragment>
)

const AlertCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AlertCircle
