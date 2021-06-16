import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.57,6H6V17.71H8.57' />
    <path fill='none' d='M15.43,6H18V17.71H15.43' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M8.57,6H6V17.71H8.57' />
    <path fill='none' d='M15.43,6H18V17.71H15.43' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.57,6H6V17.71H8.57' />
    <path fill='none' d='M15.43,6H18V17.71H15.43' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M8.57,6H6V17.71H8.57' />
    <path fill='none' d='M15.43,6H18V17.71H15.43' />
  </Fragment>
)

const Brackets = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Brackets
