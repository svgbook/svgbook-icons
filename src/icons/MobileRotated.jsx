import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='8.25' width='12' height='7.5' rx='0.75' />
    <line x1='17.25' y1='11.25' x2='17.25' y2='12.75' />
    <line x1='8.25' y1='12' x2='8.24' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.25,7.75H6.75A1.25,1.25,0,0,0,5.5,9v6a1.25,1.25,0,0,0,1.25,1.25h10.5A1.25,1.25,0,0,0,18.5,15V9A1.25,1.25,0,0,0,17.25,7.75Zm-9,4.75h0a.5.5,0,1,1,.51-.5A.5.5,0,0,1,8.25,12.5Zm9.5.25a.51.51,0,0,1-.25.44.51.51,0,0,1-.25.06.5.5,0,0,1-.5-.5v-1.5a.5.5,0,0,1,.5-.5.43.43,0,0,1,.25.07.48.48,0,0,1,.25.43Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='8.25' width='12' height='7.5' rx='0.75' />
    <line x1='17.25' y1='11.25' x2='17.25' y2='12.75' />
    <line x1='8.25' y1='12' x2='8.24' y2='12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6'
      y='8.25'
      width='12'
      height='7.5'
      rx='0.75'
    />
    <line x1='17.25' y1='11.25' x2='17.25' y2='12.75' />
    <line x1='8.25' y1='12' x2='8.24' y2='12' />
  </Fragment>
)

const MobileRotated = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default MobileRotated
