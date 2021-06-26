import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M10.67,10.67h2.66v2.66H10.67Z' />
    <line x1='10.67' y1='10.67' x2='8.34' y2='8.34' />
    <path fill='none' d='M10.64,8A2.33,2.33,0,1,0,8,10.64' />
    <path fill='none' d='M13.33,10.67l2.33-2.33' />
    <path fill='none' d='M16,10.64A2.33,2.33,0,1,0,13.36,8' />
    <line x1='13.33' y1='13.33' x2='15.66' y2='15.66' />
    <path fill='none' d='M13.36,16A2.33,2.33,0,1,0,16,13.36' />
    <line x1='10.67' y1='13.33' x2='8.34' y2='15.66' />
    <path fill='none' d='M8,13.36A2.33,2.33,0,1,0,10.64,16' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M10.67,10.67h2.66v2.66H10.67Z' />
    <line x1='10.67' y1='10.67' x2='8.34' y2='8.34' />
    <path fill='none' d='M10.64,8A2.33,2.33,0,1,0,8,10.64' />
    <path fill='none' d='M13.33,10.67l2.33-2.33' />
    <path fill='none' d='M16,10.64A2.33,2.33,0,1,0,13.36,8' />
    <line x1='13.33' y1='13.33' x2='15.66' y2='15.66' />
    <path fill='none' d='M13.36,16A2.33,2.33,0,1,0,16,13.36' />
    <line x1='10.67' y1='13.33' x2='8.34' y2='15.66' />
    <path fill='none' d='M8,13.36A2.33,2.33,0,1,0,10.64,16' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M10.67,10.67h2.66v2.66H10.67Z' />
    <line x1='10.67' y1='10.67' x2='8.34' y2='8.34' />
    <path fill='none' strokeOpacity='.2' d='M10.64,8A2.33,2.33,0,1,0,8,10.64' />
    <path fill='none' d='M13.33,10.67l2.33-2.33' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M16,10.64A2.33,2.33,0,1,0,13.36,8'
    />
    <line x1='13.33' y1='13.33' x2='15.66' y2='15.66' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M13.36,16A2.33,2.33,0,1,0,16,13.36'
    />
    <line x1='10.67' y1='13.33' x2='8.34' y2='15.66' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M8,13.36A2.33,2.33,0,1,0,10.64,16'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M10.67,10.67h2.66v2.66H10.67Z' />
    <line x1='10.67' y1='10.67' x2='8.34' y2='8.34' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M10.64,8A2.33,2.33,0,1,0,8,10.64'
    />
    <path fill='none' d='M13.33,10.67l2.33-2.33' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M16,10.64A2.33,2.33,0,1,0,13.36,8'
    />
    <line x1='13.33' y1='13.33' x2='15.66' y2='15.66' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M13.36,16A2.33,2.33,0,1,0,16,13.36'
    />
    <line x1='10.67' y1='13.33' x2='8.34' y2='15.66' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M8,13.36A2.33,2.33,0,1,0,10.64,16'
    />
  </Fragment>
)

const Drone = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Drone
