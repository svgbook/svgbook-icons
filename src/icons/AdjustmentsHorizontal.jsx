import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='13.5' cy='7.5' r='1.5' />
    <line x1='6' y1='7.5' x2='12' y2='7.5' />
    <line x1='15' y1='7.5' x2='18' y2='7.5' />
    <circle fill='none' cx='9' cy='12' r='1.5' />
    <line x1='6' y1='12' x2='7.5' y2='12' />
    <line x1='10.5' y1='12' x2='18' y2='12' />
    <circle fill='none' cx='15.75' cy='16.5' r='1.5' />
    <line x1='6' y1='16.5' x2='14.25' y2='16.5' />
    <line x1='17.25' y1='16.5' x2='18' y2='16.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='13.5' cy='7.5' r='1.5' />
    <line x1='6' y1='7.5' x2='12' y2='7.5' />
    <line x1='15' y1='7.5' x2='18' y2='7.5' />
    <circle cx='9' cy='12' r='1.5' />
    <line x1='6' y1='12' x2='7.5' y2='12' />
    <line x1='10.5' y1='12' x2='18' y2='12' />
    <circle cx='15.75' cy='16.5' r='1.5' />
    <line x1='6' y1='16.5' x2='14.25' y2='16.5' />
    <line x1='17.25' y1='16.5' x2='18' y2='16.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='13.5' cy='7.5' r='1.5' />
    <line x1='6' y1='7.5' x2='12' y2='7.5' />
    <line x1='15' y1='7.5' x2='18' y2='7.5' />
    <circle fillOpacity='.2' cx='9' cy='12' r='1.5' />
    <line x1='6' y1='12' x2='7.5' y2='12' />
    <line x1='10.5' y1='12' x2='18' y2='12' />
    <circle fillOpacity='.2' cx='15.75' cy='16.5' r='1.5' />
    <line x1='6' y1='16.5' x2='14.25' y2='16.5' />
    <line x1='17.25' y1='16.5' x2='18' y2='16.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6' y1='7.5' x2='12' y2='7.5' />
    <line x1='15' y1='7.5' x2='18' y2='7.5' />
    <circle
      fill={secondaryColor}
      stroke={secondaryColor}
      cx='13.5'
      cy='7.5'
      r='1.5'
    />
    <line x1='6' y1='12' x2='7.5' y2='12' />
    <line x1='10.5' y1='12' x2='18' y2='12' />
    <circle
      fill={secondaryColor}
      stroke={secondaryColor}
      cx='9'
      cy='12'
      r='1.5'
    />
    <line x1='6' y1='16.5' x2='14.25' y2='16.5' />
    <line x1='17.25' y1='16.5' x2='18' y2='16.5' />
    <circle
      fill={secondaryColor}
      stroke={secondaryColor}
      cx='15.75'
      cy='16.5'
      r='1.5'
    />
  </Fragment>
)

const AdjustmentsHorizontal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AdjustmentsHorizontal
