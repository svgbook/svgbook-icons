import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='8' y='8' width='8' height='8' rx='2' />
    <path fill='none' d='M10,16v2h4V16' />
    <path fill='none' d='M10,8V6h4V8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect x='8' y='8' width='8' height='8' rx='2' />
    <path fill='none' d='M10,16v2h4V16' />
    <path fill='none' d='M10,8V6h4V8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='8' y='8' width='8' height='8' rx='2' />
    <path fill='none' d='M10,16v2h4V16' />
    <path fill='none' d='M10,8V6h4V8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='8' y='8' width='8' height='8' rx='2' />
    <path fill='none' d='M10,16v2h4V16' />
    <path fill='none' d='M10,8V6h4V8' />
  </Fragment>
)

const Watch = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Watch
