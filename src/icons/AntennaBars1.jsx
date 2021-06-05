import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='13.5' x2='6' y2='10.5' />
    <line x1='10' y1='13.5' x2='10' y2='13.51' />
    <line x1='14' y1='13.5' x2='14' y2='13.51' />
    <line x1='18' y1='13.5' x2='18' y2='13.51' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='13.5' x2='6' y2='10.5' />
    <line x1='10' y1='13.5' x2='10' y2='13.51' />
    <line x1='14' y1='13.5' x2='14' y2='13.51' />
    <line x1='18' y1='13.5' x2='18' y2='13.51' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6' y1='13.5' x2='6' y2='10.5' />
    <line strokeOpacity='.2' x1='10' y1='13.5' x2='10' y2='13.51' />
    <line strokeOpacity='.2' x1='14' y1='13.5' x2='14' y2='13.51' />
    <line strokeOpacity='.2' x1='18' y1='13.5' x2='18' y2='13.51' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6' y1='13.5' x2='6' y2='10.5' />
    <line stroke={secondaryColor} x1='10' y1='13.5' x2='10' y2='13.51' />
    <line stroke={secondaryColor} x1='14' y1='13.5' x2='14' y2='13.51' />
    <line stroke={secondaryColor} x1='18' y1='13.5' x2='18' y2='13.51' />
  </Fragment>
)

const AntennaBar1 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AntennaBar1
