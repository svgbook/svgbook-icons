import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='12' x2='18' y2='12' />
    <line x1='14.57' y1='15.43' x2='18' y2='12' />
    <line x1='14.57' y1='8.57' x2='18' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='12' x2='18' y2='12' />
    <line x1='14.57' y1='15.43' x2='18' y2='12' />
    <line x1='14.57' y1='8.57' x2='18' y2='12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='6' y1='12' x2='18' y2='12' />
    <line x1='14.57' y1='15.43' x2='18' y2='12' />
    <line x1='14.57' y1='8.57' x2='18' y2='12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='6' y1='12' x2='18' y2='12' />
    <line x1='14.57' y1='15.43' x2='18' y2='12' />
    <line x1='14.57' y1='8.57' x2='18' y2='12' />
  </Fragment>
)

const ArrowNarrowRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowNarrowRight
