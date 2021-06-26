import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='7.33' y='6' width='9.33' height='12' rx='0.67' />
    <circle fill='none' cx='12' cy='15.33' r='0.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16,5.5H8A1.17,1.17,0,0,0,6.83,6.67V17.33A1.17,1.17,0,0,0,8,18.5h8a1.17,1.17,0,0,0,1.17-1.17V6.67A1.17,1.17,0,0,0,16,5.5Zm-4,11a1.17,1.17,0,1,1,1.17-1.17A1.17,1.17,0,0,1,12,16.5Z'
    />
    <path
      stroke='none'
      d='M12.17,15.33c0,.19-.34.19-.34,0a.17.17,0,0,1,.34,0Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='7.33' y='6' width='9.33' height='12' rx='0.67' />
    <circle fill='none' cx='12' cy='15.33' r='0.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='7.33'
      y='6'
      width='9.33'
      height='12'
      rx='0.67'
    />
    <circle fill='none' cx='12' cy='15.33' r='0.67' />
  </Fragment>
)

const Tablet = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Tablet
