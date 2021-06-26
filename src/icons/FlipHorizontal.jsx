import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='12' x2='18' y2='12' />
    <polyline fill='none' points='8.67 14.67 15.33 14.67 8.67 18 8.67 14.67' />
    <polyline fill='none' points='8.67 9.33 15.33 9.33 8.67 6 8.67 9.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='12' x2='18' y2='12' />
    <polyline points='8.67 14.67 15.33 14.67 8.67 18 8.67 14.67' />
    <polyline points='8.67 9.33 15.33 9.33 8.67 6 8.67 9.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6' y1='12' x2='18' y2='12' />
    <polyline
      fillOpacity='.2'
      points='8.67 14.67 15.33 14.67 8.67 18 8.67 14.67'
    />
    <polyline fillOpacity='.2' points='8.67 9.33 15.33 9.33 8.67 6 8.67 9.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6' y1='12' x2='18' y2='12' />
    <polyline
      fill={secondaryColor}
      points='8.67 14.67 15.33 14.67 8.67 18 8.67 14.67'
    />
    <polyline
      fill={secondaryColor}
      points='8.67 9.33 15.33 9.33 8.67 6 8.67 9.33'
    />
  </Fragment>
)

const FlipHorizontal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FlipHorizontal
