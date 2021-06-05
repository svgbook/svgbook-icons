import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path d='M16.67,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <path fill='none' d='M19,9.67,16.67,12,19,14.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M16.67,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <path fill='none' d='M19,9.67,16.67,12,19,14.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path strokeOpacity='.2' d='M16.67,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <path fill='none' d='M19,9.67,16.67,12,19,14.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path stroke={secondaryColor} d='M16.67,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <path fill='none' d='M19,9.67,16.67,12,19,14.33' />
  </Fragment>
)

const ArrowLeftTail = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowLeftTail
