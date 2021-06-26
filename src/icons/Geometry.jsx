import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.67,18l2.66-8m1.34,0,1,3m.64,1.9,1,3.14' />
    <circle fill='none' cx='12' cy='8.67' r='1.33' />
    <path
      fill='none'
      d='M6.67,12A6.07,6.07,0,0,0,12,15.33,6.07,6.07,0,0,0,17.33,12'
    />
    <path fill='none' d='M12,7.33V6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M8.67,18l2.66-8m1.34,0,1,3m.64,1.9,1,3.14' />
    <circle cx='12' cy='8.67' r='1.33' />
    <path
      fill='none'
      d='M6.67,12A6.07,6.07,0,0,0,12,15.33,6.07,6.07,0,0,0,17.33,12'
    />
    <path fill='none' d='M12,7.33V6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.67,18l2.66-8m1.34,0,1,3m.64,1.9,1,3.14' />
    <circle fillOpacity='.2' cx='12' cy='8.67' r='1.33' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M6.67,12A6.07,6.07,0,0,0,12,15.33,6.07,6.07,0,0,0,17.33,12'
    />
    <path fill='none' d='M12,7.33V6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M8.67,18l2.66-8m1.34,0,1,3m.64,1.9,1,3.14' />
    <circle fill={secondaryColor} cx='12' cy='8.67' r='1.33' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6.67,12A6.07,6.07,0,0,0,12,15.33,6.07,6.07,0,0,0,17.33,12'
    />
    <path fill='none' d='M12,7.33V6' />
  </Fragment>
)

const Geometry = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Geometry
