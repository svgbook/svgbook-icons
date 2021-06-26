import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='8.25' x2='18' y2='8.25' />
    <line x1='6' y1='15.75' x2='18' y2='15.75' />
    <line x1='8.25' y1='6' x2='8.25' y2='18' />
    <line x1='15.75' y1='6' x2='15.75' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='8.25' x2='18' y2='8.25' />
    <line x1='6' y1='15.75' x2='18' y2='15.75' />
    <line x1='8.25' y1='6' x2='8.25' y2='18' />
    <line x1='15.75' y1='6' x2='15.75' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6' y1='8.25' x2='18' y2='8.25' />
    <line strokeOpacity='.2' x1='6' y1='15.75' x2='18' y2='15.75' />
    <line x1='8.25' y1='6' x2='8.25' y2='18' />
    <line strokeOpacity='.2' x1='15.75' y1='6' x2='15.75' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6' y1='8.25' x2='18' y2='8.25' />
    <line stroke={secondaryColor} x1='6' y1='15.75' x2='18' y2='15.75' />
    <line x1='8.25' y1='6' x2='8.25' y2='18' />
    <line stroke={secondaryColor} x1='15.75' y1='6' x2='15.75' y2='18' />
  </Fragment>
)

const Frame = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Frame
