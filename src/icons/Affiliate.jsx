import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path d='M7.45,8.2l1,3.19m4.21,4.21,3.19,1' />
    <path d='M11.76,12.24l4.32-4.32' />
    <circle fill='none' cx='7.13' cy='7.13' r='1.12' />
    <circle fill='none' cx='16.88' cy='7.13' r='1.12' />
    <circle fill='none' cx='16.88' cy='16.88' r='1.12' />
    <circle fill='none' cx='9.38' cy='14.63' r='3.37' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M7.45,8.2l1,3.19m4.21,4.21,3.19,1' />
    <path d='M11.76,12.24l4.32-4.32' />
    <circle cx='7.13' cy='7.13' r='1.12' />
    <circle cx='16.88' cy='7.13' r='1.12' />
    <circle cx='16.88' cy='16.88' r='1.12' />
    <circle cx='9.38' cy='14.63' r='3.37' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path d='M7.45,8.2l1,3.19m4.21,4.21,3.19,1' />
    <path d='M11.76,12.24l4.32-4.32' />
    <circle fillOpacity='.2' cx='7.13' cy='7.13' r='1.12' />
    <circle fillOpacity='.2' cx='16.88' cy='7.13' r='1.12' />
    <circle fillOpacity='.2' cx='16.88' cy='16.88' r='1.12' />
    <circle fillOpacity='.2' cx='9.38' cy='14.63' r='3.37' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path d='M7.45,8.2l1,3.19m4.21,4.21,3.19,1' />
    <path d='M11.76,12.24l4.32-4.32' />
    <circle
      fill={secondaryColor}
      stroke={secondaryColor}
      cx='7.13'
      cy='7.13'
      r='1.12'
    />
    <circle
      fill={secondaryColor}
      stroke={secondaryColor}
      cx='16.88'
      cy='7.13'
      r='1.12'
    />
    <circle
      fill={secondaryColor}
      stroke={secondaryColor}
      cx='16.88'
      cy='16.88'
      r='1.12'
    />
    <circle fill={secondaryColor} cx='9.38' cy='14.63' r='3.37' />
  </Fragment>
)

const Affiliate = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Affiliate
