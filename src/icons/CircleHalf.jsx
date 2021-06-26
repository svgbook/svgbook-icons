import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M12,6V18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M12,6V18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path fill='none' d='M12,6V18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path fill='none' d='M12,6V18' />
  </Fragment>
)

const CircleHalf = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CircleHalf
