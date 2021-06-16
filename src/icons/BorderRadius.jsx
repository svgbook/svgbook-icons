import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,12V9A3,3,0,0,1,9,6h3' />
    <line x1='15' y1='6' x2='15' y2='6' />
    <line x1='18' y1='6' x2='18' y2='6' />
    <line x1='18' y1='9' x2='18' y2='9' />
    <line x1='18' y1='12' x2='18' y2='12' />
    <line x1='6' y1='15' x2='6' y2='15' />
    <line x1='18' y1='15' x2='18' y2='15' />
    <line x1='6' y1='18' x2='6' y2='18' />
    <line x1='9' y1='18' x2='9' y2='18' />
    <line x1='12' y1='18' x2='12' y2='18' />
    <line x1='15' y1='18' x2='15' y2='18' />
    <line x1='18' y1='18' x2='18' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,12V9A3,3,0,0,1,9,6h3' />
    <line x1='15' y1='6' x2='15' y2='6' />
    <line x1='18' y1='6' x2='18' y2='6' />
    <line x1='18' y1='9' x2='18' y2='9' />
    <line x1='18' y1='12' x2='18' y2='12' />
    <line x1='6' y1='15' x2='6' y2='15' />
    <line x1='18' y1='15' x2='18' y2='15' />
    <line x1='6' y1='18' x2='6' y2='18' />
    <line x1='9' y1='18' x2='9' y2='18' />
    <line x1='12' y1='18' x2='12' y2='18' />
    <line x1='15' y1='18' x2='15' y2='18' />
    <line x1='18' y1='18' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,12V9A3,3,0,0,1,9,6h3' />
    <line strokeOpacity='.2' x1='15' y1='6' x2='15' y2='6' />
    <line strokeOpacity='.2' x1='18' y1='6' x2='18' y2='6' />
    <line strokeOpacity='.2' x1='18' y1='9' x2='18' y2='9' />
    <line strokeOpacity='.2' x1='18' y1='12' x2='18' y2='12' />
    <line strokeOpacity='.2' x1='6' y1='15' x2='6' y2='15' />
    <line strokeOpacity='.2' x1='18' y1='15' x2='18' y2='15' />
    <line strokeOpacity='.2' x1='6' y1='18' x2='6' y2='18' />
    <line strokeOpacity='.2' x1='9' y1='18' x2='9' y2='18' />
    <line strokeOpacity='.2' x1='12' y1='18' x2='12' y2='18' />
    <line strokeOpacity='.2' x1='15' y1='18' x2='15' y2='18' />
    <line strokeOpacity='.2' x1='18' y1='18' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M6,12V9A3,3,0,0,1,9,6h3' />
    <line x1='15' y1='6' x2='15' y2='6' />
    <line x1='18' y1='6' x2='18' y2='6' />
    <line x1='18' y1='9' x2='18' y2='9' />
    <line x1='18' y1='12' x2='18' y2='12' />
    <line x1='6' y1='15' x2='6' y2='15' />
    <line x1='18' y1='15' x2='18' y2='15' />
    <line x1='6' y1='18' x2='6' y2='18' />
    <line x1='9' y1='18' x2='9' y2='18' />
    <line x1='12' y1='18' x2='12' y2='18' />
    <line x1='15' y1='18' x2='15' y2='18' />
    <line x1='18' y1='18' x2='18' y2='18' />
  </Fragment>
)

const BorderRadius = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BorderRadius
