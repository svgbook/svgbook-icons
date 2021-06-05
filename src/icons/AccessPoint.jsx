import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='12' x2='12' y2='12.01' />
    <path fill='none' d='M14.48,9.53a3.5,3.5,0,0,1,0,4.94' />
    <path fill='none' d='M17,7.05A7,7,0,0,1,17,17h0' />
    <path fill='none' d='M9.53,14.47a3.48,3.48,0,0,1,0-4.94' />
    <path fill='none' d='M7.05,17a7,7,0,0,1,0-9.9h0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='12' x2='12' y2='12.01' />
    <path fill='none' d='M14.48,9.53a3.5,3.5,0,0,1,0,4.94' />
    <path fill='none' d='M17,7.05A7,7,0,0,1,17,17h0' />
    <path fill='none' d='M9.53,14.47a3.48,3.48,0,0,1,0-4.94' />
    <path fill='none' d='M7.05,17a7,7,0,0,1,0-9.9h0' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line opacity='.2' x1='12' y1='12' x2='12' y2='12.01' />
    <path fill='none' d='M14.48,9.53a3.5,3.5,0,0,1,0,4.94' />
    <path fill='none' d='M17,7.05A7,7,0,0,1,17,17h0' />
    <path fill='none' d='M9.53,14.47a3.48,3.48,0,0,1,0-4.94' />
    <path fill='none' d='M7.05,17a7,7,0,0,1,0-9.9h0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='12' y1='12' x2='12' y2='12.01' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M14.48,9.53a3.5,3.5,0,0,1,0,4.94'
    />
    <path fill='none' stroke={secondaryColor} d='M17,7.05A7,7,0,0,1,17,17h0' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M9.53,14.47a3.48,3.48,0,0,1,0-4.94'
    />
    <path fill='none' stroke={secondaryColor} d='M7.05,17a7,7,0,0,1,0-9.9h0' />
  </Fragment>
)

const AccessPoint = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AccessPoint
