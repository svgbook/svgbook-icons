import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M10.67,15,12,13l1.33,2M12,13V11.67L14,11m-4,0,2,.67' />
    <circle cx='12' cy='9' r='0.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,2.17a.83.83,0,1,1-.83.83A.83.83,0,0,1,12,8.17Zm2.16,3.3L12.5,12v.82l1.25,1.87a.51.51,0,0,1-.14.7.57.57,0,0,1-.28.08.49.49,0,0,1-.41-.22L12,13.9l-.92,1.38a.5.5,0,0,1-.69.14.51.51,0,0,1-.14-.7l1.25-1.87V12l-1.66-.56a.5.5,0,0,1,.32-.94l1.84.61,1.84-.61a.5.5,0,1,1,.32.94Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path fill='none' d='M10.67,15,12,13l1.33,2M12,13V11.67L14,11m-4,0,2,.67' />
    <circle cx='12' cy='9' r='0.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M10.67,15,12,13l1.33,2M12,13V11.67L14,11m-4,0,2,.67'
    />
    <circle stroke={secondaryColor} cx='12' cy='9' r='0.33' />
  </Fragment>
)

const Accessible = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Accessible
