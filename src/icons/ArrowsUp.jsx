import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='15.34' y1='5.99' x2='15.34' y2='18.01' />
    <line x1='8.66' y1='5.99' x2='8.66' y2='18.01' />
    <path fill='none' d='M6.66,8l2-2,2,2' />
    <path fill='none' d='M17.34,8l-2-2-2,2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='15.34' y1='5.99' x2='15.34' y2='18.01' />
    <line x1='8.66' y1='5.99' x2='8.66' y2='18.01' />
    <path fill='none' d='M6.66,8l2-2,2,2' />
    <path fill='none' d='M17.34,8l-2-2-2,2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='15.34' y1='5.99' x2='15.34' y2='18.01' />
    <line strokeOpacity='.2' x1='8.66' y1='5.99' x2='8.66' y2='18.01' />
    <path fill='none' d='M6.66,8l2-2,2,2' />
    <path fill='none' d='M17.34,8l-2-2-2,2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='15.34' y1='5.99' x2='15.34' y2='18.01' />
    <line stroke={secondaryColor} x1='8.66' y1='5.99' x2='8.66' y2='18.01' />
    <path fill='none' d='M6.66,8l2-2,2,2' />
    <path fill='none' d='M17.34,8l-2-2-2,2' />
  </Fragment>
)

const ArrowsUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsUp
