import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='18' x2='12' y2='10.5' />
    <line x1='12' y1='18' x2='15' y2='15' />
    <line x1='12' y1='18' x2='9' y2='15' />
    <line x1='6' y1='6' x2='18' y2='6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='18' x2='12' y2='10.5' />
    <line x1='12' y1='18' x2='15' y2='15' />
    <line x1='12' y1='18' x2='9' y2='15' />
    <line x1='6' y1='6' x2='18' y2='6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='12' y1='18' x2='12' y2='10.5' />
    <line x1='12' y1='18' x2='15' y2='15' />
    <line x1='12' y1='18' x2='9' y2='15' />
    <line strokeOpacity='.2' x1='6' y1='6' x2='18' y2='6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='12' y1='18' x2='12' y2='10.5' />
    <line x1='12' y1='18' x2='15' y2='15' />
    <line x1='12' y1='18' x2='9' y2='15' />
    <line stroke={secondaryColor} x1='6' y1='6' x2='18' y2='6' />
  </Fragment>
)

const ArrowBarDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBarDown
