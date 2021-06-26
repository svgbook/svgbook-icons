import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='2' />
    <rect fill='none' x='6' y='8' width='12' height='8' rx='1.33' />
    <line x1='16' y1='12' x2='16.01' y2='12' />
    <line x1='8' y1='12' x2='8.01' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.67,7.5H7.33A1.83,1.83,0,0,0,5.5,9.33v5.34A1.83,1.83,0,0,0,7.33,16.5h9.34a1.83,1.83,0,0,0,1.83-1.83V9.33A1.83,1.83,0,0,0,16.67,7.5ZM8,12.5A.5.5,0,0,1,7.5,12a.5.5,0,0,1,.5-.5H8a.5.5,0,0,1,0,1Zm4,2A2.5,2.5,0,1,1,14.5,12,2.5,2.5,0,0,1,12,14.5Zm4-2a.5.5,0,0,1-.51-.5.5.5,0,0,1,.5-.5h0a.5.5,0,0,1,0,1Z'
    />
    <circle stroke='none' cx='12' cy='12' r='1.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='8' width='12' height='8' rx='1.33' />
    <circle fill='none' cx='12' cy='12' r='2' />
    <line x1='16' y1='12' x2='16.01' y2='12' />
    <line x1='8' y1='12' x2='8.01' y2='12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='6' y='8' width='12' height='8' rx='1.33' />
    <circle fill='none' cx='12' cy='12' r='2' />
    <line x1='16' y1='12' x2='16.01' y2='12' />
    <line x1='8' y1='12' x2='8.01' y2='12' />
  </Fragment>
)

const CashBanknote = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CashBanknote
