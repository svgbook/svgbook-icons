import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6,15v1.5A1.5,1.5,0,0,0,7.5,18h9A1.5,1.5,0,0,0,18,16.5V15'
    />
    <polyline fill='none' points='8.25 10.88 12 14.63 15.75 10.88' />
    <line x1='12' y1='6' x2='12' y2='14.63' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M6,15v1.5A1.5,1.5,0,0,0,7.5,18h9A1.5,1.5,0,0,0,18,16.5V15'
    />
    <polyline fill='none' points='8.25 10.88 12 14.63 15.75 10.88' />
    <line x1='12' y1='6' x2='12' y2='14.63' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M6,15v1.5A1.5,1.5,0,0,0,7.5,18h9A1.5,1.5,0,0,0,18,16.5V15'
    />
    <polyline fill='none' points='8.25 10.88 12 14.63 15.75 10.88' />
    <line x1='12' y1='6' x2='12' y2='14.63' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6,15v1.5A1.5,1.5,0,0,0,7.5,18h9A1.5,1.5,0,0,0,18,16.5V15'
    />
    <polyline fill='none' points='8.25 10.88 12 14.63 15.75 10.88' />
    <line x1='12' y1='6' x2='12' y2='14.63' />
  </Fragment>
)

const Download = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Download
