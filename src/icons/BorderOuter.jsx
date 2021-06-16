import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='12' y1='9' x2='12' y2='9.01' />
    <line x1='9' y1='12' x2='9' y2='12.01' />
    <line x1='12' y1='12' x2='12' y2='12.01' />
    <line x1='15' y1='12' x2='15' y2='12.01' />
    <line x1='12' y1='15' x2='12' y2='15.01' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='12' y1='9' x2='12' y2='9.01' />
    <line x1='9' y1='12' x2='9' y2='12.01' />
    <line x1='12' y1='12' x2='12' y2='12.01' />
    <line x1='15' y1='12' x2='15' y2='12.01' />
    <line x1='12' y1='15' x2='12' y2='15.01' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='12' y1='9' x2='12' y2='9.01' />
    <line x1='9' y1='12' x2='9' y2='12.01' />
    <line x1='12' y1='12' x2='12' y2='12.01' />
    <line x1='15' y1='12' x2='15' y2='12.01' />
    <line x1='12' y1='15' x2='12' y2='15.01' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='12' y1='9' x2='12' y2='9.01' />
    <line x1='9' y1='12' x2='9' y2='12.01' />
    <line x1='12' y1='12' x2='12' y2='12.01' />
    <line x1='15' y1='12' x2='15' y2='12.01' />
    <line x1='12' y1='15' x2='12' y2='15.01' />
  </Fragment>
)

const BorderOuter = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BorderOuter
