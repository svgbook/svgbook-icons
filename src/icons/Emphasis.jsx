import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M15.2,6H8.8v8h6.4m-.8-4H8.8' />
    <line x1='7.2' y1='17.99' x2='7.2' y2='18' />
    <line x1='10.4' y1='17.99' x2='10.4' y2='18' />
    <line x1='13.6' y1='17.99' x2='13.6' y2='18' />
    <line x1='16.8' y1='17.99' x2='16.8' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M15.2,6H8.8v8h6.4m-.8-4H8.8' />
    <line x1='7.2' y1='17.99' x2='7.2' y2='18' />
    <line x1='10.4' y1='17.99' x2='10.4' y2='18' />
    <line x1='13.6' y1='17.99' x2='13.6' y2='18' />
    <line x1='16.8' y1='17.99' x2='16.8' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M15.2,6H8.8v8h6.4m-.8-4H8.8' />
    <line strokeOpacity='.2' x1='7.2' y1='17.99' x2='7.2' y2='18' />
    <line strokeOpacity='.2' x1='10.4' y1='17.99' x2='10.4' y2='18' />
    <line strokeOpacity='.2' x1='13.6' y1='17.99' x2='13.6' y2='18' />
    <line strokeOpacity='.2' x1='16.8' y1='17.99' x2='16.8' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M15.2,6H8.8v8h6.4m-.8-4H8.8' />
    <line stroke={secondaryColor} x1='7.2' y1='17.99' x2='7.2' y2='18' />
    <line stroke={secondaryColor} x1='10.4' y1='17.99' x2='10.4' y2='18' />
    <line stroke={secondaryColor} x1='13.6' y1='17.99' x2='13.6' y2='18' />
    <line stroke={secondaryColor} x1='16.8' y1='17.99' x2='16.8' y2='18' />
  </Fragment>
)

const Emphasis = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Emphasis
