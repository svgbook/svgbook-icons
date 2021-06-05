import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='18' y1='15.33' x2='6' y2='15.33' />
    <path fill='none' d='M8,10.67l-2-2,2-2' />
    <line x1='6' y1='8.67' x2='18' y2='8.67' />
    <path fill='none' d='M16,17.33l2-2-2-2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='18' y1='15.33' x2='6' y2='15.33' />
    <path fill='none' d='M8,10.67l-2-2,2-2' />
    <line x1='6' y1='8.67' x2='18' y2='8.67' />
    <path fill='none' d='M16,17.33l2-2-2-2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='18' y1='15.33' x2='6' y2='15.33' />
    <path fill='none' d='M8,10.67l-2-2,2-2' />
    <line strokeOpacity='.2' x1='6' y1='8.67' x2='18' y2='8.67' />
    <path fill='none' d='M16,17.33l2-2-2-2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='6' y1='8.67' x2='18' y2='8.67' />
    <path fill='none' d='M8,10.67l-2-2,2-2' />
    <line stroke={secondaryColor} x1='18' y1='15.33' x2='6' y2='15.33' />
    <path fill='none' d='M16,17.33l2-2-2-2' />
  </Fragment>
)

const ArrowsLeftRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsLeftRight
