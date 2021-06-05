import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,6V18' />
    <path fill='none' d='M10,16l2,2,2-2' />
    <path fill='none' d='M10,6h4' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12,6V18' />
    <path fill='none' d='M10,16l2,2,2-2' />
    <path fill='none' d='M10,6h4' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M12,6V18' />
    <path fill='none' d='M10,16l2,2,2-2' />
    <path fill='none' d='M10,6h4' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M12,6V18' />
    <path fill='none' d='M10,16l2,2,2-2' />
    <path fill='none' d='M10,6h4' />
  </Fragment>
)

const ArrowBottomBar = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBottomBar
