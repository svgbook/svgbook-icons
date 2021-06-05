import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='16' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <path fill='none' d='M14,18l-2-2-2,2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='16' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <path fill='none' d='M14,18l-2-2-2,2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='12' y1='16' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <path fill='none' d='M14,18l-2-2-2,2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='12' y1='16' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <path fill='none' d='M14,18l-2-2-2,2' />
  </Fragment>
)

const ArrowTopTail = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowTopTail
