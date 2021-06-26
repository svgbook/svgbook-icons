import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='7.33' y='6' width='9.33' height='12' rx='1.33' />
    <circle fill='none' cx='12' cy='13.33' r='2' />
    <line x1='12' y1='8.67' x2='12' y2='8.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M15.33,5.5H8.67A1.84,1.84,0,0,0,6.83,7.33v9.34A1.84,1.84,0,0,0,8.67,18.5h6.66a1.84,1.84,0,0,0,1.84-1.83V7.33A1.84,1.84,0,0,0,15.33,5.5ZM12,8.17a.5.5,0,1,1-.5.5A.5.5,0,0,1,12,8.17Zm0,7.66a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,12,15.83Z'
    />
    <circle stroke='none' cx='12' cy='13.33' r='1.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='7.33' y='6' width='9.33' height='12' rx='1.33' />
    <circle fill='none' cx='12' cy='13.33' r='2' />
    <line x1='12' y1='8.67' x2='12' y2='8.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='7.33'
      y='6'
      width='9.33'
      height='12'
      rx='1.33'
    />
    <circle fill='none' cx='12' cy='13.33' r='2' />
    <line x1='12' y1='8.67' x2='12' y2='8.67' />
  </Fragment>
)

const Speaker = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Speaker
