import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path d='M6,9.43H18M6,14.57H18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M6,9.43H18M6,14.57H18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path d='M6,9.43H18M6,14.57H18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path d='M6,9.43H18M6,14.57H18' />
  </Fragment>
)

const Equal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Equal
