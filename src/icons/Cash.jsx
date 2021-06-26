import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='8.67' y='10' width='9.33' height='6.67' rx='1.33' />
    <circle fill='none' cx='13.33' cy='13.33' r='1.33' />
    <path
      fill='none'
      d='M15.33,10V8.67A1.33,1.33,0,0,0,14,7.33H7.33A1.34,1.34,0,0,0,6,8.67v4A1.34,1.34,0,0,0,7.33,14H8.67'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect fill='none' x='8.67' y='10' width='9.33' height='6.67' rx='1.33' />
    <circle cx='13.33' cy='13.33' r='1.33' />
    <path
      fill='none'
      d='M15.33,10V8.67A1.33,1.33,0,0,0,14,7.33H7.33A1.34,1.34,0,0,0,6,8.67v4A1.34,1.34,0,0,0,7.33,14H8.67'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect
      fillOpacity='.2'
      x='8.67'
      y='10'
      width='9.33'
      height='6.67'
      rx='1.33'
    />
    <circle fill='none' cx='13.33' cy='13.33' r='1.33' />
    <path
      fill='none'
      d='M15.33,10V8.67A1.33,1.33,0,0,0,14,7.33H7.33A1.34,1.34,0,0,0,6,8.67v4A1.34,1.34,0,0,0,7.33,14H8.67'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='8.67'
      y='10'
      width='9.33'
      height='6.67'
      rx='1.33'
    />
    <circle fill='none' cx='13.33' cy='13.33' r='1.33' />
    <path
      fill='none'
      d='M15.33,10V8.67A1.33,1.33,0,0,0,14,7.33H7.33A1.34,1.34,0,0,0,6,8.67v4A1.34,1.34,0,0,0,7.33,14H8.67'
    />
  </Fragment>
)

const Cash = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Cash
