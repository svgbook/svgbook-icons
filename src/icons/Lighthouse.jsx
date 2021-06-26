import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,6l1.33,2,1.34,10H9.33L10.67,8Z' />
    <line x1='9.33' y1='10' x2='14.67' y2='10' />
    <path fill='none' d='M6,11.33,7.33,10,6,8.67' />
    <path fill='none' d='M18,11.33,16.67,10,18,8.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,6l1.33,2,1.34,10H9.33L10.67,8Z' />
    <line x1='9.33' y1='10' x2='14.67' y2='10' />
    <path fill='none' d='M6,11.33,7.33,10,6,8.67' />
    <path fill='none' d='M18,11.33,16.67,10,18,8.67' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M12,6l1.33,2,1.34,10H9.33L10.67,8Z' />
    <line x1='9.33' y1='10' x2='14.67' y2='10' />
    <path fill='none' d='M6,11.33,7.33,10,6,8.67' />
    <path fill='none' d='M18,11.33,16.67,10,18,8.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M12,6l1.33,2,1.34,10H9.33L10.67,8Z' />
    <line x1='9.33' y1='10' x2='14.67' y2='10' />
    <path fill='none' d='M6,11.33,7.33,10,6,8.67' />
    <path fill='none' d='M18,11.33,16.67,10,18,8.67' />
  </Fragment>
)

const Lighthouse = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Lighthouse
