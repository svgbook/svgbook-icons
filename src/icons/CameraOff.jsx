import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.53,6.86A.67.67,0,0,1,10,6.67h4a.67.67,0,0,1,.67.66A1.33,1.33,0,0,0,16,8.67h.67A1.33,1.33,0,0,1,18,10v5.33m-.79,1.89a1.37,1.37,0,0,1-.54.11H7.33A1.33,1.33,0,0,1,6,16V10A1.33,1.33,0,0,1,7.33,8.67H8a1.3,1.3,0,0,0,.55-.12'
    />
    <path fill='none' d='M11,11A2,2,0,1,0,13,14.37a1.92,1.92,0,0,0,.67-.66' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M9.53,6.86A.67.67,0,0,1,10,6.67h4a.67.67,0,0,1,.67.66A1.33,1.33,0,0,0,16,8.67h.67A1.33,1.33,0,0,1,18,10v5.33m-.79,1.89a1.37,1.37,0,0,1-.54.11H7.33A1.33,1.33,0,0,1,6,16V10A1.33,1.33,0,0,1,7.33,8.67H8a1.3,1.3,0,0,0,.55-.12'
    />
    <path d='M11,11A2,2,0,1,0,13,14.37a1.92,1.92,0,0,0,.67-.66' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.53,6.86A.67.67,0,0,1,10,6.67h4a.67.67,0,0,1,.67.66A1.33,1.33,0,0,0,16,8.67h.67A1.33,1.33,0,0,1,18,10v5.33m-.79,1.89a1.37,1.37,0,0,1-.54.11H7.33A1.33,1.33,0,0,1,6,16V10A1.33,1.33,0,0,1,7.33,8.67H8a1.3,1.3,0,0,0,.55-.12'
    />
    <path
      fillOpacity='.2'
      d='M11,11A2,2,0,1,0,13,14.37a1.92,1.92,0,0,0,.67-.66'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M9.53,6.86A.67.67,0,0,1,10,6.67h4a.67.67,0,0,1,.67.66A1.33,1.33,0,0,0,16,8.67h.67A1.33,1.33,0,0,1,18,10v5.33m-.79,1.89a1.37,1.37,0,0,1-.54.11H7.33A1.33,1.33,0,0,1,6,16V10A1.33,1.33,0,0,1,7.33,8.67H8a1.3,1.3,0,0,0,.55-.12'
    />
    <path
      fill={secondaryColor}
      d='M11,11A2,2,0,1,0,13,14.37a1.92,1.92,0,0,0,.67-.66'
    />
    <line stroke={secondaryColor} x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const CameraOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CameraOff
