import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9,9h6v6H9Z' />
    <rect fill='none' x='6' y='6' width='12' height='12' rx='1.5' />
    <path d='M15,15l2.48,2.48' />
    <path d='M15,9l2.48-2.47' />
    <path d='M9,9,6.52,6.53' />
    <path d='M9,15,6.52,17.48' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M9,9h6v6H9Z' />
    <rect fill='none' x='6' y='6' width='12' height='12' rx='1.5' />
    <path d='M15,15l2.48,2.48' />
    <path d='M15,9l2.48-2.47' />
    <path d='M9,9,6.52,6.53' />
    <path d='M9,15,6.52,17.48' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M9,9h6v6H9Z' />
    <rect fillOpacity='.2' x='6' y='6' width='12' height='12' rx='1.5' />
    <path d='M15,15l2.48,2.48' />
    <path d='M15,9l2.48-2.47' />
    <path d='M9,9,6.52,6.53' />
    <path d='M9,15,6.52,17.48' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='6' y='6' width='12' height='12' rx='1.5' />
    <path fill='none' d='M9,9h6v6H9Z' />
    <path d='M15,15l2.48,2.48' />
    <path d='M15,9l2.48-2.47' />
    <path d='M9,9,6.52,6.53' />
    <path d='M9,15,6.52,17.48' />
  </Fragment>
)

const BoxModel = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BoxModel
