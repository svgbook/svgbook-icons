import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,9l6,6,6-6H6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M6,9l6,6,6-6H6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M6,9l6,6,6-6H6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M6,9l6,6,6-6H6' />
  </Fragment>
)

const CaretDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CaretDown
