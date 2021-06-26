import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6.67,8l2.16,7.57a.56.56,0,0,0,1.08,0L12,9.34l2.09,6.26a.57.57,0,0,0,1.08,0L17.33,8'
    />
    <path fill='none' d='M18,10.68H6' />
    <path fill='none' d='M18,13.34H6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M6.67,8l2.16,7.57a.56.56,0,0,0,1.08,0L12,9.34l2.09,6.26a.57.57,0,0,0,1.08,0L17.33,8'
    />
    <path fill='none' d='M18,10.68H6' />
    <path fill='none' d='M18,13.34H6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6.67,8l2.16,7.57a.56.56,0,0,0,1.08,0L12,9.34l2.09,6.26a.57.57,0,0,0,1.08,0L17.33,8'
    />
    <path fill='none' strokeOpacity='.2' d='M18,10.68H6' />
    <path fill='none' strokeOpacity='.2' d='M18,13.34H6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M6.67,8l2.16,7.57a.56.56,0,0,0,1.08,0L12,9.34l2.09,6.26a.57.57,0,0,0,1.08,0L17.33,8'
    />
    <path fill='none' stroke={secondaryColor} d='M18,10.68H6' />
    <path fill='none' stroke={secondaryColor} d='M18,13.34H6' />
  </Fragment>
)

const Won = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Won
