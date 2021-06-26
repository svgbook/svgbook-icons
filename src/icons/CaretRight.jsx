import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9,18l6-6L9,6V18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M9,18l6-6L9,6V18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M9,18l6-6L9,6V18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M9,18l6-6L9,6V18' />
  </Fragment>
)

const CaretRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CaretRight
