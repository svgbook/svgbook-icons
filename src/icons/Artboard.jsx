import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='9.33' y='9.33' width='5.33' height='5.33' rx='0.67' />
    <line x1='6' y1='9.33' x2='6.67' y2='9.33' />
    <line x1='6' y1='14.67' x2='6.67' y2='14.67' />
    <line x1='9.33' y1='6' x2='9.33' y2='6.67' />
    <line x1='14.67' y1='6' x2='14.67' y2='6.67' />
    <line x1='17.33' y1='9.33' x2='18' y2='9.33' />
    <line x1='17.33' y1='14.67' x2='18' y2='14.67' />
    <line x1='9.33' y1='17.33' x2='9.33' y2='18' />
    <line x1='14.67' y1='17.33' x2='14.67' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect x='9.33' y='9.33' width='5.33' height='5.33' rx='0.67' />
    <line x1='6' y1='9.33' x2='6.67' y2='9.33' />
    <line x1='6' y1='14.67' x2='6.67' y2='14.67' />
    <line x1='9.33' y1='6' x2='9.33' y2='6.67' />
    <line x1='14.67' y1='6' x2='14.67' y2='6.67' />
    <line x1='17.33' y1='9.33' x2='18' y2='9.33' />
    <line x1='17.33' y1='14.67' x2='18' y2='14.67' />
    <line x1='9.33' y1='17.33' x2='9.33' y2='18' />
    <line x1='14.67' y1='17.33' x2='14.67' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect
      fillOpacity='.2'
      x='9.33'
      y='9.33'
      width='5.33'
      height='5.33'
      rx='0.67'
    />
    <line x1='6' y1='9.33' x2='6.67' y2='9.33' />
    <line x1='6' y1='14.67' x2='6.67' y2='14.67' />
    <line x1='9.33' y1='6' x2='9.33' y2='6.67' />
    <line x1='14.67' y1='6' x2='14.67' y2='6.67' />
    <line x1='17.33' y1='9.33' x2='18' y2='9.33' />
    <line x1='17.33' y1='14.67' x2='18' y2='14.67' />
    <line x1='9.33' y1='17.33' x2='9.33' y2='18' />
    <line x1='14.67' y1='17.33' x2='14.67' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill='none' x='9.33' y='9.33' width='5.33' height='5.33' rx='0.67' />
    <line stroke={secondaryColor} x1='6' y1='9.33' x2='6.67' y2='9.33' />
    <line stroke={secondaryColor} x1='6' y1='14.67' x2='6.67' y2='14.67' />
    <line stroke={secondaryColor} x1='9.33' y1='6' x2='9.33' y2='6.67' />
    <line stroke={secondaryColor} x1='14.67' y1='6' x2='14.67' y2='6.67' />
    <line stroke={secondaryColor} x1='17.33' y1='9.33' x2='18' y2='9.33' />
    <line stroke={secondaryColor} x1='17.33' y1='14.67' x2='18' y2='14.67' />
    <line stroke={secondaryColor} x1='9.33' y1='17.33' x2='9.33' y2='18' />
    <line stroke={secondaryColor} x1='14.67' y1='17.33' x2='14.67' y2='18' />
  </Fragment>
)

const Artboard = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Artboard
