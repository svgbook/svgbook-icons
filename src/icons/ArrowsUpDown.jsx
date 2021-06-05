import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='8.68' y1='6.02' x2='8.68' y2='17.98' />
    <path fill='none' d='M10.67,8l-2-2-2,2' />
    <path fill='none' d='M17.32,16l-2,2-2-2' />
    <line x1='15.32' y1='17.98' x2='15.32' y2='6.02' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='8.68' y1='6.02' x2='8.68' y2='17.98' />
    <path fill='none' d='M10.67,8l-2-2-2,2' />
    <path fill='none' d='M17.32,16l-2,2-2-2' />
    <line x1='15.32' y1='17.98' x2='15.32' y2='6.02' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='8.68' y1='6.02' x2='8.68' y2='17.98' />
    <path fill='none' d='M10.67,8l-2-2-2,2' />
    <path fill='none' d='M17.32,16l-2,2-2-2' />
    <line strokeOpacity='.2' x1='15.32' y1='17.98' x2='15.32' y2='6.02' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='8.68' y1='6.02' x2='8.68' y2='17.98' />
    <path fill='none' d='M10.67,8l-2-2-2,2' />
    <line stroke={secondaryColor} x1='15.32' y1='17.98' x2='15.32' y2='6.02' />
    <path fill='none' d='M17.32,16l-2,2-2-2' />
  </Fragment>
)

const ArrowsUpDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsUpDown
