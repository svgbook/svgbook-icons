import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7,15.55H5.61V7.74A.71.71,0,0,1,6.32,7h6.39v8.52m-2.84,0h4.26m2.84,0h1.42V11.29H12.71m0-3.55h3.55l2.13,3.55'
    />
    <path d='M7.74,10.58h2.84M9.16,9.16V12' />
    <circle fill='none' cx='8.45' cy='15.55' r='1.42' />
    <circle fill='none' cx='15.55' cy='15.55' r='1.42' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12.71,7.74h3.55l2.13,3.55' />
    <path d='M12.71,7v8.52H9.87a1.42,1.42,0,0,0-2.84,0H5.61V7.74A.71.71,0,0,1,6.32,7Z' />
    <path d='M18.39,11.29v4.26H17a1.42,1.42,0,1,0-2.84,0H12.71V11.29Z' />
    <path d='M7.74,10.58h2.84M9.16,9.16V12' />
    <circle fill='none' cx='8.45' cy='15.55' r='1.42' />
    <circle fill='none' cx='15.55' cy='15.55' r='1.42' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M12.71,7.74h3.55l2.13,3.55' />
    <path
      fillOpacity='.2'
      d='M12.71,7v8.52H9.87a1.42,1.42,0,0,0-2.84,0H5.61V7.74A.71.71,0,0,1,6.32,7Z'
    />
    <path
      fillOpacity='.2'
      d='M18.39,11.29v4.26H17a1.42,1.42,0,1,0-2.84,0H12.71V11.29Z'
    />
    <path d='M7.74,10.58h2.84M9.16,9.16V12' />
    <circle fillOpacity='.2' cx='8.45' cy='15.55' r='1.42' />
    <circle fillOpacity='.2' cx='15.55' cy='15.55' r='1.42' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M12.71,7.74h3.55l2.13,3.55' />
    <path
      fill={secondaryColor}
      d='M12.71,7v8.52H9.87a1.42,1.42,0,0,0-2.84,0H5.61V7.74A.71.71,0,0,1,6.32,7Z'
    />
    <path
      fill={secondaryColor}
      d='M18.39,11.29v4.26H17a1.42,1.42,0,1,0-2.84,0H12.71V11.29Z'
    />
    <path d='M7.74,10.58h2.84M9.16,9.16V12' />
    <circle fill='none' cx='8.45' cy='15.55' r='1.42' />
    <circle fill='none' cx='15.55' cy='15.55' r='1.42' />
  </Fragment>
)

const Ambulance = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Ambulance
