import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M10.67,14.67V9.33h1.66a1.67,1.67,0,0,1,0,3.34H10.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm.33,7.67H11.17v1.5a.51.51,0,0,1-.5.5.5.5,0,0,1-.5-.5V9.33a.5.5,0,0,1,.5-.5h1.66a2.17,2.17,0,0,1,0,4.34Z'
    />
    <path
      stroke='none'
      d='M13.5,11a1.17,1.17,0,0,1-1.17,1.17H11.17V9.83h1.16A1.17,1.17,0,0,1,13.5,11Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path fill='none' d='M10.67,14.67V9.33h1.66a1.67,1.67,0,0,1,0,3.34H10.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path fill='none' d='M10.67,14.67V9.33h1.66a1.67,1.67,0,0,1,0,3.34H10.67' />
  </Fragment>
)

const Producthunt = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Producthunt
