import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path d='M15.89,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <path fill='none' d='M19,13.56H15.89V10.44H19Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M15.89,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <path d='M19,13.56H15.89V10.44H19Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path strokeOpacity='.2' d='M15.89,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <path fillOpacity='.2' d='M19,13.56H15.89V10.44H19Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path stroke={secondaryColor} d='M15.89,12H5' />
    <path fill='none' d='M7.33,9.67,5,12l2.33,2.33' />
    <path fill={secondaryColor} d='M19,13.56H15.89V10.44H19Z' />
  </Fragment>
)

const ArrowLeftSquare = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowLeftSquare
