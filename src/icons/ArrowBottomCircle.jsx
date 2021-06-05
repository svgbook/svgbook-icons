import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,8.67V18' />
    <path fill='none' d='M10,16l2,2,2-2' />
    <circle fill='none' cx='12' cy='7.33' r='1.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12,8.67V18' />
    <path fill='none' d='M10,16l2,2,2-2' />
    <circle cx='12' cy='7.33' r='1.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M12,8.67V18' />
    <path fill='none' d='M10,16l2,2,2-2' />
    <circle fillOpacity='.2' cx='12' cy='7.33' r='1.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M12,8.67V18' />
    <path fill='none' d='M10,16l2,2,2-2' />
    <circle fill={secondaryColor} cx='12' cy='7.33' r='1.33' />
  </Fragment>
)

const ArrowBottomCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBottomCircle
