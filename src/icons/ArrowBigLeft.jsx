import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.32,14.05H11.86v2.44a.69.69,0,0,1-.68.69.74.74,0,0,1-.49-.2L6.2,12.48a.67.67,0,0,1,0-1L10.69,7a.69.69,0,0,1,1.17.49V10h5.46a.69.69,0,0,1,.68.69v2.72A.69.69,0,0,1,17.32,14.05Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M17.32,14.05H11.86v2.44a.69.69,0,0,1-.68.69.74.74,0,0,1-.49-.2L6.2,12.48a.67.67,0,0,1,0-1L10.69,7a.69.69,0,0,1,1.17.49V10h5.46a.69.69,0,0,1,.68.69v2.72A.69.69,0,0,1,17.32,14.05Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.32,14.05H11.86v2.44a.69.69,0,0,1-.68.69.74.74,0,0,1-.49-.2L6.2,12.48a.67.67,0,0,1,0-1L10.69,7a.69.69,0,0,1,1.17.49V10h5.46a.69.69,0,0,1,.68.69v2.72A.69.69,0,0,1,17.32,14.05Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M17.32,14.05H11.86v2.44a.69.69,0,0,1-.68.69.74.74,0,0,1-.49-.2L6.2,12.48a.67.67,0,0,1,0-1L10.69,7a.69.69,0,0,1,1.17.49V10h5.46a.69.69,0,0,1,.68.69v2.72A.69.69,0,0,1,17.32,14.05Z'
    />
  </Fragment>
)

const ArrowBigLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBigLeft
