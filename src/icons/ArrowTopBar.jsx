import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='18' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <line x1='10' y1='18' x2='14' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='18' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <line x1='10' y1='18' x2='14' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='12' y1='18' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <line x1='10' y1='18' x2='14' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='12' y1='18' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <line x1='10' y1='18' x2='14' y2='18' />
  </Fragment>
)

const ArrowTopBar = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowTopBar
