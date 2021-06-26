import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.6,8.4,6,12l3.6,3.6' />
    <path fill='none' d='M14.4,8.4,18,12l-3.6,3.6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M9.6,8.4,6,12l3.6,3.6' />
    <path fill='none' d='M14.4,8.4,18,12l-3.6,3.6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.6,8.4,6,12l3.6,3.6' />
    <path fill='none' d='M14.4,8.4,18,12l-3.6,3.6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M9.6,8.4,6,12l3.6,3.6' />
    <path fill='none' d='M14.4,8.4,18,12l-3.6,3.6' />
  </Fragment>
)

const DirectionHorizontalArrows = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DirectionHorizontalArrows
