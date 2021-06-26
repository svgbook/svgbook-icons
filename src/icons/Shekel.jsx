import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,18V6h4a4,4,0,0,1,4,4v4' />
    <path fill='none' d='M18,6V18H14a4,4,0,0,1-4-4V10' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,18V6h4a4,4,0,0,1,4,4v4' />
    <path fill='none' d='M18,6V18H14a4,4,0,0,1-4-4V10' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,18V6h4a4,4,0,0,1,4,4v4' />
    <path fill='none' strokeOpacity='.2' d='M18,6V18H14a4,4,0,0,1-4-4V10' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M6,18V6h4a4,4,0,0,1,4,4v4' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M18,6V18H14a4,4,0,0,1-4-4V10'
    />
  </Fragment>
)

const Shekel = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Shekel
