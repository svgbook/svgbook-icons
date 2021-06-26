import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='11.4' r='1.2' />
    <path
      fill='none'
      d='M12,15.6q-3.6,0-6-4.2,2.4-4.2,6-4.2t6,4.2a11.14,11.14,0,0,1-.79,1.22'
    />
    <path fill='none' d='M13.8,15.6,15,16.8l2.4-2.4' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='11.4' r='1.2' />
    <path
      fill='none'
      d='M12,15.6q-3.6,0-6-4.2,2.4-4.2,6-4.2t6,4.2a11.14,11.14,0,0,1-.79,1.22'
    />
    <path fill='none' d='M13.8,15.6,15,16.8l2.4-2.4' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='11.4' r='1.2' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M12,15.6q-3.6,0-6-4.2,2.4-4.2,6-4.2t6,4.2a11.14,11.14,0,0,1-.79,1.22'
    />
    <path fill='none' d='M13.8,15.6,15,16.8l2.4-2.4' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='11.4' r='1.2' />
    <path
      fill='none'
      d='M12,15.6q-3.6,0-6-4.2,2.4-4.2,6-4.2t6,4.2a11.14,11.14,0,0,1-.79,1.22'
    />
    <path fill='none' stroke={secondaryColor} d='M13.8,15.6,15,16.8l2.4-2.4' />
  </Fragment>
)

const EyeCheck = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default EyeCheck
