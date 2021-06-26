import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,15,12,9,6,15H18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M18,15,12,9,6,15H18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M18,15,12,9,6,15H18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M18,15,12,9,6,15H18' />
  </Fragment>
)

const CaretUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CaretUp
