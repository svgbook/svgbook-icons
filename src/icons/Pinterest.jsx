import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <line fill='none' x1='9.33' y1='17.33' x2='12' y2='11.33' />
    <path
      fill='none'
      d='M11.13,13.33a1.82,1.82,0,0,0,1.7,1.34A2.5,2.5,0,0,0,15.33,12a3.33,3.33,0,1,0-6.66,0,3.15,3.15,0,0,0,.2,1.14'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5ZM15.83,12a3,3,0,0,1-3,3.17,2.11,2.11,0,0,1-1.64-.77L10,17.11a5,5,0,0,1-.89-.45l2.45-5.53a.5.5,0,0,1,.92.41l-.79,1.78a1.28,1.28,0,0,0,1.16.85,2,2,0,0,0,2-2.17A2.82,2.82,0,0,0,12,9.16,2.83,2.83,0,0,0,9.17,12a2.68,2.68,0,0,0,.17,1,.5.5,0,0,1-.3.64.49.49,0,0,1-.64-.3A3.65,3.65,0,0,1,8.17,12a3.83,3.83,0,0,1,7.66,0Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <line fill='none' x1='9.33' y1='17.33' x2='12' y2='11.33' />
    <path
      fill='none'
      d='M11.13,13.33a1.82,1.82,0,0,0,1.7,1.34A2.5,2.5,0,0,0,15.33,12a3.33,3.33,0,1,0-6.66,0,3.15,3.15,0,0,0,.2,1.14'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <line fill='none' x1='9.33' y1='17.33' x2='12' y2='11.33' />
    <path
      fill='none'
      d='M11.13,13.33a1.82,1.82,0,0,0,1.7,1.34A2.5,2.5,0,0,0,15.33,12a3.33,3.33,0,1,0-6.66,0,3.15,3.15,0,0,0,.2,1.14'
    />
  </Fragment>
)

const Pinterest = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Pinterest
