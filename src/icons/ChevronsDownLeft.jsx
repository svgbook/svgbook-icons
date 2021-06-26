import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M10,6v8h8' />
    <path fill='none' d='M6,10v8h8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M10,6v8h8' />
    <path fill='none' d='M6,10v8h8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M10,6v8h8' />
    <path fill='none' d='M6,10v8h8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M10,6v8h8' />
    <path fill='none' d='M6,10v8h8' />
  </Fragment>
)

const ChevronsDownLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChevronsDownLeft
