import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='2.57' />
    <line x1='12' y1='6' x2='12' y2='6.01' />
    <line x1='16.28' y1='7.71' x2='16.28' y2='7.72' />
    <line x1='18' y1='12' x2='18' y2='12.01' />
    <line x1='16.28' y1='16.28' x2='16.28' y2='16.29' />
    <line x1='12' y1='18' x2='12' y2='18' />
    <line x1='7.71' y1='16.28' x2='7.71' y2='16.29' />
    <line x1='6' y1='12' x2='6' y2='12.01' />
    <line x1='7.71' y1='7.71' x2='7.71' y2='7.72' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='12' r='2.57' />
    <line x1='12' y1='6' x2='12' y2='6.01' />
    <line x1='16.28' y1='7.71' x2='16.28' y2='7.72' />
    <line x1='18' y1='12' x2='18' y2='12.01' />
    <line x1='16.28' y1='16.28' x2='16.28' y2='16.29' />
    <line x1='12' y1='18' x2='12' y2='18' />
    <line x1='7.71' y1='16.28' x2='7.71' y2='16.29' />
    <line x1='6' y1='12' x2='6' y2='12.01' />
    <line x1='7.71' y1='7.71' x2='7.71' y2='7.72' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='2.57' />
    <line x1='12' y1='6' x2='12' y2='6.01' />
    <line x1='16.28' y1='7.71' x2='16.28' y2='7.72' />
    <line x1='18' y1='12' x2='18' y2='12.01' />
    <line x1='16.28' y1='16.28' x2='16.28' y2='16.29' />
    <line x1='12' y1='18' x2='12' y2='18' />
    <line x1='7.71' y1='16.28' x2='7.71' y2='16.29' />
    <line x1='6' y1='12' x2='6' y2='12.01' />
    <line x1='7.71' y1='7.71' x2='7.71' y2='7.72' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='2.57' />
    <line x1='12' y1='6' x2='12' y2='6.01' />
    <line x1='16.28' y1='7.71' x2='16.28' y2='7.72' />
    <line x1='18' y1='12' x2='18' y2='12.01' />
    <line x1='16.28' y1='16.28' x2='16.28' y2='16.29' />
    <line x1='12' y1='18' x2='12' y2='18' />
    <line x1='7.71' y1='16.28' x2='7.71' y2='16.29' />
    <line x1='6' y1='12' x2='6' y2='12.01' />
    <line x1='7.71' y1='7.71' x2='7.71' y2='7.72' />
  </Fragment>
)

const BrightnessDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BrightnessDown
