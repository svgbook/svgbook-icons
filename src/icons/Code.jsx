import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='8.67 9.33 6 12 8.67 14.67' />
    <polyline fill='none' points='15.33 9.33 18 12 15.33 14.67' />
    <line x1='13.33' y1='6.67' x2='10.67' y2='17.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline fill='none' points='8.67 9.33 6 12 8.67 14.67' />
    <polyline fill='none' points='15.33 9.33 18 12 15.33 14.67' />
    <line x1='13.33' y1='6.67' x2='10.67' y2='17.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline fill='none' points='8.67 9.33 6 12 8.67 14.67' />
    <polyline fill='none' points='15.33 9.33 18 12 15.33 14.67' />
    <line strokeOpacity='.2' x1='13.33' y1='6.67' x2='10.67' y2='17.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill='none' points='8.67 9.33 6 12 8.67 14.67' />
    <polyline fill='none' points='15.33 9.33 18 12 15.33 14.67' />
    <line stroke={secondaryColor} x1='13.33' y1='6.67' x2='10.67' y2='17.33' />
  </Fragment>
)

const Code = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Code
