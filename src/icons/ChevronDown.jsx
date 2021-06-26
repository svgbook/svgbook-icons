import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='6 9 12 15 18 9' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline fill='none' points='6 9 12 15 18 9' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline fill='none' points='6 9 12 15 18 9' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill='none' points='6 9 12 15 18 9' />
  </Fragment>
)

const ChevronDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChevronDown
