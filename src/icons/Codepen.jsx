import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,14l6,4,6-4-6-4L6,14' />
    <path fill='none' d='M6,10l6,4,6-4L12,6,6,10' />
    <line x1='6' y1='10' x2='6' y2='14' />
    <line x1='18' y1='10' x2='18' y2='14' />
    <line x1='12' y1='6' x2='12' y2='10' />
    <line x1='12' y1='14' x2='12' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,14l6,4,6-4-6-4L6,14' />
    <path fill='none' d='M6,10l6,4,6-4L12,6,6,10' />
    <line x1='6' y1='10' x2='6' y2='14' />
    <line x1='18' y1='10' x2='18' y2='14' />
    <line x1='12' y1='6' x2='12' y2='10' />
    <line x1='12' y1='14' x2='12' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M6,14l6,4,6-4-6-4L6,14' />
    <path fillOpacity='.2' d='M6,10l6,4,6-4L12,6,6,10' />
    <line x1='6' y1='10' x2='6' y2='14' />
    <line x1='18' y1='10' x2='18' y2='14' />
    <line x1='12' y1='6' x2='12' y2='10' />
    <line x1='12' y1='14' x2='12' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6' y1='10' x2='6' y2='14' />
    <line x1='18' y1='10' x2='18' y2='14' />
    <line x1='12' y1='6' x2='12' y2='10' />
    <line x1='12' y1='14' x2='12' y2='18' />
    <path fill='none' stroke={secondaryColor} d='M6,14l6,4,6-4-6-4L6,14' />
    <path fill='none' stroke={secondaryColor} d='M6,10l6,4,6-4L12,6,6,10' />
  </Fragment>
)

const Codepen = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Codepen
