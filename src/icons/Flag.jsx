import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='7.18' y1='18' x2='7.18' y2='13.18' />
    <path
      fill='none'
      d='M16.82,7v6.2a3.45,3.45,0,0,1-4.82,0,3.45,3.45,0,0,0-4.82,0V7A3.45,3.45,0,0,1,12,7,3.43,3.43,0,0,0,16.82,7Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='7.18' y1='18' x2='7.18' y2='13.18' />
    <path d='M16.82,7v6.2a3.45,3.45,0,0,1-4.82,0,3.45,3.45,0,0,0-4.82,0V7A3.45,3.45,0,0,1,12,7,3.43,3.43,0,0,0,16.82,7Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='7.18' y1='18' x2='7.18' y2='13.18' />
    <path
      fillOpacity='.2'
      d='M16.82,7v6.2a3.45,3.45,0,0,1-4.82,0,3.45,3.45,0,0,0-4.82,0V7A3.45,3.45,0,0,1,12,7,3.43,3.43,0,0,0,16.82,7Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='7.18' y1='18' x2='7.18' y2='13.18' />
    <path
      fill={secondaryColor}
      d='M16.82,7v6.2a3.45,3.45,0,0,1-4.82,0,3.45,3.45,0,0,0-4.82,0V7A3.45,3.45,0,0,1,12,7,3.43,3.43,0,0,0,16.82,7Z'
    />
  </Fragment>
)

const Flag = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Flag
