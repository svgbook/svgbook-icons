import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline
      class='cls-2'
      points='8.26 10.34 12.14 14.22 16.03 10.34'
      fill='none'
    />
    <line class='cls-2' x1='12.14' y1='3.86' x2='12.14' y2='14.22' />
    <path
      d='M20,14.15v5.18a.74.74,0,0,1-.74.74l-14.52.07A.74.74,0,0,1,4,19.4V14.22'
      fill='none'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      class='cls-2'
      d='M11.79,14.57a.5.5,0,0,0,.35.15.51.51,0,0,0,.36-.15l3.88-3.88a.5.5,0,0,0,0-.71.5.5,0,0,0-.7,0l-3,3V3.86a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V13l-3-3a.5.5,0,0,0-.71.71Z'
      stroke='none'
    />
    <path
      d='M20,13.65a.5.5,0,0,0-.5.5v5.18a.24.24,0,0,1-.24.24l-14.52.07a.24.24,0,0,1-.24-.24V14.22a.5.5,0,1,0-1,0V19.4a1.24,1.24,0,0,0,1.24,1.24l14.52-.07a1.25,1.25,0,0,0,1.24-1.24V14.15A.5.5,0,0,0,20,13.65Z'
      stroke='none'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      class='cls-2'
      d='M11.79,14.57a.5.5,0,0,0,.35.15.51.51,0,0,0,.36-.15l3.88-3.88a.5.5,0,0,0,0-.71.5.5,0,0,0-.7,0l-3,3V3.86a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5V13l-3-3a.5.5,0,0,0-.71.71Z'
      fill={color}
      fillOpacity='.2'
      stroke={color}
    />
    <path
      d='M20,13.65a.5.5,0,0,0-.5.5v5.18a.24.24,0,0,1-.24.24l-14.52.07a.24.24,0,0,1-.24-.24V14.22a.5.5,0,1,0-1,0V19.4a1.24,1.24,0,0,0,1.24,1.24l14.52-.07a1.25,1.25,0,0,0,1.24-1.24V14.15A.5.5,0,0,0,20,13.65Z'
      fill={color}
      fillOpacity='.2'
      stroke={color}
    />
  </Fragment>
)

const Download = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Download
