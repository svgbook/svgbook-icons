import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='8.71' y1='17.94' x2='8.71' y2='6' />
    <path fill='none' d='M17.33,16l-2,2-2-2' />
    <path fill='none' d='M6.72,16l2,2,2-2' />
    <line x1='15.34' y1='17.94' x2='15.34' y2='6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='8.71' y1='17.94' x2='8.71' y2='6' />
    <path fill='none' d='M17.33,16l-2,2-2-2' />
    <path fill='none' d='M6.72,16l2,2,2-2' />
    <line x1='15.34' y1='17.94' x2='15.34' y2='6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='8.71' y1='17.94' x2='8.71' y2='6' />
    <line strokeOpacity='.2' x1='15.34' y1='17.94' x2='15.34' y2='6' />
    <path fill='none' d='M17.33,16l-2,2-2-2' />
    <path fill='none' d='M6.72,16l2,2,2-2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='8.71' y1='17.94' x2='8.71' y2='6' />
    <line stroke={secondaryColor} x1='15.34' y1='17.94' x2='15.34' y2='6' />
    <path fill='none' d='M17.33,16l-2,2-2-2' />
    <path fill='none' d='M6.72,16l2,2,2-2' />
  </Fragment>
)

const ArrowsDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsDown
