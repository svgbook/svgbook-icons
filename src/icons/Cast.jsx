import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line fill='none' x1='6' y1='16.67' x2='6.01' y2='16.67' />
    <path fill='none' d='M8.67,16.67A2.67,2.67,0,0,0,6,14' />
    <path fill='none' d='M11.33,16.67A5.33,5.33,0,0,0,6,11.33' />
    <path
      fill='none'
      d='M14,16.67h2a2,2,0,0,0,2-2V9.33a2,2,0,0,0-2-2H8A2,2,0,0,0,6.13,8.67'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line fill='none' x1='6' y1='16.67' x2='6.01' y2='16.67' />
    <path fill='none' d='M8.67,16.67A2.67,2.67,0,0,0,6,14' />
    <path fill='none' d='M11.33,16.67A5.33,5.33,0,0,0,6,11.33' />
    <path
      fill='none'
      d='M14,16.67h2a2,2,0,0,0,2-2V9.33a2,2,0,0,0-2-2H8A2,2,0,0,0,6.13,8.67'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line fill='none' x1='6' y1='16.67' x2='6.01' y2='16.67' />
    <path fill='none' d='M8.67,16.67A2.67,2.67,0,0,0,6,14' />
    <path fill='none' d='M11.33,16.67A5.33,5.33,0,0,0,6,11.33' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M14,16.67h2a2,2,0,0,0,2-2V9.33a2,2,0,0,0-2-2H8A2,2,0,0,0,6.13,8.67'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line
      fill='none'
      stroke={secondaryColor}
      x1='6'
      y1='16.67'
      x2='6.01'
      y2='16.67'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M8.67,16.67A2.67,2.67,0,0,0,6,14'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.33,16.67A5.33,5.33,0,0,0,6,11.33'
    />
    <path
      fill='none'
      d='M14,16.67h2a2,2,0,0,0,2-2V9.33a2,2,0,0,0-2-2H8A2,2,0,0,0,6.13,8.67'
    />
  </Fragment>
)

const Cast = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Cast
