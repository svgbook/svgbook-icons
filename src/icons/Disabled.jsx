import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='11.7' cy='7.32' r='1.32' />
    <polyline fill='none' points='11.7 8.65 11.7 13.95 14.35 13.95 17 17.26' />
    <line x1='11.7' y1='11.3' x2='15.01' y2='11.3' />
    <path fill='none' d='M9.05,11.63a3.31,3.31,0,1,0,4,5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='11.7' cy='7.32' r='1.32' />
    <polyline fill='none' points='11.7 8.65 11.7 13.95 14.35 13.95 17 17.26' />
    <line x1='11.7' y1='11.3' x2='15.01' y2='11.3' />
    <path fill='none' d='M9.05,11.63a3.31,3.31,0,1,0,4,5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' cx='11.7' cy='7.32' r='1.32' />
    <polyline fill='none' points='11.7 8.65 11.7 13.95 14.35 13.95 17 17.26' />
    <line x1='11.7' y1='11.3' x2='15.01' y2='11.3' />
    <path fill='none' strokeOpacity='.2' d='M9.05,11.63a3.31,3.31,0,1,0,4,5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' cx='11.7' cy='7.32' r='1.32' />
    <polyline fill='none' points='11.7 8.65 11.7 13.95 14.35 13.95 17 17.26' />
    <line x1='11.7' y1='11.3' x2='15.01' y2='11.3' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M9.05,11.63a3.31,3.31,0,1,0,4,5'
    />
  </Fragment>
)

const Disabled = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Disabled
