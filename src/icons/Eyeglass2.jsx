import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.33,6.67H8L6,13.33' />
    <path fill='none' d='M14.67,6.67H16l2,6.66' />
    <line x1='10.67' y1='14.67' x2='13.33' y2='14.67' />
    <path fill='none' d='M18,15a2.34,2.34,0,0,1-4.67,0V13.33H18V15' />
    <path fill='none' d='M10.67,15A2.34,2.34,0,0,1,6,15V13.33h4.67V15' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M9.33,6.67H8L6,13.33' />
    <path fill='none' d='M14.67,6.67H16l2,6.66' />
    <line x1='10.67' y1='14.67' x2='13.33' y2='14.67' />
    <path d='M18,15a2.34,2.34,0,0,1-4.67,0V13.33H18V15' />
    <path d='M10.67,15A2.34,2.34,0,0,1,6,15V13.33h4.67V15' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.33,6.67H8L6,13.33' />
    <path fill='none' d='M14.67,6.67H16l2,6.66' />
    <line x1='10.67' y1='14.67' x2='13.33' y2='14.67' />
    <path fillOpacity='.2' d='M18,15a2.34,2.34,0,0,1-4.67,0V13.33H18V15' />
    <path fillOpacity='.2' d='M10.67,15A2.34,2.34,0,0,1,6,15V13.33h4.67V15' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M9.33,6.67H8L6,13.33' />
    <path fill='none' d='M14.67,6.67H16l2,6.66' />
    <line x1='10.67' y1='14.67' x2='13.33' y2='14.67' />
    <path fill={secondaryColor} d='M18,15a2.34,2.34,0,0,1-4.67,0V13.33H18V15' />
    <path
      fill={secondaryColor}
      d='M10.67,15A2.34,2.34,0,0,1,6,15V13.33h4.67V15'
    />
  </Fragment>
)

const Eyeglass2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Eyeglass2
