import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M13.77,11.29h.7a1.42,1.42,0,0,1,1.41,1.42v2.11a1.06,1.06,0,0,0,2.12,0V9.88L15.88,7.76'
    />
    <rect fill='none' x='6.71' y='11.29' width='7.06' height='6.35' />
    <path
      fill='none'
      d='M6.71,11.29V7.76A1.41,1.41,0,0,1,8.12,6.35h4.23a1.42,1.42,0,0,1,1.42,1.41v3.53'
    />
    <line x1='14.47' y1='17.65' x2='13.77' y2='17.65' />
    <line x1='6.71' y1='17.65' x2='6' y2='17.65' />
    <path fill='none' d='M16.59,8.47v.71a.7.7,0,0,0,.7.7H18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M13.77,11.29h.7a1.42,1.42,0,0,1,1.41,1.42v2.11a1.06,1.06,0,0,0,2.12,0V9.88L15.88,7.76'
    />
    <rect x='6.71' y='11.29' width='7.06' height='6.35' />
    <path
      fill='none'
      d='M6.71,11.29V7.76A1.41,1.41,0,0,1,8.12,6.35h4.23a1.42,1.42,0,0,1,1.42,1.41v3.53'
    />
    <line x1='14.47' y1='17.65' x2='13.77' y2='17.65' />
    <line x1='6.71' y1='17.65' x2='6' y2='17.65' />
    <path fill='none' d='M16.59,8.47v.71a.7.7,0,0,0,.7.7H18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M13.77,11.29h.7a1.42,1.42,0,0,1,1.41,1.42v2.11a1.06,1.06,0,0,0,2.12,0V9.88L15.88,7.76'
    />
    <rect fillOpacity='.2' x='6.71' y='11.29' width='7.06' height='6.35' />
    <path
      fill='none'
      d='M6.71,11.29V7.76A1.41,1.41,0,0,1,8.12,6.35h4.23a1.42,1.42,0,0,1,1.42,1.41v3.53'
    />
    <line x1='14.47' y1='17.65' x2='13.77' y2='17.65' />
    <line x1='6.71' y1='17.65' x2='6' y2='17.65' />
    <path fill='none' d='M16.59,8.47v.71a.7.7,0,0,0,.7.7H18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M13.77,11.29h.7a1.42,1.42,0,0,1,1.41,1.42v2.11a1.06,1.06,0,0,0,2.12,0V9.88L15.88,7.76'
    />
    <rect fill={secondaryColor} x='6.71' y='11.29' width='7.06' height='6.35' />
    <path
      fill='none'
      d='M6.71,11.29V7.76A1.41,1.41,0,0,1,8.12,6.35h4.23a1.42,1.42,0,0,1,1.42,1.41v3.53'
    />
    <line x1='14.47' y1='17.65' x2='13.77' y2='17.65' />
    <line x1='6.71' y1='17.65' x2='6' y2='17.65' />
    <path fill='none' d='M16.59,8.47v.71a.7.7,0,0,0,.7.7H18' />
  </Fragment>
)

const GasStation = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GasStation
