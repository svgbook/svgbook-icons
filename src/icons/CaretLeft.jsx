import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M15,6,9,12l6,6V6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M15,6,9,12l6,6V6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M15,6,9,12l6,6V6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M15,6,9,12l6,6V6' />
  </Fragment>
)

const CaretLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CaretLeft
