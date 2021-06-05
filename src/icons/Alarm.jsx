import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12.75' r='5.25' />
    <polyline fill='none' points='12 10.5 12 12.75 13.5 12.75' />
    <line x1='8.25' y1='6' x2='6.19' y2='7.5' />
    <line x1='15.75' y1='6' x2='17.81' y2='7.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,7.5a5.25,5.25,0,1,0,5.25,5.25A5.25,5.25,0,0,0,12,7.5Zm1.5,5.75H12a.5.5,0,0,1-.5-.5V10.5a.5.5,0,0,1,1,0v1.75h1a.5.5,0,0,1,0,1Z'
    />
    <line x1='8.25' y1='6' x2='6.19' y2='7.5' />
    <line x1='15.75' y1='6' x2='17.81' y2='7.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12.75' r='5.25' />
    <polyline fill='none' points='12 10.5 12 12.75 13.5 12.75' />
    <line x1='8.25' y1='6' x2='6.19' y2='7.5' />
    <line x1='15.75' y1='6' x2='17.81' y2='7.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12.75' r='5.25' />
    <polyline fill='none' points='12 10.5 12 12.75 13.5 12.75' />
    <line stroke={secondaryColor} x1='8.25' y1='6' x2='6.19' y2='7.5' />
    <line stroke={secondaryColor} x1='15.75' y1='6' x2='17.81' y2='7.5' />
  </Fragment>
)

const Alarm = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Alarm
