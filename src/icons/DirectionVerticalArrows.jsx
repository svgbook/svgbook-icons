import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.4,9.6,12,6l3.6,3.6' />
    <path fill='none' d='M8.4,14.4,12,18l3.6-3.6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M8.4,9.6,12,6l3.6,3.6' />
    <path fill='none' d='M8.4,14.4,12,18l3.6-3.6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.4,9.6,12,6l3.6,3.6' />
    <path fill='none' d='M8.4,14.4,12,18l3.6-3.6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M8.4,9.6,12,6l3.6,3.6' />
    <path fill='none' d='M8.4,14.4,12,18l3.6-3.6' />
  </Fragment>
)

const DirectionVerticalArrows = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DirectionVerticalArrows
