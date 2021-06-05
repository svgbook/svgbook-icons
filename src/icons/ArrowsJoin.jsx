import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6,8.67H7.3a3.92,3.92,0,0,1,3.2,1.66A3.9,3.9,0,0,0,13.7,12H18'
    />
    <path
      fill='none'
      d='M6,15.33H7.3a3.92,3.92,0,0,0,3.2-1.66A3.89,3.89,0,0,1,13.7,12h3.63'
    />
    <path fill='none' d='M16,14l2-2-2-2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M6,8.67H7.3a3.92,3.92,0,0,1,3.2,1.66A3.9,3.9,0,0,0,13.7,12H18'
    />
    <path
      fill='none'
      d='M6,15.33H7.3a3.92,3.92,0,0,0,3.2-1.66A3.89,3.89,0,0,1,13.7,12h3.63'
    />
    <path fill='none' d='M16,14l2-2-2-2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M6,8.67H7.3a3.92,3.92,0,0,1,3.2,1.66A3.9,3.9,0,0,0,13.7,12H18'
    />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M6,15.33H7.3a3.92,3.92,0,0,0,3.2-1.66A3.89,3.89,0,0,1,13.7,12h3.63'
    />
    <path fill='none' d='M16,14l2-2-2-2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6,8.67H7.3a3.92,3.92,0,0,1,3.2,1.66A3.9,3.9,0,0,0,13.7,12H18'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6,15.33H7.3a3.92,3.92,0,0,0,3.2-1.66A3.89,3.89,0,0,1,13.7,12h3.63'
    />
    <path fill='none' d='M16,14l2-2-2-2' />
  </Fragment>
)

const ArrowsJoin = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsJoin
