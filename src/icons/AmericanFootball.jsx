import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='14' y1='10' x2='10' y2='14' />
    <line x1='10.67' y1='12' x2='12' y2='13.33' />
    <line x1='12' y1='10.67' x2='13.33' y2='12' />
    <path fill='none' d='M9.33,18A3.33,3.33,0,0,0,6,14.67' />
    <path
      fill='none'
      d='M14.67,6A8.67,8.67,0,0,0,6,14.67,3.33,3.33,0,0,0,9.33,18,8.67,8.67,0,0,0,18,9.33,3.33,3.33,0,0,0,14.67,6'
    />
    <path fill='none' d='M14.67,6A3.33,3.33,0,0,0,18,9.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='14' y1='10' x2='10' y2='14' />
    <line x1='10.67' y1='12' x2='12' y2='13.33' />
    <line x1='12' y1='10.67' x2='13.33' y2='12' />
    <path fill='none' d='M9.33,18A3.33,3.33,0,0,0,6,14.67' />
    <path
      fill='none'
      d='M14.67,6A8.67,8.67,0,0,0,6,14.67,3.33,3.33,0,0,0,9.33,18,8.67,8.67,0,0,0,18,9.33,3.33,3.33,0,0,0,14.67,6'
    />
    <path fill='none' d='M14.67,6A3.33,3.33,0,0,0,18,9.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='14' y1='10' x2='10' y2='14' />
    <line x1='10.67' y1='12' x2='12' y2='13.33' />
    <line x1='12' y1='10.67' x2='13.33' y2='12' />
    <path
      fillOpacity='.2'
      d='M14.67,6A8.67,8.67,0,0,0,6,14.67,3.33,3.33,0,0,0,9.33,18,8.67,8.67,0,0,0,18,9.33,3.33,3.33,0,0,0,14.67,6'
    />
    <path fill='none' d='M9.33,18A3.33,3.33,0,0,0,6,14.67' />
    <path fill='none' d='M14.67,6A3.33,3.33,0,0,0,18,9.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='14' y1='10' x2='10' y2='14' />
    <line stroke={secondaryColor} x1='10.67' y1='12' x2='12' y2='13.33' />
    <line stroke={secondaryColor} x1='12' y1='10.67' x2='13.33' y2='12' />
    <path fill='none' d='M9.33,18A3.33,3.33,0,0,0,6,14.67' />
    <path
      fill='none'
      d='M14.67,6A8.67,8.67,0,0,0,6,14.67,3.33,3.33,0,0,0,9.33,18,8.67,8.67,0,0,0,18,9.33,3.33,3.33,0,0,0,14.67,6'
    />
    <path fill='none' d='M14.67,6A3.33,3.33,0,0,0,18,9.33' />
  </Fragment>
)

const AmericanFootball = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AmericanFootball
