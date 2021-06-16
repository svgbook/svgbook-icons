import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M7.5,6h5.14a3,3,0,0,1,0,6H7.5Z' />
    <path fill='none' d='M12.64,12h.86a3,3,0,0,1,0,6h-6V12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M7.5,6h5.14a3,3,0,0,1,0,6H7.5Z' />
    <path d='M12.64,12h.86a3,3,0,0,1,0,6h-6V12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M7.5,6h5.14a3,3,0,0,1,0,6H7.5Z' />
    <path fillOpacity='.2' d='M12.64,12h.86a3,3,0,0,1,0,6h-6V12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M12.64,12h.86a3,3,0,0,1,0,6h-6V12' />
    <path fill={secondaryColor} d='M7.5,6h5.14a3,3,0,0,1,0,6H7.5Z' />
  </Fragment>
)

const Bold = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bold
