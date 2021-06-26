import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M16,18V8.67' />
    <path fill='none' d='M10,14l2-2,2,2' />
    <path fill='none' d='M14,10.67l2-2,2,2' />
    <line x1='6' y1='18' x2='18' y2='18' />
    <line x1='12' y1='18' x2='12' y2='12' />
    <path fill='none' d='M6,8,8,6l2,2' />
    <path fill='none' d='M8,18V6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M16,18V8.67' />
    <path fill='none' d='M10,14l2-2,2,2' />
    <path fill='none' d='M14,10.67l2-2,2,2' />
    <line x1='6' y1='18' x2='18' y2='18' />
    <line x1='12' y1='18' x2='12' y2='12' />
    <path fill='none' d='M6,8,8,6l2,2' />
    <path fill='none' d='M8,18V6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M16,18V8.67' />
    <path fill='none' d='M10,14l2-2,2,2' />
    <path fill='none' d='M14,10.67l2-2,2,2' />
    <line x1='6' y1='18' x2='18' y2='18' />
    <line strokeOpacity='.2' x1='12' y1='18' x2='12' y2='12' />
    <path fill='none' d='M6,8,8,6l2,2' />
    <path strokeOpacity='.2' fill='none' d='M8,18V6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M16,18V8.67' />
    <line stroke={secondaryColor} x1='12' y1='18' x2='12' y2='12' />
    <path stroke={secondaryColor} fill='none' d='M8,18V6' />
    <path fill='none' d='M10,14l2-2,2,2' />
    <path fill='none' d='M14,10.67l2-2,2,2' />
    <path fill='none' d='M6,8,8,6l2,2' />
    <line x1='6' y1='18' x2='18' y2='18' />
  </Fragment>
)

const ChartArrowsVertical = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartArrowsVertical
