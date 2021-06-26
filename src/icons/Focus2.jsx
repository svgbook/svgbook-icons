import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='0.33' />
    <circle fill='none' cx='12' cy='12' r='4.67' />
    <line x1='12' y1='6' x2='12' y2='7.33' />
    <line x1='6' y1='12' x2='7.33' y2='12' />
    <line x1='12' y1='16.67' x2='12' y2='18' />
    <line x1='16.67' y1='12' x2='18' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='12' r='4.67' />
    <circle cx='12' cy='12' r='0.33' />
    <line x1='12' y1='6' x2='12' y2='7.33' />
    <line x1='6' y1='12' x2='7.33' y2='12' />
    <line x1='12' y1='16.67' x2='12' y2='18' />
    <line x1='16.67' y1='12' x2='18' y2='12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='4.67' />
    <circle fill='none' cx='12' cy='12' r='0.33' />
    <line x1='12' y1='6' x2='12' y2='7.33' />
    <line x1='6' y1='12' x2='7.33' y2='12' />
    <line x1='12' y1='16.67' x2='12' y2='18' />
    <line x1='16.67' y1='12' x2='18' y2='12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='4.67' />
    <circle fill='none' cx='12' cy='12' r='0.33' />
    <line x1='12' y1='6' x2='12' y2='7.33' />
    <line x1='6' y1='12' x2='7.33' y2='12' />
    <line x1='12' y1='16.67' x2='12' y2='18' />
    <line x1='16.67' y1='12' x2='18' y2='12' />
  </Fragment>
)

const Focus2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Focus2
