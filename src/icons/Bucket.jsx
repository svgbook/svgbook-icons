import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.25,9.75l-1.5,6.75a1.61,1.61,0,0,1-1.5,1.5H9.75a1.62,1.62,0,0,1-1.5-1.5L6.75,9.75Z'
    />
    <path fill='none' d='M8.25,9.75a3.75,3.75,0,0,1,7.5,0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M17.25,9.75l-1.5,6.75a1.61,1.61,0,0,1-1.5,1.5H9.75a1.62,1.62,0,0,1-1.5-1.5L6.75,9.75Z' />
    <path fill='none' d='M8.25,9.75a3.75,3.75,0,0,1,7.5,0' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.25,9.75l-1.5,6.75a1.61,1.61,0,0,1-1.5,1.5H9.75a1.62,1.62,0,0,1-1.5-1.5L6.75,9.75Z'
    />
    <path fill='none' d='M8.25,9.75a3.75,3.75,0,0,1,7.5,0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M17.25,9.75l-1.5,6.75a1.61,1.61,0,0,1-1.5,1.5H9.75a1.62,1.62,0,0,1-1.5-1.5L6.75,9.75Z'
    />
    <path fill='none' d='M8.25,9.75a3.75,3.75,0,0,1,7.5,0' />
  </Fragment>
)

const Bucket = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bucket
