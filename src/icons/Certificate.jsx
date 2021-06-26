import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='14' cy='13' r='2' />
    <path fill='none' d='M12.67,14.67v3l1.33-1,1.33,1v-3' />
    <path
      fill='none'
      d='M10.67,15.67H7.33A1.34,1.34,0,0,1,6,14.33V7.67A1.34,1.34,0,0,1,7.33,6.33h9.34A1.34,1.34,0,0,1,18,7.67v6.66a1.33,1.33,0,0,1-.67,1.16'
    />
    <line x1='8' y1='9' x2='16' y2='9' />
    <line x1='8' y1='11' x2='10' y2='11' />
    <line x1='8' y1='13' x2='9.33' y2='13' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='14' cy='13' r='2' />
    <path d='M12.67,14.67v3l1.33-1,1.33,1v-3' />
    <path
      fill='none'
      d='M10.67,15.67H7.33A1.34,1.34,0,0,1,6,14.33V7.67A1.34,1.34,0,0,1,7.33,6.33h9.34A1.34,1.34,0,0,1,18,7.67v6.66a1.33,1.33,0,0,1-.67,1.16'
    />
    <line x1='8' y1='9' x2='16' y2='9' />
    <line x1='8' y1='11' x2='10' y2='11' />
    <line x1='8' y1='13' x2='9.33' y2='13' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='14' cy='13' r='2' />
    <path fillOpacity='.2' d='M12.67,14.67v3l1.33-1,1.33,1v-3' />
    <path
      fill='none'
      d='M10.67,15.67H7.33A1.34,1.34,0,0,1,6,14.33V7.67A1.34,1.34,0,0,1,7.33,6.33h9.34A1.34,1.34,0,0,1,18,7.67v6.66a1.33,1.33,0,0,1-.67,1.16'
    />
    <line x1='8' y1='9' x2='16' y2='9' />
    <line x1='8' y1='11' x2='10' y2='11' />
    <line x1='8' y1='13' x2='9.33' y2='13' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M12.67,14.67v3l1.33-1,1.33,1v-3' />
    <circle fill={secondaryColor} cx='14' cy='13' r='2' />
    <path
      fill='none'
      d='M10.67,15.67H7.33A1.34,1.34,0,0,1,6,14.33V7.67A1.34,1.34,0,0,1,7.33,6.33h9.34A1.34,1.34,0,0,1,18,7.67v6.66a1.33,1.33,0,0,1-.67,1.16'
    />
    <line x1='8' y1='9' x2='16' y2='9' />
    <line x1='8' y1='11' x2='10' y2='11' />
    <line x1='8' y1='13' x2='9.33' y2='13' />
  </Fragment>
)

const Certificate = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Certificate
