import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='9.86' y1='14.14' x2='16.5' y2='6' />
    <line x1='7.5' y1='6' x2='14.14' y2='14.14' />
    <circle fill='none' cx='8.25' cy='15.75' r='2.25' />
    <circle fill='none' cx='15.75' cy='15.75' r='2.25' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='9.86' y1='14.14' x2='16.5' y2='6' />
    <line x1='7.5' y1='6' x2='14.14' y2='14.14' />
    <circle fill='none' cx='8.25' cy='15.75' r='2.25' />
    <circle fill='none' cx='15.75' cy='15.75' r='2.25' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='9.86' y1='14.14' x2='16.5' y2='6' />
    <line x1='7.5' y1='6' x2='14.14' y2='14.14' />
    <circle fillOpacity='.2' cx='8.25' cy='15.75' r='2.25' />
    <circle fillOpacity='.2' cx='15.75' cy='15.75' r='2.25' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='9.86' y1='14.14' x2='16.5' y2='6' />
    <line x1='7.5' y1='6' x2='14.14' y2='14.14' />
    <circle fill='none' stroke={secondaryColor} cx='8.25' cy='15.75' r='2.25' />
    <circle
      fill='none'
      stroke={secondaryColor}
      cx='15.75'
      cy='15.75'
      r='2.25'
    />
  </Fragment>
)

const Cut = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Cut
