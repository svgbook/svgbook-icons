import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9,9a3,3,0,0,1,6,0,5.5,5.5,0,0,1-1.22,2.79L9,18h6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M9,9a3,3,0,0,1,6,0,5.5,5.5,0,0,1-1.22,2.79L9,18h6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M9,9a3,3,0,0,1,6,0,5.5,5.5,0,0,1-1.22,2.79L9,18h6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M9,9a3,3,0,0,1,6,0,5.5,5.5,0,0,1-1.22,2.79L9,18h6' />
  </Fragment>
)

const Two = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Two
