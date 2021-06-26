import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='12' width='4' height='5.33' rx='0.67' />
    <rect fill='none' x='10' y='9.33' width='4' height='8' rx='0.67' />
    <rect fill='none' x='14' y='6.67' width='4' height='10.67' rx='0.67' />
    <line x1='6.67' y1='17.33' x2='16' y2='17.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect x='6' y='12' width='4' height='5.33' rx='0.67' />
    <rect x='10' y='9.33' width='4' height='8' rx='0.67' />
    <rect x='14' y='6.67' width='4' height='10.67' rx='0.67' />
    <line x1='6.67' y1='17.33' x2='16' y2='17.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='12' width='4' height='5.33' rx='0.67' />
    <rect fillOpacity='.2' x='10' y='9.33' width='4' height='8' rx='0.67' />
    <rect fillOpacity='.2' x='14' y='6.67' width='4' height='10.67' rx='0.67' />
    <line x1='6.67' y1='17.33' x2='16' y2='17.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6'
      y='12'
      width='4'
      height='5.33'
      rx='0.67'
    />
    <rect
      fill={secondaryColor}
      x='10'
      y='9.33'
      width='4'
      height='8'
      rx='0.67'
    />
    <rect
      fill={secondaryColor}
      x='14'
      y='6.67'
      width='4'
      height='10.67'
      rx='0.67'
    />
    <line x1='6.67' y1='17.33' x2='16' y2='17.33' />
  </Fragment>
)

const ChartBar = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartBar
