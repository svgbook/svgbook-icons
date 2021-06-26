import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='9.33' y1='18' x2='14.67' y2='18' />
    <line x1='12' y1='14' x2='12' y2='18' />
    <path
      fill='none'
      d='M16,10.67c0,2-1.79,3.33-4,3.33s-4-1.33-4-3.33a3.33,3.33,0,0,1,4,0A3.36,3.36,0,0,0,16,10.67Z'
    />
    <path
      fill='none'
      d='M16,10.67a3.36,3.36,0,0,1-4,0,3.33,3.33,0,0,0-4,0L8.67,6h6.66Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='9.33' y1='18' x2='14.67' y2='18' />
    <line x1='12' y1='14' x2='12' y2='18' />
    <path d='M16,10.67c0,2-1.79,3.33-4,3.33s-4-1.33-4-3.33a3.33,3.33,0,0,1,4,0A3.36,3.36,0,0,0,16,10.67Z' />
    <path
      fill='none'
      d='M16,10.67a3.36,3.36,0,0,1-4,0,3.33,3.33,0,0,0-4,0L8.67,6h6.66Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='9.33' y1='18' x2='14.67' y2='18' />
    <line x1='12' y1='14' x2='12' y2='18' />
    <path
      fillOpacity='.2'
      d='M16,10.67c0,2-1.79,3.33-4,3.33s-4-1.33-4-3.33a3.33,3.33,0,0,1,4,0A3.36,3.36,0,0,0,16,10.67Z'
    />
    <path
      fill='none'
      d='M16,10.67a3.36,3.36,0,0,1-4,0,3.33,3.33,0,0,0-4,0L8.67,6h6.66Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='9.33' y1='18' x2='14.67' y2='18' />
    <line x1='12' y1='14' x2='12' y2='18' />
    <path
      fill={secondaryColor}
      d='M16,10.67c0,2-1.79,3.33-4,3.33s-4-1.33-4-3.33a3.33,3.33,0,0,1,4,0A3.36,3.36,0,0,0,16,10.67Z'
    />
    <path
      fill='none'
      d='M16,10.67a3.36,3.36,0,0,1-4,0,3.33,3.33,0,0,0-4,0L8.67,6h6.66Z'
    />
  </Fragment>
)

const GlassFull = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GlassFull
