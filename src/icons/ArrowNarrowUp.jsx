import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='6.01' x2='12' y2='17.99' />
    <line x1='15.42' y1='9.43' x2='12' y2='6.01' />
    <line x1='8.58' y1='9.43' x2='12' y2='6.01' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='6.01' x2='12' y2='17.99' />
    <line x1='15.42' y1='9.43' x2='12' y2='6.01' />
    <line x1='8.58' y1='9.43' x2='12' y2='6.01' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='12' y1='6.01' x2='12' y2='17.99' />
    <line x1='15.42' y1='9.43' x2='12' y2='6.01' />
    <line x1='8.58' y1='9.43' x2='12' y2='6.01' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='12' y1='6.01' x2='12' y2='17.99' />
    <line x1='15.42' y1='9.43' x2='12' y2='6.01' />
    <line x1='8.58' y1='9.43' x2='12' y2='6.01' />
  </Fragment>
)

const ArrowNarrowUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowNarrowUp
