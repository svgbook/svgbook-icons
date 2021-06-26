import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M13.87,10a1.35,1.35,0,0,0-1.2-.67H11.33a1.34,1.34,0,0,0,0,2.67h1.34a1.34,1.34,0,0,1,0,2.67H11.33a1.35,1.35,0,0,1-1.2-.67'
    />
    <path fill='none' d='M12,8V9.33m0,5.34V16' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm.67,9.67H12.5V16a.5.5,0,0,1-1,0v-.83h-.23a1.82,1.82,0,0,1-1.57-.92.49.49,0,0,1,.18-.68.51.51,0,0,1,.69.18.86.86,0,0,0,.75.42h1.35a.84.84,0,0,0,.83-.84.83.83,0,0,0-.83-.83H11.33a1.84,1.84,0,0,1,0-3.67h.17V8a.5.5,0,0,1,1,0v.83h.17a1.85,1.85,0,0,1,1.63.92.5.5,0,0,1-.18.68.51.51,0,0,1-.69-.18.89.89,0,0,0-.75-.42H11.33a.84.84,0,0,0-.83.84.83.83,0,0,0,.83.83h1.34a1.84,1.84,0,0,1,0,3.67Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M13.87,10a1.35,1.35,0,0,0-1.2-.67H11.33a1.34,1.34,0,0,0,0,2.67h1.34a1.34,1.34,0,0,1,0,2.67H11.33a1.35,1.35,0,0,1-1.2-.67'
    />
    <path fill='none' d='M12,8V9.33m0,5.34V16' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M13.87,10a1.35,1.35,0,0,0-1.2-.67H11.33a1.34,1.34,0,0,0,0,2.67h1.34a1.34,1.34,0,0,1,0,2.67H11.33a1.35,1.35,0,0,1-1.2-.67'
    />
    <path fill='none' d='M12,8V9.33m0,5.34V16' />
  </Fragment>
)

const Coin = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Coin
