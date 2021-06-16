import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <line x1='7.77' y1='7.77' x2='16.23' y2='16.23' />
    <line x1='7.77' y1='16.23' x2='16.23' y2='7.77' />
    <path fill='none' d='M12,6a6,6,0,0,0,6,6' />
    <path fill='none' d='M6,12a6,6,0,0,1,6,6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <line x1='7.77' y1='7.77' x2='16.23' y2='16.23' />
    <line x1='7.77' y1='16.23' x2='16.23' y2='7.77' />
    <path fill='none' d='M12,6a6,6,0,0,0,6,6' />
    <path fill='none' d='M6,12a6,6,0,0,1,6,6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <line x1='7.77' y1='7.77' x2='16.23' y2='16.23' />
    <line x1='7.77' y1='16.23' x2='16.23' y2='7.77' />
    <path fill='none' d='M12,6a6,6,0,0,0,6,6' />
    <path fill='none' d='M6,12a6,6,0,0,1,6,6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <line x1='7.77' y1='7.77' x2='16.23' y2='16.23' />
    <line x1='7.77' y1='16.23' x2='16.23' y2='7.77' />
    <path fill='none' d='M12,6a6,6,0,0,0,6,6' />
    <path fill='none' d='M6,12a6,6,0,0,1,6,6' />
  </Fragment>
)

const Basketball = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Basketball
