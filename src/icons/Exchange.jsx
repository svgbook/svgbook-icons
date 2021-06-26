import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='7.33' cy='16' r='1.33' />
    <circle fill='none' cx='16.67' cy='8' r='1.33' />
    <path
      fill='none'
      d='M16.67,9.33v3.34A3.34,3.34,0,0,1,13.33,16h-2l2-2m0,4-2-2'
    />
    <path
      fill='none'
      d='M7.33,14.67V11.33A3.34,3.34,0,0,1,10.67,8h2l-2-2m0,4,2-2'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M16.67,9.33v3.34A3.34,3.34,0,0,1,13.33,16h-2l2-2m0,4-2-2'
    />
    <path
      fill='none'
      d='M7.33,14.67V11.33A3.34,3.34,0,0,1,10.67,8h2l-2-2m0,4,2-2'
    />
    <circle cx='7.33' cy='16' r='1.33' />
    <circle cx='16.67' cy='8' r='1.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.67,9.33v3.34A3.34,3.34,0,0,1,13.33,16h-2l2-2m0,4-2-2'
    />
    <path
      fill='none'
      d='M7.33,14.67V11.33A3.34,3.34,0,0,1,10.67,8h2l-2-2m0,4,2-2'
    />
    <circle fillOpacity='.2' cx='7.33' cy='16' r='1.33' />
    <circle fillOpacity='.2' cx='16.67' cy='8' r='1.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M16.67,9.33v3.34A3.34,3.34,0,0,1,13.33,16h-2l2-2m0,4-2-2'
    />
    <path
      fill='none'
      d='M7.33,14.67V11.33A3.34,3.34,0,0,1,10.67,8h2l-2-2m0,4,2-2'
    />
    <circle stroke={secondaryColor} cx='7.33' cy='16' r='1.33' />
    <circle stroke={secondaryColor} cx='16.67' cy='8' r='1.33' />
  </Fragment>
)

const Exchange = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Exchange
