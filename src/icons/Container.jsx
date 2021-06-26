import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path d='M18,6h0' />
    <path d='M18,18h0' />
    <path d='M18,15h0' />
    <path d='M18,12h0' />
    <path d='M18,9h0' />
    <rect fill='none' x='9' y='6' width='6' height='12' rx='0.75' />
    <path d='M6,6H6' />
    <path d='M6,18H6' />
    <path d='M6,15H6' />
    <path d='M6,12H6' />
    <path d='M6,9H6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M18,6h0' />
    <path d='M18,18h0' />
    <path d='M18,15h0' />
    <path d='M18,12h0' />
    <path d='M18,9h0' />
    <rect x='9' y='6' width='6' height='12' rx='0.75' />
    <path d='M6,6H6' />
    <path d='M6,18H6' />
    <path d='M6,15H6' />
    <path d='M6,12H6' />
    <path d='M6,9H6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path d='M18,6h0' />
    <path d='M18,18h0' />
    <path d='M18,15h0' />
    <path d='M18,12h0' />
    <path d='M18,9h0' />
    <rect fillOpacity='.2' x='9' y='6' width='6' height='12' rx='0.75' />
    <path d='M6,6H6' />
    <path d='M6,18H6' />
    <path d='M6,15H6' />
    <path d='M6,12H6' />
    <path d='M6,9H6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path d='M18,6h0' />
    <path d='M18,18h0' />
    <path d='M18,15h0' />
    <path d='M18,12h0' />
    <path d='M18,9h0' />
    <rect fill={secondaryColor} x='9' y='6' width='6' height='12' rx='0.75' />
    <path d='M6,6H6' />
    <path d='M6,18H6' />
    <path d='M6,15H6' />
    <path d='M6,12H6' />
    <path d='M6,9H6' />
  </Fragment>
)

const Container = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Container
