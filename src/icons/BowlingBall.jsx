import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <line x1='11.33' y1='10' x2='11.33' y2='10.01' />
    <line x1='14' y1='9.33' x2='14' y2='9.34' />
    <line x1='13.33' y1='12' x2='13.33' y2='12.01' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5ZM11.83,10a.5.5,0,0,1-.5.5.51.51,0,0,1,0-1,.5.5,0,0,1,.5.5Zm2,2a.5.5,0,0,1-.5.5.51.51,0,0,1,0-1,.5.5,0,0,1,.5.5Zm.67-2.67a.5.5,0,1,1-.5-.5.5.5,0,0,1,.5.5Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <line x1='11.33' y1='10' x2='11.33' y2='10.01' />
    <line x1='14' y1='9.33' x2='14' y2='9.34' />
    <line x1='13.33' y1='12' x2='13.33' y2='12.01' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <line x1='11.33' y1='10' x2='11.33' y2='10.01' />
    <line x1='14' y1='9.33' x2='14' y2='9.34' />
    <line x1='13.33' y1='12' x2='13.33' y2='12.01' />
  </Fragment>
)

const BowlingBall = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BowlingBall
