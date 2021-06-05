import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='13.5' y1='12' x2='6' y2='12' />
    <line x1='13.5' y1='12' x2='10.5' y2='15' />
    <line x1='13.5' y1='12' x2='10.5' y2='9' />
    <line x1='18' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='13.5' y1='12' x2='6' y2='12' />
    <line x1='13.5' y1='12' x2='10.5' y2='15' />
    <line x1='13.5' y1='12' x2='10.5' y2='9' />
    <line x1='18' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='13.5' y1='12' x2='6' y2='12' />
    <line x1='13.5' y1='12' x2='10.5' y2='15' />
    <line x1='13.5' y1='12' x2='10.5' y2='9' />
    <line strokeOpacity='.2' x1='18' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='13.5' y1='12' x2='6' y2='12' />
    <line x1='13.5' y1='12' x2='10.5' y2='15' />
    <line x1='13.5' y1='12' x2='10.5' y2='9' />
    <line stroke={secondaryColor} x1='18' y1='6' x2='18' y2='18' />
  </Fragment>
)

const ArrowBarToRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBarToRight
