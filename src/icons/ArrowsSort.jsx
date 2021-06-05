import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path d='M8.45,7V17' />
    <path d='M15.56,17V7' />
    <line x1='15.56' y1='16.98' x2='12.71' y2='14.13' />
    <line x1='18.4' y1='14.13' x2='15.56' y2='16.98' />
    <line x1='8.45' y1='7.02' x2='11.29' y2='9.87' />
    <line x1='5.6' y1='9.87' x2='8.45' y2='7.02' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M8.45,7V17' />
    <path d='M15.56,17V7' />
    <line x1='15.56' y1='16.98' x2='12.71' y2='14.13' />
    <line x1='18.4' y1='14.13' x2='15.56' y2='16.98' />
    <line x1='8.45' y1='7.02' x2='11.29' y2='9.87' />
    <line x1='5.6' y1='9.87' x2='8.45' y2='7.02' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path strokeOpacity='.2' d='M8.45,7V17' />
    <path strokeOpacity='.2' d='M15.56,17V7' />
    <line x1='15.56' y1='16.98' x2='12.71' y2='14.13' />
    <line x1='18.4' y1='14.13' x2='15.56' y2='16.98' />
    <line x1='8.45' y1='7.02' x2='11.29' y2='9.87' />
    <line x1='5.6' y1='9.87' x2='8.45' y2='7.02' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path stroke={secondaryColor} d='M8.45,7V17' />
    <path stroke={secondaryColor} d='M15.56,17V7' />
    <line x1='15.56' y1='16.98' x2='12.71' y2='14.13' />
    <line x1='18.4' y1='14.13' x2='15.56' y2='16.98' />
    <line x1='8.45' y1='7.02' x2='11.29' y2='9.87' />
    <line x1='5.6' y1='9.87' x2='8.45' y2='7.02' />
  </Fragment>
)

const ArrowsSort = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsSort
