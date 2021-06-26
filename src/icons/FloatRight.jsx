import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='13.5' y='6.75' width='4.5' height='4.5' rx='0.75' />
    <line x1='6' y1='8.25' x2='10.5' y2='8.25' />
    <line x1='6' y1='11.25' x2='10.5' y2='11.25' />
    <line x1='6' y1='14.25' x2='18' y2='14.25' />
    <line x1='6' y1='17.25' x2='18' y2='17.25' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect x='13.5' y='6.75' width='4.5' height='4.5' rx='0.75' />
    <line x1='6' y1='8.25' x2='10.5' y2='8.25' />
    <line x1='6' y1='11.25' x2='10.5' y2='11.25' />
    <line x1='6' y1='14.25' x2='18' y2='14.25' />
    <line x1='6' y1='17.25' x2='18' y2='17.25' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect
      fillOpacity='.2'
      x='13.5'
      y='6.75'
      width='4.5'
      height='4.5'
      rx='0.75'
    />
    <line x1='6' y1='8.25' x2='10.5' y2='8.25' />
    <line x1='6' y1='11.25' x2='10.5' y2='11.25' />
    <line x1='6' y1='14.25' x2='18' y2='14.25' />
    <line x1='6' y1='17.25' x2='18' y2='17.25' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='13.5'
      y='6.75'
      width='4.5'
      height='4.5'
      rx='0.75'
    />
    <line x1='6' y1='8.25' x2='10.5' y2='8.25' />
    <line x1='6' y1='11.25' x2='10.5' y2='11.25' />
    <line x1='6' y1='14.25' x2='18' y2='14.25' />
    <line x1='6' y1='17.25' x2='18' y2='17.25' />
  </Fragment>
)

const FloatRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FloatRight
