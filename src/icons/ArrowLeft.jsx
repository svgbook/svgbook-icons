import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='5' y1='12' x2='19' y2='12' />
    <line x1='5' y1='12' x2='11' y2='18' />
    <line x1='5' y1='12' x2='11' y2='6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='5' y1='12' x2='19' y2='12' />
    <line x1='5' y1='12' x2='11' y2='18' />
    <line x1='5' y1='12' x2='11' y2='6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='5' y1='12' x2='19' y2='12' />
    <line x1='5' y1='12' x2='11' y2='18' />
    <line x1='5' y1='12' x2='11' y2='6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='5' y1='12' x2='19' y2='12' />
    <line x1='5' y1='12' x2='11' y2='18' />
    <line x1='5' y1='12' x2='11' y2='6' />
  </Fragment>
)

const ArrowLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowLeft
