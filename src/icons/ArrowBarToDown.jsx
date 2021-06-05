import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='18' x2='18' y2='18' />
    <line x1='12' y1='13.5' x2='12' y2='6' />
    <line x1='12' y1='13.5' x2='15' y2='10.5' />
    <line x1='12' y1='13.5' x2='9' y2='10.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='18' x2='18' y2='18' />
    <line x1='12' y1='13.5' x2='12' y2='6' />
    <line x1='12' y1='13.5' x2='15' y2='10.5' />
    <line x1='12' y1='13.5' x2='9' y2='10.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='6' y1='18' x2='18' y2='18' />
    <line x1='12' y1='13.5' x2='12' y2='6' />
    <line x1='12' y1='13.5' x2='15' y2='10.5' />
    <line x1='12' y1='13.5' x2='9' y2='10.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='6' y1='18' x2='18' y2='18' />
    <line x1='12' y1='13.5' x2='12' y2='6' />
    <line x1='12' y1='13.5' x2='15' y2='10.5' />
    <line x1='12' y1='13.5' x2='9' y2='10.5' />
  </Fragment>
)

const ArrowBarToDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBarToDown
