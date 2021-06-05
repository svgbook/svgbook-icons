import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='11.99' y1='6' x2='11.99' y2='18.03' />
    <line x1='17.14' y1='11.16' x2='11.99' y2='6' />
    <line x1='6.83' y1='11.16' x2='11.99' y2='6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='11.99' y1='6' x2='11.99' y2='18.03' />
    <line x1='17.14' y1='11.16' x2='11.99' y2='6' />
    <line x1='6.83' y1='11.16' x2='11.99' y2='6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='11.99' y1='6' x2='11.99' y2='18.03' />
    <line x1='17.14' y1='11.16' x2='11.99' y2='6' />
    <line x1='6.83' y1='11.16' x2='11.99' y2='6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='11.99' y1='6' x2='11.99' y2='18.03' />
    <line x1='17.14' y1='11.16' x2='11.99' y2='6' />
    <line x1='6.83' y1='11.16' x2='11.99' y2='6' />
  </Fragment>
)

const ArrowUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowUp
