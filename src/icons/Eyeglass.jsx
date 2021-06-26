import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.33,6.67H8L6,13.33V15' />
    <path fill='none' d='M14.67,6.67H16l2,6.66V15' />
    <line x1='10.67' y1='14.67' x2='13.33' y2='14.67' />
    <circle fill='none' cx='15.67' cy='15' r='2.33' />
    <circle fill='none' cx='8.33' cy='15' r='2.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M9.33,6.67H8L6,13.33V15' />
    <path fill='none' d='M14.67,6.67H16l2,6.66V15' />
    <line x1='10.67' y1='14.67' x2='13.33' y2='14.67' />
    <circle cx='15.67' cy='15' r='2.33' />
    <circle cx='8.33' cy='15' r='2.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.33,6.67H8L6,13.33V15' />
    <path fill='none' d='M14.67,6.67H16l2,6.66V15' />
    <line x1='10.67' y1='14.67' x2='13.33' y2='14.67' />
    <circle fillOpacity='.2' cx='15.67' cy='15' r='2.33' />
    <circle fillOpacity='.2' cx='8.33' cy='15' r='2.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M9.33,6.67H8L6,13.33V15' />
    <path fill='none' d='M14.67,6.67H16l2,6.66V15' />
    <line x1='10.67' y1='14.67' x2='13.33' y2='14.67' />
    <circle fill={secondaryColor} cx='15.67' cy='15' r='2.33' />
    <circle fill={secondaryColor} cx='8.33' cy='15' r='2.33' />
  </Fragment>
)

const Eyeglass = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Eyeglass
