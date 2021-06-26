import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='8.4' width='12' height='7.2' rx='1.2' />
    <path fill='none' d='M8.4,12h2.4M9.6,10.8v2.4' />
    <line x1='13.8' y1='11.4' x2='13.8' y2='11.41' />
    <line x1='15.6' y1='12.6' x2='15.6' y2='12.61' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.8,7.9H7.2A1.7,1.7,0,0,0,5.5,9.6v4.8a1.7,1.7,0,0,0,1.7,1.7h9.6a1.7,1.7,0,0,0,1.7-1.7V9.6A1.7,1.7,0,0,0,16.8,7.9Zm-6,4.6h-.7v.7a.5.5,0,0,1-1,0v-.7H8.4a.5.5,0,1,1,0-1h.7v-.7a.5.5,0,0,1,1,0v.7h.7a.5.5,0,0,1,0,1Zm3.5-1.09a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm1.8,1.2a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='8.4' width='12' height='7.2' rx='1.2' />
    <path fill='none' d='M8.4,12h2.4M9.6,10.8v2.4' />
    <line x1='13.8' y1='11.4' x2='13.8' y2='11.41' />
    <line x1='15.6' y1='12.6' x2='15.6' y2='12.61' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6'
      y='8.4'
      width='12'
      height='7.2'
      rx='1.2'
    />
    <path fill='none' d='M8.4,12h2.4M9.6,10.8v2.4' />
    <line x1='13.8' y1='11.4' x2='13.8' y2='11.41' />
    <line x1='15.6' y1='12.6' x2='15.6' y2='12.61' />
  </Fragment>
)

const Gamepad = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Gamepad
