import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='4.5' height='4.5' rx='0.75' />
    <rect fill='none' x='6' y='13.5' width='4.5' height='4.5' rx='0.75' />
    <rect fill='none' x='13.5' y='13.5' width='4.5' height='4.5' rx='0.75' />
    <line x1='13.5' y1='8.25' x2='18' y2='8.25' />
    <line x1='15.75' y1='6' x2='15.75' y2='10.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect x='6' y='6' width='4.5' height='4.5' rx='0.75' />
    <rect x='6' y='13.5' width='4.5' height='4.5' rx='0.75' />
    <rect x='13.5' y='13.5' width='4.5' height='4.5' rx='0.75' />
    <line x1='13.5' y1='8.25' x2='18' y2='8.25' />
    <line x1='15.75' y1='6' x2='15.75' y2='10.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6' width='4.5' height='4.5' rx='0.75' />
    <rect fillOpacity='.2' x='6' y='13.5' width='4.5' height='4.5' rx='0.75' />
    <rect
      fillOpacity='.2'
      x='13.5'
      y='13.5'
      width='4.5'
      height='4.5'
      rx='0.75'
    />
    <line x1='13.5' y1='8.25' x2='18' y2='8.25' />
    <line x1='15.75' y1='6' x2='15.75' y2='10.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6'
      y='6'
      width='4.5'
      height='4.5'
      rx='0.75'
    />
    <rect
      fill={secondaryColor}
      x='6'
      y='13.5'
      width='4.5'
      height='4.5'
      rx='0.75'
    />
    <rect
      fill={secondaryColor}
      x='13.5'
      y='13.5'
      width='4.5'
      height='4.5'
      rx='0.75'
    />
    <line x1='13.5' y1='8.25' x2='18' y2='8.25' />
    <line x1='15.75' y1='6' x2='15.75' y2='10.5' />
  </Fragment>
)

const Apps = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Apps
