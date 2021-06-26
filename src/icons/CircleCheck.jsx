import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M10,12l1.33,1.33L14,10.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5ZM14.35,11l-2.66,2.67a.52.52,0,0,1-.36.14.5.5,0,0,1-.35-.14L9.65,12.35a.49.49,0,0,1,.7-.7l1,1,2.32-2.32a.5.5,0,0,1,.7,0A.5.5,0,0,1,14.35,11Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path fill='none' d='M10,12l1.33,1.33L14,10.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path fill='none' d='M10,12l1.33,1.33L14,10.67' />
  </Fragment>
)

const CircleCheck = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CircleCheck
