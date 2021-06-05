import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M14.92,10.33l3.34,3.34L14.92,17m3.34-3.34H9.08A3.34,3.34,0,0,1,9.08,7h.83'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M14.92,10.33l3.34,3.34L14.92,17m3.34-3.34H9.08A3.34,3.34,0,0,1,9.08,7h.83'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M14.92,10.33l3.34,3.34L14.92,17m3.34-3.34H9.08A3.34,3.34,0,0,1,9.08,7h.83'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M14.92,10.33l3.34,3.34L14.92,17m3.34-3.34H9.08A3.34,3.34,0,0,1,9.08,7h.83'
    />
  </Fragment>
)

const ArrowForward = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowForward
