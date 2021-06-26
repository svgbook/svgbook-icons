import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M15.67,10a2,2,0,0,1-2,2h-4V8h4A2,2,0,0,1,15.67,10Z' />
    <line x1='9.67' y1='16' x2='8.33' y2='16' />
    <line x1='9.67' y1='8' x2='8.33' y2='8' />
    <path fill='none' d='M15.67,14a2,2,0,0,1-2,2h-4V12h4A2,2,0,0,1,15.67,14Z' />
    <line x1='10.33' y1='6' x2='10.33' y2='8' />
    <line x1='13' y1='6' x2='13' y2='8' />
    <line x1='10.33' y1='16' x2='10.33' y2='18' />
    <line x1='13' y1='16' x2='13' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M15.67,10a2,2,0,0,1-2,2h-4V8h4A2,2,0,0,1,15.67,10Z' />
    <line x1='9.67' y1='16' x2='8.33' y2='16' />
    <line x1='9.67' y1='8' x2='8.33' y2='8' />
    <path d='M15.67,14a2,2,0,0,1-2,2h-4V12h4A2,2,0,0,1,15.67,14Z' />
    <line x1='10.33' y1='6' x2='10.33' y2='8' />
    <line x1='13' y1='6' x2='13' y2='8' />
    <line x1='10.33' y1='16' x2='10.33' y2='18' />
    <line x1='13' y1='16' x2='13' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M15.67,10a2,2,0,0,1-2,2h-4V8h4A2,2,0,0,1,15.67,10Z'
    />
    <line x1='9.67' y1='16' x2='8.33' y2='16' />
    <line x1='9.67' y1='8' x2='8.33' y2='8' />
    <path
      fillOpacity='.2'
      d='M15.67,14a2,2,0,0,1-2,2h-4V12h4A2,2,0,0,1,15.67,14Z'
    />
    <line x1='10.33' y1='6' x2='10.33' y2='8' />
    <line x1='13' y1='6' x2='13' y2='8' />
    <line x1='10.33' y1='16' x2='10.33' y2='18' />
    <line x1='13' y1='16' x2='13' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M15.67,10a2,2,0,0,1-2,2h-4V8h4A2,2,0,0,1,15.67,10Z'
    />
    <line x1='9.67' y1='16' x2='8.33' y2='16' />
    <line x1='9.67' y1='8' x2='8.33' y2='8' />
    <path
      fill={secondaryColor}
      d='M15.67,14a2,2,0,0,1-2,2h-4V12h4A2,2,0,0,1,15.67,14Z'
    />
    <line x1='10.33' y1='6' x2='10.33' y2='8' />
    <line x1='13' y1='6' x2='13' y2='8' />
    <line x1='10.33' y1='16' x2='10.33' y2='18' />
    <line x1='13' y1='16' x2='13' y2='18' />
  </Fragment>
)

const Bitcoin = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bitcoin
