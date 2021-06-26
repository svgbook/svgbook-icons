import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M14,6v8H6' />
    <path fill='none' d='M18,10v8H10' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M14,6v8H6' />
    <path fill='none' d='M18,10v8H10' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M14,6v8H6' />
    <path fill='none' d='M18,10v8H10' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M14,6v8H6' />
    <path fill='none' d='M18,10v8H10' />
  </Fragment>
)

const ChevronsDownRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChevronsDownRight
