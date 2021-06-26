import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M16.62,18H10.15a2.77,2.77,0,0,1-2.77-2.77V6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M16.62,18H10.15a2.77,2.77,0,0,1-2.77-2.77V6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M16.62,18H10.15a2.77,2.77,0,0,1-2.77-2.77V6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M16.62,18H10.15a2.77,2.77,0,0,1-2.77-2.77V6' />
  </Fragment>
)

const Leu = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Leu
