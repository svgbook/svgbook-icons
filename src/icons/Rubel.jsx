import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9,18V6h5.14a2.57,2.57,0,0,1,0,5.14H7.29' />
    <path fill='none' d='M14.14,14.57H7.29' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M9,18V6h5.14a2.57,2.57,0,0,1,0,5.14H7.29' />
    <path fill='none' d='M14.14,14.57H7.29' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M9,18V6h5.14a2.57,2.57,0,0,1,0,5.14H7.29' />
    <path fill='none' strokeOpacity='.2' d='M14.14,14.57H7.29' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M9,18V6h5.14a2.57,2.57,0,0,1,0,5.14H7.29' />
    <path fill='none' stroke={secondaryColor} d='M14.14,14.57H7.29' />
  </Fragment>
)

const Rubel = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Rubel
