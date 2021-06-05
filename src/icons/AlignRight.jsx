import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6.09' y1='7' x2='18' y2='7' />
    <line x1='10.55' y1='12' x2='18' y2='12' />
    <line x1='7.58' y1='17' x2='18' y2='17' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6.09' y1='7' x2='18' y2='7' />
    <line x1='10.55' y1='12' x2='18' y2='12' />
    <line x1='7.58' y1='17' x2='18' y2='17' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6.09' y1='7' x2='18' y2='7' />
    <line strokeOpacity='.2' x1='10.55' y1='12' x2='18' y2='12' />
    <line x1='7.58' y1='17' x2='18' y2='17' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6.09' y1='7' x2='18' y2='7' />
    <line stroke={secondaryColor} x1='10.55' y1='12' x2='18' y2='12' />
    <line x1='7.58' y1='17' x2='18' y2='17' />
  </Fragment>
)

const AlignRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AlignRight
