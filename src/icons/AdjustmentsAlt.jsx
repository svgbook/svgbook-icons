import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='9' width='3' height='3' />
    <line fill='none' x1='7.5' y1='6' x2='7.5' y2='9' />
    <line fill='none' x1='7.5' y1='12' x2='7.5' y2='18' />
    <rect fill='none' x='10.5' y='13.5' width='3' height='3' />
    <line fill='none' x1='12' y1='6' x2='12' y2='13.5' />
    <line fill='none' x1='12' y1='16.5' x2='12' y2='18' />
    <rect fill='none' x='15' y='6.75' width='3' height='3' />
    <line fill='none' x1='16.5' y1='6' x2='16.5' y2='6.75' />
    <line fill='none' x1='16.5' y1='9.75' x2='16.5' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect x='6' y='9' width='3' height='3' />
    <line fill='none' x1='7.5' y1='6' x2='7.5' y2='9' />
    <line fill='none' x1='7.5' y1='12' x2='7.5' y2='18' />
    <rect x='10.5' y='13.5' width='3' height='3' />
    <line fill='none' x1='12' y1='6' x2='12' y2='13.5' />
    <line fill='none' x1='12' y1='16.5' x2='12' y2='18' />
    <rect x='15' y='6.75' width='3' height='3' />
    <line fill='none' x1='16.5' y1='6' x2='16.5' y2='6.75' />
    <line fill='none' x1='16.5' y1='9.75' x2='16.5' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='9' width='3' height='3' />
    <line fill='none' x1='7.5' y1='6' x2='7.5' y2='9' />
    <line fill='none' x1='7.5' y1='12' x2='7.5' y2='18' />
    <rect fillOpacity='.2' x='10.5' y='13.5' width='3' height='3' />
    <line fill='none' x1='12' y1='6' x2='12' y2='13.5' />
    <line fill='none' x1='12' y1='16.5' x2='12' y2='18' />
    <rect fillOpacity='.2' x='15' y='6.75' width='3' height='3' />
    <line fill='none' x1='16.5' y1='6' x2='16.5' y2='6.75' />
    <line fill='none' x1='16.5' y1='9.75' x2='16.5' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line fill='none' x1='7.5' y1='6' x2='7.5' y2='9' />
    <line fill='none' x1='7.5' y1='12' x2='7.5' y2='18' />
    <rect
      fill={secondaryColor}
      stroke={secondaryColor}
      x='6'
      y='9'
      width='3'
      height='3'
    />
    <line fill='none' x1='12' y1='6' x2='12' y2='13.5' />
    <line fill='none' x1='12' y1='16.5' x2='12' y2='18' />
    <rect
      fill={secondaryColor}
      stroke={secondaryColor}
      x='10.5'
      y='13.5'
      width='3'
      height='3'
    />
    <line fill='none' x1='16.5' y1='6' x2='16.5' y2='6.75' />
    <line fill='none' x1='16.5' y1='9.75' x2='16.5' y2='18' />
    <rect
      fill={secondaryColor}
      stroke={secondaryColor}
      x='15'
      y='6.75'
      width='3'
      height='3'
    />
  </Fragment>
)

const AdjustmentsAlt = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AdjustmentsAlt
