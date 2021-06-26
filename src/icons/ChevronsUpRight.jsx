import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M10,6h8v8' />
    <path fill='none' d='M6,10h8v8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M10,6h8v8' />
    <path fill='none' d='M6,10h8v8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M10,6h8v8' />
    <path fill='none' strokeOpacity='.2' d='M6,10h8v8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M10,6h8v8' />
    <path fill='none' stroke={secondaryColor} d='M6,10h8v8' />
  </Fragment>
)

const ChevronsUpRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChevronsUpRight
