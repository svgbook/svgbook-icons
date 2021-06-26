import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6.35,6.71v7.76a.71.71,0,0,0,.71.71H8.47V18l2.83-2.82h3.94a.75.75,0,0,0,.5-.21l1.7-1.7a.75.75,0,0,0,.21-.5V6.71A.71.71,0,0,0,16.94,6H7.06a.71.71,0,0,0-.71.71Z'
    />
    <line x1='14.82' y1='8.82' x2='14.82' y2='11.65' />
    <line x1='12' y1='8.82' x2='12' y2='11.65' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.94,5.5H7.06A1.21,1.21,0,0,0,5.85,6.71v7.76a1.21,1.21,0,0,0,1.21,1.21H8V18a.5.5,0,0,0,.31.46.43.43,0,0,0,.19,0,.51.51,0,0,0,.36-.15l2.67-2.67h3.74a1.2,1.2,0,0,0,.85-.36l1.71-1.7a1.23,1.23,0,0,0,.35-.85V6.71A1.21,1.21,0,0,0,16.94,5.5ZM12.5,11.65a.5.5,0,0,1-1,0V8.82a.5.5,0,0,1,1,0Zm2.82,0a.5.5,0,0,1-.5.5.51.51,0,0,1-.5-.5V8.82a.51.51,0,0,1,.5-.5.5.5,0,0,1,.5.5Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M6.35,6.71v7.76a.71.71,0,0,0,.71.71H8.47V18l2.83-2.82h3.94a.75.75,0,0,0,.5-.21l1.7-1.7a.75.75,0,0,0,.21-.5V6.71A.71.71,0,0,0,16.94,6H7.06a.71.71,0,0,0-.71.71Z'
    />
    <line x1='14.82' y1='8.82' x2='14.82' y2='11.65' />
    <line x1='12' y1='8.82' x2='12' y2='11.65' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M6.35,6.71v7.76a.71.71,0,0,0,.71.71H8.47V18l2.83-2.82h3.94a.75.75,0,0,0,.5-.21l1.7-1.7a.75.75,0,0,0,.21-.5V6.71A.71.71,0,0,0,16.94,6H7.06a.71.71,0,0,0-.71.71Z'
    />
    <line x1='14.82' y1='8.82' x2='14.82' y2='11.65' />
    <line x1='12' y1='8.82' x2='12' y2='11.65' />
  </Fragment>
)

const Twitch = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Twitch
