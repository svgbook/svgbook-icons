import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6.42' y1='6.66' x2='17.11' y2='17.35' />
    <path
      fill='none'
      d='M15.33,15.56H8.79a2.67,2.67,0,1,1,0-5.34,3.09,3.09,0,0,1,.34-.84m1.25-1.15A3.12,3.12,0,0,1,11,8a3.63,3.63,0,0,1,3.27.59,2.86,2.86,0,0,1,1.06,2.85h.59A2.08,2.08,0,0,1,18,13.49a2.1,2.1,0,0,1-.76,1.61'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6.42' y1='6.66' x2='17.11' y2='17.35' />
    <path d='M15.33,15.56H8.79a2.67,2.67,0,1,1,0-5.34,3.09,3.09,0,0,1,.34-.84m1.25-1.15A3.12,3.12,0,0,1,11,8a3.63,3.63,0,0,1,3.27.59,2.86,2.86,0,0,1,1.06,2.85h.59A2.08,2.08,0,0,1,18,13.49a2.1,2.1,0,0,1-.76,1.61Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6.42' y1='6.66' x2='17.11' y2='17.35' />
    <path
      fillOpacity='.2'
      d='M15.33,15.56H8.79a2.67,2.67,0,1,1,0-5.34,3.09,3.09,0,0,1,.34-.84m1.25-1.15A3.12,3.12,0,0,1,11,8a3.63,3.63,0,0,1,3.27.59,2.86,2.86,0,0,1,1.06,2.85h.59A2.08,2.08,0,0,1,18,13.49a2.1,2.1,0,0,1-.76,1.61Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M15.33,15.56H8.79a2.67,2.67,0,1,1,0-5.34,3.09,3.09,0,0,1,.34-.84m1.25-1.15A3.12,3.12,0,0,1,11,8a3.63,3.63,0,0,1,3.27.59,2.86,2.86,0,0,1,1.06,2.85h.59A2.08,2.08,0,0,1,18,13.49a2.1,2.1,0,0,1-.76,1.61Z'
    />
    <line x1='6.42' y1='6.66' x2='17.11' y2='17.35' />
  </Fragment>
)

const CloudOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CloudOff
