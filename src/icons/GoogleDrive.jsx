import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,10,7.16,18l-2.4-4L9.57,6Z' />
    <path fill='none' d='M9.57,14h9.61l-2.4,4H7.16Z' />
    <path fill='none' d='M14.37,14,9.57,6h4.8l4.81,8Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12,10,7.16,18l-2.4-4L9.57,6Z' />
    <path fill='none' d='M9.57,14h9.61l-2.4,4H7.16Z' />
    <path fill='none' d='M14.37,14,9.57,6h4.8l4.81,8Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M12,10,7.16,18l-2.4-4L9.57,6Z' />
    <path fillOpacity='.2' d='M9.57,14h9.61l-2.4,4H7.16Z' />
    <path fillOpacity='.2' d='M14.37,14,9.57,6h4.8l4.81,8Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M12,10,7.16,18l-2.4-4L9.57,6Z' />
    <path fill={secondaryColor} d='M9.57,14h9.61l-2.4,4H7.16Z' />
    <path fill={secondaryColor} d='M14.37,14,9.57,6h4.8l4.81,8Z' />
  </Fragment>
)

const GoogleDrive = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GoogleDrive
