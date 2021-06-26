import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6.07' y1='6.07' x2='17.93' y2='17.93' />
    <path
      fill='none'
      d='M10,7.39H16a2,2,0,0,1,2,2v5.28a2.24,2.24,0,0,1-.08.57'
    />
    <path
      fill='none'
      d='M16.53,16.53a2.25,2.25,0,0,1-.58.08H8.05a2,2,0,0,1-2-2V9.36a2,2,0,0,1,1.4-1.89'
    />
    <line x1='6.07' y1='11.34' x2='11.34' y2='11.34' />
    <line x1='13.98' y1='11.34' x2='17.93' y2='11.34' />
    <line x1='8.71' y1='13.98' x2='8.71' y2='13.98' />
    <line x1='11.34' y1='13.98' x2='12.66' y2='13.98' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6.07' y1='6.07' x2='17.93' y2='17.93' />
    <path d='M17.93,9.36v2H14L10,7.39H16A2,2,0,0,1,17.93,9.36Z' />
    <path fill='none' d='M17.93,11.34v3.3a2.24,2.24,0,0,1-.08.57L14,11.34Z' />
    <path d='M11.34,11.34H6.07v-2a2,2,0,0,1,1.4-1.89Z' />
    <path
      fill='none'
      d='M16.53,16.53a2.25,2.25,0,0,1-.58.08H8.05a2,2,0,0,1-2-2v-3.3h5.27Z'
    />
    <line x1='8.71' y1='13.98' x2='8.71' y2='13.98' />
    <line x1='11.34' y1='13.98' x2='12.66' y2='13.98' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6.07' y1='6.07' x2='17.93' y2='17.93' />
    <path
      fillOpacity='.2'
      d='M17.93,9.36v2H14L10,7.39H16A2,2,0,0,1,17.93,9.36Z'
    />
    <path
      fillOpacity='.2'
      d='M17.93,11.34v3.3a2.24,2.24,0,0,1-.08.57L14,11.34Z'
    />
    <path fillOpacity='.2' d='M11.34,11.34H6.07v-2a2,2,0,0,1,1.4-1.89Z' />
    <path
      fillOpacity='.2'
      d='M16.53,16.53a2.25,2.25,0,0,1-.58.08H8.05a2,2,0,0,1-2-2v-3.3h5.27Z'
    />
    <line x1='8.71' y1='13.98' x2='8.71' y2='13.98' />
    <line x1='11.34' y1='13.98' x2='12.66' y2='13.98' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6.07' y1='6.07' x2='17.93' y2='17.93' />
    <path
      fill={secondaryColor}
      d='M17.93,9.36v2H14L10,7.39H16A2,2,0,0,1,17.93,9.36Z'
    />
    <path
      fill={secondaryColor}
      d='M17.93,11.34v3.3a2.24,2.24,0,0,1-.08.57L14,11.34Z'
    />
    <path fill={secondaryColor} d='M11.34,11.34H6.07v-2a2,2,0,0,1,1.4-1.89Z' />
    <path
      fill={secondaryColor}
      d='M16.53,16.53a2.25,2.25,0,0,1-.58.08H8.05a2,2,0,0,1-2-2v-3.3h5.27Z'
    />
    <line x1='8.71' y1='13.98' x2='8.71' y2='13.98' />
    <line x1='11.34' y1='13.98' x2='12.66' y2='13.98' />
  </Fragment>
)

const CreditCardOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CreditCardOff
