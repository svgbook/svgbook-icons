import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M13.33,13.33H10.67V10.67' />
    <path
      fill='none'
      d='M10.64,8A2.33,2.33,0,0,0,8.69,6m-2,.66a2.33,2.33,0,0,0,1.32,4'
    />
    <path fill='none' d='M13.33,10.67l2.34-2.34' />
    <path fill='none' d='M16,10.64A2.33,2.33,0,1,0,13.36,8' />
    <path
      fill='none'
      d='M13.36,16A2.34,2.34,0,0,0,16,18a2.38,2.38,0,0,0,1.31-.66m.66-2A2.33,2.33,0,0,0,16,13.36'
    />
    <line x1='10.67' y1='13.33' x2='8.33' y2='15.67' />
    <path fill='none' d='M8,13.36A2.33,2.33,0,1,0,10.64,16' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M13.33,13.33H10.67V10.67' />
    <path
      fill='none'
      d='M10.64,8A2.33,2.33,0,0,0,8.69,6m-2,.66a2.33,2.33,0,0,0,1.32,4'
    />
    <path fill='none' d='M13.33,10.67l2.34-2.34' />
    <path fill='none' d='M16,10.64A2.33,2.33,0,1,0,13.36,8' />
    <path
      fill='none'
      d='M13.36,16A2.34,2.34,0,0,0,16,18a2.38,2.38,0,0,0,1.31-.66m.66-2A2.33,2.33,0,0,0,16,13.36'
    />
    <line x1='10.67' y1='13.33' x2='8.33' y2='15.67' />
    <path fill='none' d='M8,13.36A2.33,2.33,0,1,0,10.64,16' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M13.33,13.33H10.67V10.67' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M10.64,8A2.33,2.33,0,0,0,8.69,6m-2,.66a2.33,2.33,0,0,0,1.32,4'
    />
    <path fill='none' d='M13.33,10.67l2.34-2.34' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M16,10.64A2.33,2.33,0,1,0,13.36,8'
    />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M13.36,16A2.34,2.34,0,0,0,16,18a2.38,2.38,0,0,0,1.31-.66m.66-2A2.33,2.33,0,0,0,16,13.36'
    />
    <line x1='10.67' y1='13.33' x2='8.33' y2='15.67' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M8,13.36A2.33,2.33,0,1,0,10.64,16'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M13.33,13.33H10.67V10.67' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M10.64,8A2.33,2.33,0,0,0,8.69,6m-2,.66a2.33,2.33,0,0,0,1.32,4'
    />
    <path fill='none' d='M13.33,10.67l2.34-2.34' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M16,10.64A2.33,2.33,0,1,0,13.36,8'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M13.36,16A2.34,2.34,0,0,0,16,18a2.38,2.38,0,0,0,1.31-.66m.66-2A2.33,2.33,0,0,0,16,13.36'
    />
    <line x1='10.67' y1='13.33' x2='8.33' y2='15.67' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M8,13.36A2.33,2.33,0,1,0,10.64,16'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const DroneOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DroneOff
