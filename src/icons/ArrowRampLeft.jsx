import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='15.33' y1='6' x2='15.33' y2='11.8' />
    <path fill='none' d='M12.67,8.67,15.33,6,18,8.67' />
    <path fill='none' d='M8.67,13.33,6,10.67,8.67,8' />
    <path fill='none' d='M15.33,18A7.33,7.33,0,0,0,8,10.67H6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='15.33' y1='6' x2='15.33' y2='11.8' />
    <path fill='none' d='M12.67,8.67,15.33,6,18,8.67' />
    <path fill='none' d='M8.67,13.33,6,10.67,8.67,8' />
    <path fill='none' d='M15.33,18A7.33,7.33,0,0,0,8,10.67H6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='15.33' y1='6' x2='15.33' y2='11.8' />
    <path fill='none' strokeOpacity='.2' d='M12.67,8.67,15.33,6,18,8.67' />
    <path fill='none' d='M8.67,13.33,6,10.67,8.67,8' />
    <path fill='none' d='M15.33,18A7.33,7.33,0,0,0,8,10.67H6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='15.33' y1='6' x2='15.33' y2='11.8' />
    <path fill='none' d='M12.67,8.67,15.33,6,18,8.67' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M15.33,18A7.33,7.33,0,0,0,8,10.67H6'
    />
    <path fill='none' d='M8.67,13.33,6,10.67,8.67,8' />
  </Fragment>
)

const ArrowRampLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowRampLeft
