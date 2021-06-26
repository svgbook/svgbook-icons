import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9,15a3,3,0,1,0,3-3A3,3,0,1,0,9,9' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M9,15a3,3,0,1,0,3-3A3,3,0,1,0,9,9' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M9,15a3,3,0,1,0,3-3A3,3,0,1,0,9,9' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M9,15a3,3,0,1,0,3-3A3,3,0,1,0,9,9' />
  </Fragment>
)

const Three = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Three
