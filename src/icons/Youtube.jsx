import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='7.33' width='12' height='9.33' rx='2.67' />
    <path fill='none' d='M10.67,10,14,12l-3.33,2Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M15.33,6.83H8.67A3.17,3.17,0,0,0,5.5,10v4a3.17,3.17,0,0,0,3.17,3.17h6.66A3.17,3.17,0,0,0,18.5,14V10A3.17,3.17,0,0,0,15.33,6.83Zm-1.07,5.6-3.34,2a.45.45,0,0,1-.25.07.54.54,0,0,1-.25-.06.5.5,0,0,1-.25-.44V10a.5.5,0,0,1,.25-.44.52.52,0,0,1,.5,0l3.34,2a.51.51,0,0,1,0,.86Z'
    />
    <polygon points='13.03 12 11.17 13.12 11.17 10.88 13.03 12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='7.33' width='12' height='9.33' rx='2.67' />
    <path fill='none' d='M10.67,10,14,12l-3.33,2Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6'
      y='7.33'
      width='12'
      height='9.33'
      rx='2.67'
    />
    <path fill='none' d='M10.67,10,14,12l-3.33,2Z' />
  </Fragment>
)

const Youtube = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Youtube
