import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='16' x2='15.33' y2='16' />
    <line x1='6' y1='6' x2='6' y2='18' />
    <line x1='6' y1='12' x2='12' y2='12' />
    <line x1='6' y1='8' x2='18' y2='8' />
    <path fill='none' d='M10,10l2,2-2,2' />
    <path fill='none' d='M13.33,14l2,2-2,2' />
    <path fill='none' d='M16,6l2,2-2,2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='16' x2='15.33' y2='16' />
    <line x1='6' y1='12' x2='12' y2='12' />
    <line x1='6' y1='8' x2='18' y2='8' />
    <line x1='6' y1='6' x2='6' y2='18' />
    <path fill='none' d='M10,10l2,2-2,2' />
    <path fill='none' d='M13.33,14l2,2-2,2' />
    <path fill='none' d='M16,6l2,2-2,2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='6' y1='16' x2='15.33' y2='16' />
    <line strokeOpacity='.2' x1='6' y1='12' x2='12' y2='12' />
    <line strokeOpacity='.2' x1='6' y1='8' x2='18' y2='8' />
    <line x1='6' y1='6' x2='6' y2='18' />
    <path fill='none' d='M10,10l2,2-2,2' />
    <path fill='none' d='M13.33,14l2,2-2,2' />
    <path fill='none' d='M16,6l2,2-2,2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='6' y1='16' x2='15.33' y2='16' />
    <line stroke={secondaryColor} x1='6' y1='12' x2='12' y2='12' />
    <line stroke={secondaryColor} x1='6' y1='8' x2='18' y2='8' />
    <line x1='6' y1='6' x2='6' y2='18' />
    <path fill='none' d='M10,10l2,2-2,2' />
    <path fill='none' d='M13.33,14l2,2-2,2' />
    <path fill='none' d='M16,6l2,2-2,2' />
  </Fragment>
)

const ChartArrows = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartArrows
