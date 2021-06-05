import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,8.67H9.33L11.67,12H18' />
    <path fill='none' d='M6,15.33H9.33L11.66,12' />
    <path fill='none' d='M16,14l2-2-2-2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,8.67H9.33L11.67,12H18' />
    <path fill='none' d='M6,15.33H9.33L11.66,12' />
    <path fill='none' d='M16,14l2-2-2-2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M6,8.67H9.33L11.67,12H18' />
    <path fill='none' strokeOpacity='.2' d='M6,15.33H9.33L11.66,12' />
    <path fill='none' d='M16,14l2-2-2-2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M6,8.67H9.33L11.67,12H18' />
    <path fill='none' stroke={secondaryColor} d='M6,15.33H9.33L11.66,12' />
    <path fill='none' d='M16,14l2-2-2-2' />
  </Fragment>
)

const ArrowsJoin2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsJoin2
