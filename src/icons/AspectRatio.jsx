import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='5.5' y='6.94' width='13' height='10.11' rx='1.44' />
    <path fill='none' d='M8.39,12V9.83h2.17' />
    <path fill='none' d='M15.61,12v2.17H13.44' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.06,6.44H6.94A2,2,0,0,0,5,8.39v7.22a2,2,0,0,0,1.94,1.95H17.06A2,2,0,0,0,19,15.61V8.39A2,2,0,0,0,17.06,6.44Zm-6.5,3.89H8.89V12a.5.5,0,1,1-1,0V9.83a.5.5,0,0,1,.5-.5h2.17a.51.51,0,0,1,.5.5A.5.5,0,0,1,10.56,10.33Zm5.55,3.84a.5.5,0,0,1-.5.5H13.44a.51.51,0,0,1-.5-.5.5.5,0,0,1,.5-.5h1.67V12a.5.5,0,0,1,1,0Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect
      fillOpacity='.2'
      x='5.5'
      y='6.94'
      width='13'
      height='10.11'
      rx='1.44'
    />
    <path fill='none' d='M8.39,12V9.83h2.17' />
    <path fill='none' d='M15.61,12v2.17H13.44' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill='none' x='5.5' y='6.94' width='13' height='10.11' rx='1.44' />
    <path fill='none' stroke={secondaryColor} d='M8.39,12V9.83h2.17' />
    <path fill='none' stroke={secondaryColor} d='M15.61,12v2.17H13.44' />
  </Fragment>
)

const AspectRatio = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AspectRatio
