import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10.67,14h-4A.67.67,0,0,1,6,13.33V8a.67.67,0,0,1,.67-.67h4'
    />
    <rect
      fill='none'
      x='12.67'
      y='6.67'
      width='5.33'
      height='10.67'
      rx='0.67'
    />
    <line fill='none' x1='8.67' y1='16.67' x2='10.67' y2='16.67' />
    <line x1='15.33' y1='9.33' x2='15.33' y2='9.34' />
    <circle fill='none' cx='15.33' cy='14.67' r='0.67' />
    <line x1='10' y1='14' x2='10' y2='16.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M10.5,14.5v1.67h.17a.5.5,0,0,1,.5.5.51.51,0,0,1-.5.5h-2a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5H9.5V14.5H6.67A1.17,1.17,0,0,1,5.5,13.33V8A1.17,1.17,0,0,1,6.67,6.83h4a.51.51,0,0,1,.5.5.5.5,0,0,1-.5.5h-4A.18.18,0,0,0,6.5,8v5.33a.17.17,0,0,0,.17.17h4a.5.5,0,1,1,0,1Z'
    />
    <path
      stroke='none'
      d='M17.33,6.17h-4a1.16,1.16,0,0,0-1.16,1.16v9.34a1.16,1.16,0,0,0,1.16,1.16h4a1.16,1.16,0,0,0,1.17-1.16V7.33A1.16,1.16,0,0,0,17.33,6.17Zm-2,2.67a.49.49,0,0,1,.5.49h0a.5.5,0,0,1-.5.5.5.5,0,0,1,0-1Zm0,7a1.17,1.17,0,1,1,1.17-1.16A1.16,1.16,0,0,1,15.33,15.83Z'
    />
    <path
      stroke='none'
      d='M15.5,14.67c0,.18-.33.18-.33,0a.16.16,0,0,1,.16-.17A.16.16,0,0,1,15.5,14.67Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10.67,14h-4A.67.67,0,0,1,6,13.33V8a.67.67,0,0,1,.67-.67h4'
    />
    <rect
      fillOpacity='.2'
      x='12.67'
      y='6.67'
      width='5.33'
      height='10.67'
      rx='0.67'
    />
    <line fill='none' x1='8.67' y1='16.67' x2='10.67' y2='16.67' />
    <line x1='15.33' y1='9.33' x2='15.33' y2='9.34' />
    <circle fill='none' cx='15.33' cy='14.67' r='0.67' />
    <line x1='10' y1='14' x2='10' y2='16.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line fill='none' x1='8.67' y1='16.67' x2='10.67' y2='16.67' />
    <rect
      fill={secondaryColor}
      x='12.67'
      y='6.67'
      width='5.33'
      height='10.67'
      rx='0.67'
    />
    <line x1='15.33' y1='9.33' x2='15.33' y2='9.34' />
    <circle fill='none' cx='15.33' cy='14.67' r='0.67' />
    <line x1='10' y1='14' x2='10' y2='16.67' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M10.67,14h-4A.67.67,0,0,1,6,13.33V8a.67.67,0,0,1,.67-.67h4'
    />
  </Fragment>
)

const Devices2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Devices2
