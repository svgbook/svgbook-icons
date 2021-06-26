import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M7.38,6h9.24' />
    <path fill='none' d='M12,6V18' />
    <path fill='none' d='M8.31,16.15l7.38-2.77' />
    <path fill='none' d='M15.69,9.69,8.31,12.46' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M7.38,6h9.24' />
    <path fill='none' d='M12,6V18' />
    <path fill='none' d='M8.31,16.15l7.38-2.77' />
    <path fill='none' d='M15.69,9.69,8.31,12.46' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M7.38,6h9.24' />
    <path fill='none' d='M12,6V18' />
    <path fill='none' strokeOpacity='.2' d='M8.31,16.15l7.38-2.77' />
    <path fill='none' strokeOpacity='.2' d='M15.69,9.69,8.31,12.46' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M7.38,6h9.24' />
    <path fill='none' d='M12,6V18' />
    <path fill='none' stroke={secondaryColor} d='M8.31,16.15l7.38-2.77' />
    <path fill='none' stroke={secondaryColor} d='M15.69,9.69,8.31,12.46' />
  </Fragment>
)

const Tugrik = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Tugrik
