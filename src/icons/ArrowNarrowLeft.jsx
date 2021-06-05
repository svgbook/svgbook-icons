import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='12' x2='18' y2='12' />
    <line x1='6' y1='12' x2='9.43' y2='15.43' />
    <line x1='6' y1='12' x2='9.43' y2='8.57' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='12' x2='18' y2='12' />
    <line x1='6' y1='12' x2='9.43' y2='15.43' />
    <line x1='6' y1='12' x2='9.43' y2='8.57' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='6' y1='12' x2='18' y2='12' />
    <line x1='6' y1='12' x2='9.43' y2='15.43' />
    <line x1='6' y1='12' x2='9.43' y2='8.57' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='6' y1='12' x2='18' y2='12' />
    <line x1='6' y1='12' x2='9.43' y2='15.43' />
    <line x1='6' y1='12' x2='9.43' y2='8.57' />
  </Fragment>
)

const ArrowNarrowLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowNarrowLeft
