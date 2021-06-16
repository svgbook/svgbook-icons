import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,18l6-6Z' />
    <path fill='none' d='M6,12l6-6' />
    <polygon fill='none' points='12 12 18 18 6 18 6 6 18 6 12 12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,18l6-6Z' />
    <path fill='none' d='M6,12l6-6' />
    <polygon fill='none' points='12 12 18 18 6 18 6 6 18 6 12 12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polygon fillOpacity='.2' points='12 12 18 18 6 18 6 6 18 6 12 12' />
    <path fill='none' d='M6,18l6-6Z' />
    <path fill='none' d='M6,12l6-6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polygon fill={secondaryColor} points='12 12 18 18 6 18 6 6 18 6 12 12' />
    <path fill='none' d='M6,18l6-6Z' />
    <path fill='none' d='M6,12l6-6' />
  </Fragment>
)

const Kotlin = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Kotlin
