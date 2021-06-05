import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,8.67V18' />
    <path fill='none' d='M10,16l2,2,2-2' />
    <path fill='none' d='M13.33,6V8.67H10.67V6Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12,8.67V18' />
    <path fill='none' d='M10,16l2,2,2-2' />
    <path d='M13.33,6V8.67H10.67V6Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M12,8.67V18' />
    <path fill='none' d='M10,16l2,2,2-2' />
    <path fillOpacity='.2' d='M13.33,6V8.67H10.67V6Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M12,8.67V18' />
    <path fill='none' d='M10,16l2,2,2-2' />
    <path fill={secondaryColor} d='M13.33,6V8.67H10.67V6Z' />
  </Fragment>
)

const ArrowBottomSquare = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBottomSquare
