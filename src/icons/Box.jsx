import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline
      fill='none'
      points='12 6 17.33 9 17.33 15 12 18 6.67 15 6.67 9 12 6'
    />
    <line x1='12' y1='12' x2='17.33' y2='9' />
    <line x1='12' y1='12' x2='12' y2='18' />
    <line x1='12' y1='12' x2='6.67' y2='9' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.81,8.87a.56.56,0,0,0,0-.12.44.44,0,0,0-.08-.11l-.11-.08-5.33-3a.55.55,0,0,0-.5,0l-5.33,3-.11.08a.46.46,0,0,0-.12.23.59.59,0,0,0,0,.13v6a.5.5,0,0,0,.25.44l5.3,3a.44.44,0,0,0,.16.06.37.37,0,0,0,.24,0,.44.44,0,0,0,.16-.06l5.3-3a.5.5,0,0,0,.25-.44V9A.59.59,0,0,0,17.81,8.87ZM11.5,17.15,7.17,14.71V9.86L11.5,12.3Zm.5-5.73L7.69,9,12,6.57,16.31,9Zm4.83,3.29L12.5,17.15V12.3l4.33-2.44Z'
    />
    <polygon stroke='none' points='9.73 9 12 7.72 14.27 9 12 10.27 9.73 9' />
    <polygon
      stroke='none'
      points='13.5 12.88 15.83 11.57 15.83 14.13 13.5 15.44 13.5 12.88'
    />
    <polygon
      stroke='none'
      points='8.17 14.13 8.17 11.57 10.5 12.88 10.5 15.44 8.17 14.13'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline
      fillOpacity='.2'
      points='12 6 17.33 9 17.33 15 12 18 6.67 15 6.67 9 12 6'
    />
    <line x1='12' y1='12' x2='17.33' y2='9' />
    <line x1='12' y1='12' x2='12' y2='18' />
    <line x1='12' y1='12' x2='6.67' y2='9' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline
      fill={secondaryColor}
      points='12 6 17.33 9 17.33 15 12 18 6.67 15 6.67 9 12 6'
    />
    <line x1='12' y1='12' x2='17.33' y2='9' />
    <line x1='12' y1='12' x2='12' y2='18' />
    <line x1='12' y1='12' x2='6.67' y2='9' />
  </Fragment>
)

const Box = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Box
