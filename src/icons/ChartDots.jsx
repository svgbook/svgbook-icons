import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,6V18H18' />
    <circle fill='none' cx='10' cy='10' r='1.33' />
    <circle fill='none' cx='16.67' cy='8.67' r='1.33' />
    <circle fill='none' cx='13.33' cy='14' r='1.33' />
    <line x1='10.77' y1='11.08' x2='12.33' y2='13' />
    <path fill='none' d='M14.06,12.88,16,9.83' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,6V18H18' />
    <circle cx='10' cy='10' r='1.33' />
    <circle cx='16.67' cy='8.67' r='1.33' />
    <circle cx='13.33' cy='14' r='1.33' />
    <line x1='10.77' y1='11.08' x2='12.33' y2='13' />
    <path fill='none' d='M14.06,12.88,16,9.83' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,6V18H18' />
    <circle fillOpacity={0.2} cx='10' cy='10' r='1.33' />
    <circle fillOpacity={0.2} cx='16.67' cy='8.67' r='1.33' />
    <circle fillOpacity={0.2} cx='13.33' cy='14' r='1.33' />
    <line x1='10.77' y1='11.08' x2='12.33' y2='13' />
    <path fill='none' d='M14.06,12.88,16,9.83' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M6,6V18H18' />
    <line x1='10.77' y1='11.08' x2='12.33' y2='13' />
    <path fill='none' d='M14.06,12.88,16,9.83' />
    <circle fill='none' stroke={secondaryColor} cx='10' cy='10' r='1.33' />
    <circle fill='none' stroke={secondaryColor} cx='16.67' cy='8.67' r='1.33' />
    <circle fill='none' stroke={secondaryColor} cx='13.33' cy='14' r='1.33' />
  </Fragment>
)

const ChartDots = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartDots
