import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <circle fill='none' cx='12' cy='12' r='0.67' />
    <line x1='12.46' y1='11.54' x2='14.67' y2='9.33' />
    <path fill='none' d='M8.67,12A3.33,3.33,0,0,1,12,8.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5ZM9.17,12a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5A3.84,3.84,0,0,1,12,8.17a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5A2.83,2.83,0,0,0,9.17,12ZM15,9.69,13.1,11.61a1,1,0,0,1,.07.39A1.17,1.17,0,1,1,12,10.83a1,1,0,0,1,.39.07L14.31,9a.5.5,0,0,1,.71.71Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <circle fill='none' cx='12' cy='12' r='0.67' />
    <line x1='12.46' y1='11.54' x2='14.67' y2='9.33' />
    <path fill='none' d='M8.67,12A3.33,3.33,0,0,1,12,8.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <circle fill='none' cx='12' cy='12' r='0.67' />
    <line x1='12.46' y1='11.54' x2='14.67' y2='9.33' />
    <path fill='none' d='M8.67,12A3.33,3.33,0,0,1,12,8.67' />
  </Fragment>
)

const Gauge = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Gauge
