import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.21,10.41,6,13.59l3.18,3.19M6,13.59h8.76a3.19,3.19,0,1,0,0-6.37H14'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M9.21,10.41,6,13.59l3.18,3.19M6,13.59h8.76a3.19,3.19,0,1,0,0-6.37H14'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.21,10.41,6,13.59l3.18,3.19M6,13.59h8.76a3.19,3.19,0,1,0,0-6.37H14'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M9.21,10.41,6,13.59l3.18,3.19M6,13.59h8.76a3.19,3.19,0,1,0,0-6.37H14'
    />
  </Fragment>
)

const ArrowBack = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBack
