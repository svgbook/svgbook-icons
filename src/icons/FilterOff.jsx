import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fill='none'
      d='M10,7.33h6.33a.67.67,0,0,1,.41.85.52.52,0,0,1-.07.15l-2.7,3m-.64,2v3.34l-2.66-2V12L7.33,8.33a.67.67,0,0,1,.12-.87'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path d='M13.33,13.33v3.34l-2.66-2V12L7.33,8.33a.67.67,0,0,1,.12-.87Z' />
    <path d='M10,7.33h6.33a.67.67,0,0,1,.41.85.52.52,0,0,1-.07.15l-2.7,3Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fillOpacity='.2'
      d='M13.33,13.33v3.34l-2.66-2V12L7.33,8.33a.67.67,0,0,1,.12-.87Z'
    />
    <path
      fillOpacity='.2'
      d='M10,7.33h6.33a.67.67,0,0,1,.41.85.52.52,0,0,1-.07.15l-2.7,3Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fill={secondaryColor}
      d='M13.33,13.33v3.34l-2.66-2V12L7.33,8.33a.67.67,0,0,1,.12-.87Z'
    />
    <path
      fill={secondaryColor}
      d='M10,7.33h6.33a.67.67,0,0,1,.41.85.52.52,0,0,1-.07.15l-2.7,3Z'
    />
  </Fragment>
)

const FilterOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FilterOff
