import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,10.67v4a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2v-4Z' />
    <path
      fill='none'
      d='M18,9.33v1.34H6V9.33a2,2,0,0,1,2-2h8A2,2,0,0,1,18,9.33Z'
    />
    <line x1='8.67' y1='14' x2='8.67' y2='14' />
    <line x1='11.33' y1='14' x2='12.67' y2='14' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M18,10.67v4a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2v-4Z' />
    <path d='M18,9.33v1.34H6V9.33a2,2,0,0,1,2-2h8A2,2,0,0,1,18,9.33Z' />
    <line x1='8.67' y1='14' x2='8.67' y2='14' />
    <line x1='11.33' y1='14' x2='12.67' y2='14' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M18,10.67v4a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2v-4Z' />
    <path
      fillOpacity='.2'
      d='M18,9.33v1.34H6V9.33a2,2,0,0,1,2-2h8A2,2,0,0,1,18,9.33Z'
    />
    <line x1='8.67' y1='14' x2='8.67' y2='14' />
    <line x1='11.33' y1='14' x2='12.67' y2='14' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M18,10.67v4a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2v-4Z'
    />
    <path
      fill={secondaryColor}
      d='M18,9.33v1.34H6V9.33a2,2,0,0,1,2-2h8A2,2,0,0,1,18,9.33Z'
    />
    <line x1='8.67' y1='14' x2='8.67' y2='14' />
    <line x1='11.33' y1='14' x2='12.67' y2='14' />
  </Fragment>
)

const CreditCard = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CreditCard
