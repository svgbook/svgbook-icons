import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='10' y1='6' x2='14' y2='6' />
    <path
      fill='none'
      d='M16,17.46a.46.46,0,0,1-.37.54H8.33l-.12,0A.48.48,0,0,1,8,17.33L10.67,10h2.66L16,17.33A.5.5,0,0,1,16,17.46Z'
    />
    <line x1='13.33' y1='10' x2='13.33' y2='6' />
    <line x1='10.67' y1='10' x2='10.67' y2='6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='10' y1='6' x2='14' y2='6' />
    <path d='M16,17.46a.46.46,0,0,1-.37.54H8.33l-.12,0A.48.48,0,0,1,8,17.33L10.67,10h2.66L16,17.33A.5.5,0,0,1,16,17.46Z' />
    <line x1='13.33' y1='10' x2='13.33' y2='6' />
    <line x1='10.67' y1='10' x2='10.67' y2='6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='10' y1='6' x2='14' y2='6' />
    <path
      fillOpacity='.2'
      d='M16,17.46a.46.46,0,0,1-.37.54H8.33l-.12,0A.48.48,0,0,1,8,17.33L10.67,10h2.66L16,17.33A.5.5,0,0,1,16,17.46Z'
    />
    <line x1='13.33' y1='10' x2='13.33' y2='6' />
    <line x1='10.67' y1='10' x2='10.67' y2='6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='10' y1='6' x2='14' y2='6' />
    <path
      fill={secondaryColor}
      d='M16,17.46a.46.46,0,0,1-.37.54H8.33l-.12,0A.48.48,0,0,1,8,17.33L10.67,10h2.66L16,17.33A.5.5,0,0,1,16,17.46Z'
    />
    <line x1='13.33' y1='10' x2='13.33' y2='6' />
    <line x1='10.67' y1='10' x2='10.67' y2='6' />
  </Fragment>
)

const Flask = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Flask
