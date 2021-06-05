import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M17.81,15.23H12.65L10.39,12H6.19' />
    <path fill='none' d='M17.81,8.77H12.65L10.39,12' />
    <path fill='none' d='M15.88,10.71l1.93-1.94L15.88,6.83' />
    <path fill='none' d='M15.88,17.17l1.93-1.94-1.93-1.94' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M17.81,15.23H12.65L10.39,12H6.19' />
    <path fill='none' d='M17.81,8.77H12.65L10.39,12' />
    <path fill='none' d='M15.88,10.71l1.93-1.94L15.88,6.83' />
    <path fill='none' d='M15.88,17.17l1.93-1.94-1.93-1.94' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M17.81,15.23H12.65L10.39,12H6.19' />
    <path fill='none' strokeOpacity='.2' d='M17.81,8.77H12.65L10.39,12' />
    <path fill='none' d='M15.88,10.71l1.93-1.94L15.88,6.83' />
    <path fill='none' d='M15.88,17.17l1.93-1.94-1.93-1.94' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M17.81,15.23H12.65L10.39,12H6.19'
    />
    <path fill='none' stroke={secondaryColor} d='M17.81,8.77H12.65L10.39,12' />
    <path fill='none' d='M15.88,10.71l1.93-1.94L15.88,6.83' />
    <path fill='none' d='M15.88,17.17l1.93-1.94-1.93-1.94' />
  </Fragment>
)

const ArrowsSplit2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsSplit2
