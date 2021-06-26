import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='18' />
    <polyline fill='none' points='14.67 8.67 14.67 15.33 18 15.33 14.67 8.67' />
    <polyline fill='none' points='9.33 8.67 9.33 15.33 6 15.33 9.33 8.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='18' />
    <polyline points='14.67 8.67 14.67 15.33 18 15.33 14.67 8.67' />
    <polyline points='9.33 8.67 9.33 15.33 6 15.33 9.33 8.67' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='18' />
    <polyline
      fillOpacity='.2'
      points='14.67 8.67 14.67 15.33 18 15.33 14.67 8.67'
    />
    <polyline
      fillOpacity='.2'
      points='9.33 8.67 9.33 15.33 6 15.33 9.33 8.67'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='18' />
    <polyline
      fill={secondaryColor}
      points='14.67 8.67 14.67 15.33 18 15.33 14.67 8.67'
    />
    <polyline
      fill={secondaryColor}
      points='9.33 8.67 9.33 15.33 6 15.33 9.33 8.67'
    />
  </Fragment>
)

const FlipVertical = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FlipVertical
