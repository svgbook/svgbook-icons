import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path d='M15.89,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <circle fill='none' cx='17.44' cy='12' r='1.56' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M15.89,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <circle cx='17.44' cy='12' r='1.56' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path strokeOpacity='.2' d='M15.89,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <circle fillOpacity='.2' cx='17.44' cy='12' r='1.56' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path stroke={secondaryColor} d='M15.89,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <circle fill={secondaryColor} cx='17.44' cy='12' r='1.56' />
  </Fragment>
)

const ArrowLeftCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowLeftCircle
