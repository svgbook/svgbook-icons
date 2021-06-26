import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12.68' r='1.33' />
    <line x1='12.97' y1='11.72' x2='14.33' y2='10.35' />
    <path fill='none' d='M8.27,17.35a6,6,0,1,1,8.43-1,6.35,6.35,0,0,1-1,1Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16,7.56A6.5,6.5,0,1,0,8,17.74a.47.47,0,0,0,.31.11h7.46a.47.47,0,0,0,.31-.11,6.89,6.89,0,0,0,1.05-1A6.51,6.51,0,0,0,16,7.56ZM14.69,10.7l-1.1,1.1a1.66,1.66,0,0,1,.24.88A1.83,1.83,0,1,1,12,10.85a1.7,1.7,0,0,1,.89.24L14,10a.5.5,0,0,1,.71,0A.5.5,0,0,1,14.69,10.7Z'
    />
    <path
      stroke='none'
      d='M12.83,12.68a.83.83,0,1,1-1.66,0,.83.83,0,0,1,1.66,0Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12.68' r='1.33' />
    <line x1='12.97' y1='11.72' x2='14.33' y2='10.35' />
    <path
      fillOpacity='.2'
      d='M8.27,17.35a6,6,0,1,1,8.43-1,6.35,6.35,0,0,1-1,1Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' stroke={secondaryColor} cx='12' cy='12.68' r='1.33' />
    <line stroke={secondaryColor} x1='12.97' y1='11.72' x2='14.33' y2='10.35' />
    <path fill='none' d='M8.27,17.35a6,6,0,1,1,8.43-1,6.35,6.35,0,0,1-1,1Z' />
  </Fragment>
)

const Dashboard = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Dashboard
