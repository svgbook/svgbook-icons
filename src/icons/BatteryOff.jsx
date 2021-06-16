import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fill='none'
      d='M11.33,8.67h4A1.33,1.33,0,0,1,16.67,10v.33a.34.34,0,0,0,.33.34.33.33,0,0,1,.33.33v2a.33.33,0,0,1-.33.33.34.34,0,0,0-.33.34V14m-1.34,1.33H8A1.32,1.32,0,0,1,6.67,14V10A1.32,1.32,0,0,1,8,8.67h.67'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fill='none'
      d='M11.33,8.67h4A1.33,1.33,0,0,1,16.67,10v.33a.34.34,0,0,0,.33.34.33.33,0,0,1,.33.33v2a.33.33,0,0,1-.33.33.34.34,0,0,0-.33.34V14m-1.34,1.33H8A1.32,1.32,0,0,1,6.67,14V10A1.32,1.32,0,0,1,8,8.67h.67'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M11.33,8.67h4A1.33,1.33,0,0,1,16.67,10v.33a.34.34,0,0,0,.33.34.33.33,0,0,1,.33.33v2a.33.33,0,0,1-.33.33.34.34,0,0,0-.33.34V14m-1.34,1.33H8A1.32,1.32,0,0,1,6.67,14V10A1.32,1.32,0,0,1,8,8.67h.67'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.33,8.67h4A1.33,1.33,0,0,1,16.67,10v.33a.34.34,0,0,0,.33.34.33.33,0,0,1,.33.33v2a.33.33,0,0,1-.33.33.34.34,0,0,0-.33.34V14m-1.34,1.33H8A1.32,1.32,0,0,1,6.67,14V10A1.32,1.32,0,0,1,8,8.67h.67'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const BatteryOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BatteryOff
