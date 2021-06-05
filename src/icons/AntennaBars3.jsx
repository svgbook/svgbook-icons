import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='16.5' x2='6' y2='13.5' />
    <line x1='10' y1='16.5' x2='10' y2='10.5' />
    <line x1='14' y1='16.5' x2='14' y2='7.5' />
    <line x1='18' y1='16.5' x2='18' y2='16.51' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='16.5' x2='6' y2='13.5' />
    <line x1='10' y1='16.5' x2='10' y2='10.5' />
    <line x1='14' y1='16.5' x2='14' y2='7.5' />
    <line x1='18' y1='16.5' x2='18' y2='16.51' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6' y1='16.5' x2='6' y2='13.5' />
    <line x1='10' y1='16.5' x2='10' y2='10.5' />
    <line x1='14' y1='16.5' x2='14' y2='7.5' />
    <line strokeOpacity='.2' x1='18' y1='16.5' x2='18' y2='16.51' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6' y1='16.5' x2='6' y2='13.5' />
    <line x1='10' y1='16.5' x2='10' y2='10.5' />
    <line x1='14' y1='16.5' x2='14' y2='7.5' />
    <line stroke={secondaryColor} x1='18' y1='16.5' x2='18' y2='16.51' />
  </Fragment>
)

const AntennaBar3 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AntennaBar3
