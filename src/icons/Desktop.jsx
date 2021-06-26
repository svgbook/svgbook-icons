import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6.67' width='12' height='8' rx='0.67' />
    <line x1='8.67' y1='17.33' x2='15.33' y2='17.33' />
    <line x1='10' y1='14.67' x2='10' y2='17.33' />
    <line x1='14' y1='14.67' x2='14' y2='17.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect x='6' y='6.67' width='12' height='8' rx='0.67' />
    <line x1='8.67' y1='17.33' x2='15.33' y2='17.33' />
    <line x1='10' y1='14.67' x2='10' y2='17.33' />
    <line x1='14' y1='14.67' x2='14' y2='17.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6.67' width='12' height='8' rx='0.67' />
    <line x1='8.67' y1='17.33' x2='15.33' y2='17.33' />
    <line x1='10' y1='14.67' x2='10' y2='17.33' />
    <line x1='14' y1='14.67' x2='14' y2='17.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6'
      y='6.67'
      width='12'
      height='8'
      rx='0.67'
    />
    <line x1='8.67' y1='17.33' x2='15.33' y2='17.33' />
    <line x1='10' y1='14.67' x2='10' y2='17.33' />
    <line x1='14' y1='14.67' x2='14' y2='17.33' />
  </Fragment>
)

const Desktop = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Desktop
