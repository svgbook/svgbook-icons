import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,8.67,15.33,6,12.67,8.67' />
    <path fill='none' d='M15.33,6v7.33a2,2,0,0,1-2,2H6' />
    <path fill='none' d='M8.67,12.67,6,15.33,8.67,18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M18,8.67,15.33,6,12.67,8.67' />
    <path fill='none' d='M15.33,6v7.33a2,2,0,0,1-2,2H6' />
    <path fill='none' d='M8.67,12.67,6,15.33,8.67,18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,8.67,15.33,6,12.67,8.67' />
    <path fill='none' strokeOpacity='.2' d='M15.33,6v7.33a2,2,0,0,1-2,2H6' />
    <path fill='none' d='M8.67,12.67,6,15.33,8.67,18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M15.33,6v7.33a2,2,0,0,1-2,2H6'
    />
    <path fill='none' d='M18,8.67,15.33,6,12.67,8.67' />
    <path fill='none' d='M8.67,12.67,6,15.33,8.67,18' />
  </Fragment>
)

const ArrowsUpLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsUpLeft
