import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='5' y1='12' x2='19' y2='12' />
    <line x1='13' y1='18' x2='19' y2='12' />
    <line x1='13' y1='6' x2='19' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='5' y1='12' x2='19' y2='12' />
    <line x1='13' y1='18' x2='19' y2='12' />
    <line x1='13' y1='6' x2='19' y2='12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='5' y1='12' x2='19' y2='12' />
    <line x1='13' y1='18' x2='19' y2='12' />
    <line x1='13' y1='6' x2='19' y2='12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='5' y1='12' x2='19' y2='12' />
    <line x1='13' y1='18' x2='19' y2='12' />
    <line x1='13' y1='6' x2='19' y2='12' />
  </Fragment>
)

const ArrowRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowRight
