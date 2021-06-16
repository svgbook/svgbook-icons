import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='8.67' y='6' width='9.33' height='9.33' rx='1.33' />
    <path
      fill='none'
      d='M15.33,15.33v1.34A1.33,1.33,0,0,1,14,18H7.33A1.34,1.34,0,0,1,6,16.67V10A1.33,1.33,0,0,1,7.33,8.67H8.67'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect x='8.67' y='6' width='9.33' height='9.33' rx='1.33' />
    <path
      fill='none'
      d='M15.33,15.33v1.34A1.33,1.33,0,0,1,14,18H7.33A1.34,1.34,0,0,1,6,16.67V10A1.33,1.33,0,0,1,7.33,8.67H8.67'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect
      fillOpacity='.2'
      x='8.67'
      y='6'
      width='9.33'
      height='9.33'
      rx='1.33'
    />
    <path
      fill='none'
      d='M15.33,15.33v1.34A1.33,1.33,0,0,1,14,18H7.33A1.34,1.34,0,0,1,6,16.67V10A1.33,1.33,0,0,1,7.33,8.67H8.67'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='8.67'
      y='6'
      width='9.33'
      height='9.33'
      rx='1.33'
    />
    <path
      fill='none'
      d='M15.33,15.33v1.34A1.33,1.33,0,0,1,14,18H7.33A1.34,1.34,0,0,1,6,16.67V10A1.33,1.33,0,0,1,7.33,8.67H8.67'
    />
  </Fragment>
)

const BoxMultiple = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BoxMultiple
