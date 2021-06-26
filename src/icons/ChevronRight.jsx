import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='9 6 15 12 9 18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline fill='none' points='9 6 15 12 9 18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline fill='none' points='9 6 15 12 9 18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill='none' points='9 6 15 12 9 18' />
  </Fragment>
)

const ChevronRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChevronRight
