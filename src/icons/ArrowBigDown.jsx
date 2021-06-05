import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M14.05,6.68v5.46h2.44a.69.69,0,0,1,.69.68.74.74,0,0,1-.2.49l-4.5,4.49a.67.67,0,0,1-1,0L7,13.31a.69.69,0,0,1,.49-1.17H10V6.68A.69.69,0,0,1,10.64,6h2.73A.69.69,0,0,1,14.05,6.68Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M14.05,6.68v5.46h2.44a.69.69,0,0,1,.69.68.74.74,0,0,1-.2.49l-4.5,4.49a.67.67,0,0,1-1,0L7,13.31a.69.69,0,0,1,.49-1.17H10V6.68A.69.69,0,0,1,10.64,6h2.73A.69.69,0,0,1,14.05,6.68Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M14.05,6.68v5.46h2.44a.69.69,0,0,1,.69.68.74.74,0,0,1-.2.49l-4.5,4.49a.67.67,0,0,1-1,0L7,13.31a.69.69,0,0,1,.49-1.17H10V6.68A.69.69,0,0,1,10.64,6h2.73A.69.69,0,0,1,14.05,6.68Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M14.05,6.68v5.46h2.44a.69.69,0,0,1,.69.68.74.74,0,0,1-.2.49l-4.5,4.49a.67.67,0,0,1-1,0L7,13.31a.69.69,0,0,1,.49-1.17H10V6.68A.69.69,0,0,1,10.64,6h2.73A.69.69,0,0,1,14.05,6.68Z'
    />
  </Fragment>
)

const ArrowBigDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBigDown
