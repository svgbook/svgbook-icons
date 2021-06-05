import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path d='M19,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <path d='M19,9.67v4.66' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M19,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <path d='M19,9.67v4.66' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path strokeOpacity='.2' d='M19,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <path d='M19,9.67v4.66' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path stroke={secondaryColor} d='M19,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <path d='M19,9.67v4.66' />
  </Fragment>
)

const ArrowLeftBar = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowLeftBar
