import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,14V6h8' />
    <path fill='none' d='M10,18V10h8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,14V6h8' />
    <path fill='none' d='M10,18V10h8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,14V6h8' />
    <path fill='none' strokeOpacity='.2' d='M10,18V10h8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M6,14V6h8' />
    <path fill='none' stroke={secondaryColor} d='M10,18V10h8' />
  </Fragment>
)

const ChevronsUpLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChevronsUpLeft
