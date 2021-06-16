import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M8,7.53A6,6,0,0,1,8.46,16c-.14.16-.3.31-.46.46' />
    <path fill='none' d='M16,7.53A6,6,0,0,0,15.54,16c.15.16.3.31.46.46' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M8,7.53A6,6,0,0,1,8.46,16c-.14.16-.3.31-.46.46' />
    <path fill='none' d='M16,7.53A6,6,0,0,0,15.54,16c.15.16.3.31.46.46' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path fill='none' d='M8,7.53A6,6,0,0,1,8.46,16c-.14.16-.3.31-.46.46' />
    <path fill='none' d='M16,7.53A6,6,0,0,0,15.54,16c.15.16.3.31.46.46' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path fill='none' d='M8,7.53A6,6,0,0,1,8.46,16c-.14.16-.3.31-.46.46' />
    <path fill='none' d='M16,7.53A6,6,0,0,0,15.54,16c.15.16.3.31.46.46' />
  </Fragment>
)

const TennisBall = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default TennisBall
