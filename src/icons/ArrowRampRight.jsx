import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='8.67' y1='6' x2='8.67' y2='11.8' />
    <path fill='none' d='M11.33,8.67,8.67,6,6,8.67' />
    <path fill='none' d='M15.33,13.33,18,10.67,15.33,8' />
    <path fill='none' d='M8.67,18A7.33,7.33,0,0,1,16,10.67h2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='8.67' y1='6' x2='8.67' y2='11.8' />
    <path fill='none' d='M11.33,8.67,8.67,6,6,8.67' />
    <path fill='none' d='M15.33,13.33,18,10.67,15.33,8' />
    <path fill='none' d='M8.67,18A7.33,7.33,0,0,1,16,10.67h2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='8.67' y1='6' x2='8.67' y2='11.8' />
    <path strokeOpacity='.2' fill='none' d='M11.33,8.67,8.67,6,6,8.67' />
    <path fill='none' d='M15.33,13.33,18,10.67,15.33,8' />
    <path fill='none' d='M8.67,18A7.33,7.33,0,0,1,16,10.67h2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='8.67' y1='6' x2='8.67' y2='11.8' />
    <path fill='none' d='M11.33,8.67,8.67,6,6,8.67' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M8.67,18A7.33,7.33,0,0,1,16,10.67h2'
    />
    <path fill='none' d='M15.33,13.33,18,10.67,15.33,8' />
  </Fragment>
)

const ArrowRampRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowRampRight
