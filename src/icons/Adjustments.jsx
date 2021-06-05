import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='7.5' y1='6' x2='7.5' y2='9' />
    <line x1='7.5' y1='12' x2='7.5' y2='18' />
    <circle fill='none' cx='7.5' cy='10.5' r='1.5' />
    <line x1='12' y1='6' x2='12' y2='13.5' />
    <line x1='12' y1='16.5' x2='12' y2='18' />
    <circle fill='none' cx='12' cy='15' r='1.5' />
    <line x1='16.5' y1='6' x2='16.5' y2='6.75' />
    <line x1='16.5' y1='9.75' x2='16.5' y2='18' />
    <circle fill='none' cx='16.5' cy='8.25' r='1.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='7.5' y1='6' x2='7.5' y2='9' />
    <line x1='7.5' y1='12' x2='7.5' y2='18' />
    <circle cx='7.5' cy='10.5' r='1.5' />
    <line x1='12' y1='6' x2='12' y2='13.5' />
    <line x1='12' y1='16.5' x2='12' y2='18' />
    <circle cx='12' cy='15' r='1.5' />
    <line x1='16.5' y1='6' x2='16.5' y2='6.75' />
    <line x1='16.5' y1='9.75' x2='16.5' y2='18' />
    <circle cx='16.5' cy='8.25' r='1.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='7.5' y1='6' x2='7.5' y2='9' />
    <line x1='7.5' y1='12' x2='7.5' y2='18' />
    <circle fillOpacity='.2' cx='7.5' cy='10.5' r='1.5' />
    <line x1='12' y1='6' x2='12' y2='13.5' />
    <line x1='12' y1='16.5' x2='12' y2='18' />
    <circle fillOpacity='.2' cx='12' cy='15' r='1.5' />
    <line x1='16.5' y1='6' x2='16.5' y2='6.75' />
    <line x1='16.5' y1='9.75' x2='16.5' y2='18' />
    <circle fillOpacity='.2' cx='16.5' cy='8.25' r='1.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='7.5' y1='6' x2='7.5' y2='9' />
    <line x1='7.5' y1='12' x2='7.5' y2='18' />
    <circle
      fill={secondaryColor}
      stroke={secondaryColor}
      cx='7.5'
      cy='10.5'
      r='1.5'
    />
    <line x1='12' y1='6' x2='12' y2='13.5' />
    <line x1='12' y1='16.5' x2='12' y2='18' />
    <circle
      fill={secondaryColor}
      stroke={secondaryColor}
      cx='12'
      cy='15'
      r='1.5'
    />
    <line x1='16.5' y1='6' x2='16.5' y2='6.75' />
    <line x1='16.5' y1='9.75' x2='16.5' y2='18' />
    <circle
      fill={secondaryColor}
      stroke={secondaryColor}
      cx='16.5'
      cy='8.25'
      r='1.5'
    />
  </Fragment>
)

const Adjustments = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Adjustments
