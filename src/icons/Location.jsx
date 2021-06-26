import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='7.2' />
    <line x1='12' y1='16.8' x2='12' y2='18' />
    <line x1='16.8' y1='12' x2='18' y2='12' />
    <line x1='6' y1='12' x2='7.2' y2='12' />
    <circle fill='none' cx='12' cy='12' r='1.8' />
    <circle fill='none' cx='12' cy='12' r='4.8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='7.2' />
    <line x1='12' y1='16.8' x2='12' y2='18' />
    <line x1='16.8' y1='12' x2='18' y2='12' />
    <line x1='6' y1='12' x2='7.2' y2='12' />
    <circle cx='12' cy='12' r='1.8' />
    <circle fill='none' cx='12' cy='12' r='4.8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='12' y1='6' x2='12' y2='7.2' />
    <line x1='12' y1='16.8' x2='12' y2='18' />
    <line x1='16.8' y1='12' x2='18' y2='12' />
    <line x1='6' y1='12' x2='7.2' y2='12' />
    <circle fillOpacity='.2' cx='12' cy='12' r='4.8' />
    <circle fill='none' cx='12' cy='12' r='1.8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='12' y1='6' x2='12' y2='7.2' />
    <line stroke={secondaryColor} x1='12' y1='16.8' x2='12' y2='18' />
    <line stroke={secondaryColor} x1='16.8' y1='12' x2='18' y2='12' />
    <line stroke={secondaryColor} x1='6' y1='12' x2='7.2' y2='12' />
    <circle fill='none' stroke={secondaryColor} cx='12' cy='12' r='1.8' />
    <circle fill='none' cx='12' cy='12' r='4.8' />
  </Fragment>
)

const Location = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Location
