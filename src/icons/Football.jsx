import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M12,8.67,15.17,11,14,14.67H10L8.83,11Z' />
    <path d='M12,8.67V6m2,8.67,1.67,2m-.5-5.7,2.5-1M10,14.7l-1.71,2m.5-5.7-2.5-1' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path d='M12,8.67,15.17,11,14,14.67H10L8.83,11Z' />
    <path d='M12,8.67V6m2,8.67,1.67,2m-.5-5.7,2.5-1M10,14.7l-1.71,2m.5-5.7-2.5-1' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path fill='none' d='M12,8.67,15.17,11,14,14.67H10L8.83,11Z' />
    <path d='M12,8.67V6m2,8.67,1.67,2m-.5-5.7,2.5-1M10,14.7l-1.71,2m.5-5.7-2.5-1' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path fill='none' d='M12,8.67,15.17,11,14,14.67H10L8.83,11Z' />
    <path d='M12,8.67V6m2,8.67,1.67,2m-.5-5.7,2.5-1M10,14.7l-1.71,2m.5-5.7-2.5-1' />
  </Fragment>
)

const Football = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Football
