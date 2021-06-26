import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M13.67,10a2.14,2.14,0,0,0-3.3.24A2.93,2.93,0,0,0,10.58,14a2.12,2.12,0,0,0,3.09,0'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm-1.07,8.15a1.66,1.66,0,0,0,2.38,0,.5.5,0,0,1,.71.7,2.65,2.65,0,0,1-1.9.82,2.68,2.68,0,0,1-1.9-.82A3.46,3.46,0,0,1,10,9.93a2.69,2.69,0,0,1,2-1.09A2.62,2.62,0,0,1,14,9.65a.5.5,0,1,1-.71.7A1.61,1.61,0,0,0,12,9.84a1.73,1.73,0,0,0-1.26.7A2.44,2.44,0,0,0,10.93,13.65Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M13.67,10a2.14,2.14,0,0,0-3.3.24A2.93,2.93,0,0,0,10.58,14a2.12,2.12,0,0,0,3.09,0'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M13.67,10a2.14,2.14,0,0,0-3.3.24A2.93,2.93,0,0,0,10.58,14a2.12,2.12,0,0,0,3.09,0'
    />
  </Fragment>
)

const Copyright = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Copyright
