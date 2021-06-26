import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='12.4' y='9.47' width='5.6' height='8.41' rx='0.7' />
    <path
      fill='none'
      d='M15.9,9.47V7.37a.7.7,0,0,0-.7-.7H6.09a.7.7,0,0,0-.7.7v8.4a.7.7,0,0,0,.7.71H12.4'
    />
    <line x1='14.5' y1='10.17' x2='15.9' y2='10.17' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.3,9h-.9V7.37a1.2,1.2,0,0,0-1.2-1.2H6.09a1.2,1.2,0,0,0-1.2,1.2v8.4A1.21,1.21,0,0,0,6.09,17H11.9v.2a1.2,1.2,0,0,0,1.2,1.2h4.2a1.2,1.2,0,0,0,1.2-1.2v-7A1.2,1.2,0,0,0,17.3,9Zm-5.4,1.2V16H6.09a.2.2,0,0,1-.2-.21V7.37a.2.2,0,0,1,.2-.2H15.2a.2.2,0,0,1,.2.2V9H13.1A1.2,1.2,0,0,0,11.9,10.17Zm4,.5H14.5a.5.5,0,0,1-.5-.5.45.45,0,0,1,0-.2.48.48,0,0,1,.46-.3h1.4a.45.45,0,0,1,.35.15.42.42,0,0,1,.11.15.45.45,0,0,1,0,.2A.5.5,0,0,1,15.9,10.67Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect
      fillOpacity='.2'
      x='12.4'
      y='9.47'
      width='5.6'
      height='8.41'
      rx='0.7'
    />
    <path
      fill='none'
      d='M15.9,9.47V7.37a.7.7,0,0,0-.7-.7H6.09a.7.7,0,0,0-.7.7v8.4a.7.7,0,0,0,.7.71H12.4'
    />
    <line x1='14.5' y1='10.17' x2='15.9' y2='10.17' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='12.4'
      y='9.47'
      width='5.6'
      height='8.41'
      rx='0.7'
    />
    <path
      fill='none'
      d='M15.9,9.47V7.37a.7.7,0,0,0-.7-.7H6.09a.7.7,0,0,0-.7.7v8.4a.7.7,0,0,0,.7.71H12.4'
    />
    <line x1='14.5' y1='10.17' x2='15.9' y2='10.17' />
  </Fragment>
)

const Devices = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Devices
