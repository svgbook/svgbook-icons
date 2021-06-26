import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='9.33' y1='18' x2='14.67' y2='18' />
    <line x1='12' y1='14' x2='12' y2='18' />
    <path
      fill='none'
      d='M8.67,6h6.66L16,10.67a3,3,0,0,1-.7,2m-1.59,1.08A5,5,0,0,1,12,14c-2.21,0-4-1.33-4-3.33l.33-2.33'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='9.33' y1='18' x2='14.67' y2='18' />
    <line x1='12' y1='14' x2='12' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
    <path d='M8.67,6h6.66L16,10.67a3,3,0,0,1-.7,2Z' />
    <path d='M13.71,13.71A5,5,0,0,1,12,14c-2.21,0-4-1.33-4-3.33l.33-2.33Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='9.33' y1='18' x2='14.67' y2='18' />
    <line x1='12' y1='14' x2='12' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
    <path fillOpacity='.2' d='M8.67,6h6.66L16,10.67a3,3,0,0,1-.7,2Z' />
    <path
      fillOpacity='.2'
      d='M13.71,13.71A5,5,0,0,1,12,14c-2.21,0-4-1.33-4-3.33l.33-2.33Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='9.33' y1='18' x2='14.67' y2='18' />
    <line x1='12' y1='14' x2='12' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
    <path fill={secondaryColor} d='M8.67,6h6.66L16,10.67a3,3,0,0,1-.7,2Z' />
    <path
      fill={secondaryColor}
      d='M13.71,13.71A5,5,0,0,1,12,14c-2.21,0-4-1.33-4-3.33l.33-2.33Z'
    />
  </Fragment>
)

const GlassOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GlassOff
