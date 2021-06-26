import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M5.7,9.2A5.32,5.32,0,0,0,7.8,7.8a4.55,4.55,0,0,0,8.4,0,5.32,5.32,0,0,0,2.1,1.4'
    />
    <line x1='7.8' y1='7.1' x2='7.8' y2='16.9' />
    <line x1='16.2' y1='7.1' x2='16.2' y2='16.9' />
    <line x1='5' y1='14.1' x2='19' y2='14.1' />
    <line x1='12' y1='10.6' x2='12' y2='14.1' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M5.7,9.2A5.32,5.32,0,0,0,7.8,7.8a4.55,4.55,0,0,0,8.4,0,5.32,5.32,0,0,0,2.1,1.4'
    />
    <line x1='7.8' y1='7.1' x2='7.8' y2='16.9' />
    <line x1='16.2' y1='7.1' x2='16.2' y2='16.9' />
    <line x1='5' y1='14.1' x2='19' y2='14.1' />
    <line x1='12' y1='10.6' x2='12' y2='14.1' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M5.7,9.2A5.32,5.32,0,0,0,7.8,7.8a4.55,4.55,0,0,0,8.4,0,5.32,5.32,0,0,0,2.1,1.4'
    />
    <line x1='7.8' y1='7.1' x2='7.8' y2='16.9' />
    <line x1='16.2' y1='7.1' x2='16.2' y2='16.9' />
    <line x1='5' y1='14.1' x2='19' y2='14.1' />
    <line x1='12' y1='10.6' x2='12' y2='14.1' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M5.7,9.2A5.32,5.32,0,0,0,7.8,7.8a4.55,4.55,0,0,0,8.4,0,5.32,5.32,0,0,0,2.1,1.4'
    />
    <line x1='7.8' y1='7.1' x2='7.8' y2='16.9' />
    <line x1='16.2' y1='7.1' x2='16.2' y2='16.9' />
    <line x1='5' y1='14.1' x2='19' y2='14.1' />
    <line x1='12' y1='10.6' x2='12' y2='14.1' />
  </Fragment>
)

const Bridge = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bridge
