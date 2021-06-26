import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.28,17.53a5.08,5.08,0,0,1-4.28,0A5.15,5.15,0,0,0,7.72,18a2.54,2.54,0,0,0,1.71-2.14V9.4a3.43,3.43,0,0,1,6.38-1.71'
    />
    <line x1='13.82' y1='12' x2='7.83' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M16.28,17.53a5.08,5.08,0,0,1-4.28,0A5.15,5.15,0,0,0,7.72,18a2.54,2.54,0,0,0,1.71-2.14V9.4a3.43,3.43,0,0,1,6.38-1.71'
    />
    <line x1='13.82' y1='12' x2='7.83' y2='12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.28,17.53a5.08,5.08,0,0,1-4.28,0A5.15,5.15,0,0,0,7.72,18a2.54,2.54,0,0,0,1.71-2.14V9.4a3.43,3.43,0,0,1,6.38-1.71'
    />
    <line strokeOpacity='.2' x1='13.82' y1='12' x2='7.83' y2='12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M16.28,17.53a5.08,5.08,0,0,1-4.28,0A5.15,5.15,0,0,0,7.72,18a2.54,2.54,0,0,0,1.71-2.14V9.4a3.43,3.43,0,0,1,6.38-1.71'
    />
    <line stroke={secondaryColor} x1='13.82' y1='12' x2='7.83' y2='12' />
  </Fragment>
)

const Pound = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Pound
