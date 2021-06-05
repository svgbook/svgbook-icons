import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M15.33,18,18,15.33l-2.67-2.66' />
    <path fill='none' d='M18,15.33H10.67a2,2,0,0,1-2-2V6' />
    <path fill='none' d='M11.33,8.67,8.67,6,6,8.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M15.33,18,18,15.33l-2.67-2.66' />
    <path fill='none' d='M18,15.33H10.67a2,2,0,0,1-2-2V6' />
    <path fill='none' d='M11.33,8.67,8.67,6,6,8.67' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M15.33,18,18,15.33l-2.67-2.66' />
    <path fill='none' strokeOpacity='.2' d='M18,15.33H10.67a2,2,0,0,1-2-2V6' />
    <path fill='none' d='M11.33,8.67,8.67,6,6,8.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M18,15.33H10.67a2,2,0,0,1-2-2V6'
    />
    <path fill='none' d='M15.33,18,18,15.33l-2.67-2.66' />
    <path fill='none' d='M11.33,8.67,8.67,6,6,8.67' />
  </Fragment>
)

const ArrowsUpRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsUpRight
