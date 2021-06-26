import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='7.5' width='3' height='3.75' rx='0.75' />
    <line x1='7.5' y1='6' x2='7.5' y2='7.5' />
    <line x1='7.5' y1='11.25' x2='7.5' y2='18' />
    <rect fill='none' x='10.5' y='13.5' width='3' height='3.75' rx='0.75' />
    <line x1='12' y1='6' x2='12' y2='13.5' />
    <line x1='12' y1='17.25' x2='12' y2='18' />
    <rect fill='none' x='15' y='6.75' width='3' height='4.5' rx='0.75' />
    <line x1='16.5' y1='6' x2='16.5' y2='6.75' />
    <line x1='16.5' y1='11.25' x2='16.5' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect x='6' y='7.5' width='3' height='3.75' rx='0.75' />
    <line x1='7.5' y1='6' x2='7.5' y2='7.5' />
    <line x1='7.5' y1='11.25' x2='7.5' y2='18' />
    <rect x='10.5' y='13.5' width='3' height='3.75' rx='0.75' />
    <line x1='12' y1='6' x2='12' y2='13.5' />
    <line x1='12' y1='17.25' x2='12' y2='18' />
    <rect x='15' y='6.75' width='3' height='4.5' rx='0.75' />
    <line x1='16.5' y1='6' x2='16.5' y2='6.75' />
    <line x1='16.5' y1='11.25' x2='16.5' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='7.5' width='3' height='3.75' rx='0.75' />
    <line x1='7.5' y1='6' x2='7.5' y2='7.5' />
    <line x1='7.5' y1='11.25' x2='7.5' y2='18' />
    <rect
      fillOpacity='.2'
      x='10.5'
      y='13.5'
      width='3'
      height='3.75'
      rx='0.75'
    />
    <line x1='12' y1='6' x2='12' y2='13.5' />
    <line x1='12' y1='17.25' x2='12' y2='18' />
    <rect fillOpacity='.2' x='15' y='6.75' width='3' height='4.5' rx='0.75' />
    <line x1='16.5' y1='6' x2='16.5' y2='6.75' />
    <line x1='16.5' y1='11.25' x2='16.5' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='7.5' y1='6' x2='7.5' y2='7.5' />
    <line x1='7.5' y1='11.25' x2='7.5' y2='18' />
    <rect
      fill={secondaryColor}
      stroke={secondaryColor}
      x='6'
      y='7.5'
      width='3'
      height='3.75'
      rx='0.75'
    />
    <line x1='12' y1='6' x2='12' y2='13.5' />
    <line x1='12' y1='17.25' x2='12' y2='18' />
    <rect
      fill={secondaryColor}
      stroke={secondaryColor}
      x='10.5'
      y='13.5'
      width='3'
      height='3.75'
      rx='0.75'
    />
    <line x1='16.5' y1='6' x2='16.5' y2='6.75' />
    <line x1='16.5' y1='11.25' x2='16.5' y2='18' />
    <rect
      fill={secondaryColor}
      stroke={secondaryColor}
      x='15'
      y='6.75'
      width='3'
      height='4.5'
      rx='0.75'
    />
  </Fragment>
)

const ChartCandle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartCandle
