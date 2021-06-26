import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12.67' r='2' />
    <path
      fill='none'
      d='M7.33,8.67H8A1.33,1.33,0,0,0,9.33,7.33.67.67,0,0,1,10,6.67h2m6,4V16a1.33,1.33,0,0,1-1.33,1.33H7.33A1.33,1.33,0,0,1,6,16V10A1.33,1.33,0,0,1,7.33,8.67'
    />
    <line x1='14' y1='8' x2='18' y2='8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='12.67' r='2' />
    <path
      fill='none'
      d='M7.33,8.67H8A1.33,1.33,0,0,0,9.33,7.33.67.67,0,0,1,10,6.67h2m6,4V16a1.33,1.33,0,0,1-1.33,1.33H7.33A1.33,1.33,0,0,1,6,16V10A1.33,1.33,0,0,1,7.33,8.67'
    />
    <line x1='14' y1='8' x2='18' y2='8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12.67' r='2' />
    <path
      fill='none'
      d='M7.33,8.67H8A1.33,1.33,0,0,0,9.33,7.33.67.67,0,0,1,10,6.67h2m6,4V16a1.33,1.33,0,0,1-1.33,1.33H7.33A1.33,1.33,0,0,1,6,16V10A1.33,1.33,0,0,1,7.33,8.67'
    />
    <line x1='14' y1='8' x2='18' y2='8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12.67' r='2' />
    <path
      fill='none'
      d='M7.33,8.67H8A1.33,1.33,0,0,0,9.33,7.33.67.67,0,0,1,10,6.67h2m6,4V16a1.33,1.33,0,0,1-1.33,1.33H7.33A1.33,1.33,0,0,1,6,16V10A1.33,1.33,0,0,1,7.33,8.67'
    />
    <line stroke={secondaryColor} x1='14' y1='8' x2='18' y2='8' />
  </Fragment>
)

const CameraMinus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CameraMinus
