import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='7.33 8 12 6 16.67 8' />
    <line x1='6' y1='18' x2='18' y2='18' />
    <line x1='6' y1='10.67' x2='18' y2='10.67' />
    <line x1='6.67' y1='10.67' x2='6.67' y2='18' />
    <line x1='17.33' y1='10.67' x2='17.33' y2='18' />
    <line x1='9.33' y1='13.33' x2='9.33' y2='15.33' />
    <line x1='12' y1='13.33' x2='12' y2='15.33' />
    <line x1='14.67' y1='13.33' x2='14.67' y2='15.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18,17.5h-.17V11.17H18a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H6a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h.17V17.5H6a.5.5,0,0,0,0,1H18a.5.5,0,0,0,0-1ZM9.83,15.33a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-2a.51.51,0,0,1,.5-.5.5.5,0,0,1,.5.5Zm2.67,0a.5.5,0,0,1-1,0v-2a.5.5,0,1,1,1,0Zm2.67,0a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5v-2a.5.5,0,0,1,.5-.5.51.51,0,0,1,.5.5Z'
    />
    <polyline fill='none' points='7.33 8 12 6 16.67 8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6.67' y='10.67' width='10.66' height='7.33' />
    <line x1='18' y1='18' x2='17.33' y2='18' />
    <line x1='6.67' y1='18' x2='6' y2='18' />
    <line x1='18' y1='10.67' x2='17.33' y2='10.67' />
    <line x1='6.67' y1='10.67' x2='6' y2='10.67' />
    <polyline fill='none' points='7.33 8 12 6 16.67 8' />
    <line x1='9.33' y1='13.33' x2='9.33' y2='15.33' />
    <line x1='12' y1='13.33' x2='12' y2='15.33' />
    <line x1='14.67' y1='13.33' x2='14.67' y2='15.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6.67'
      y='10.67'
      width='10.66'
      height='7.33'
    />
    <line x1='18' y1='18' x2='17.33' y2='18' />
    <line x1='6.67' y1='18' x2='6' y2='18' />
    <line x1='18' y1='10.67' x2='17.33' y2='10.67' />
    <line x1='6.67' y1='10.67' x2='6' y2='10.67' />
    <polyline fill='none' points='7.33 8 12 6 16.67 8' />
    <line x1='9.33' y1='13.33' x2='9.33' y2='15.33' />
    <line x1='12' y1='13.33' x2='12' y2='15.33' />
    <line x1='14.67' y1='13.33' x2='14.67' y2='15.33' />
  </Fragment>
)

const Bank = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bank
