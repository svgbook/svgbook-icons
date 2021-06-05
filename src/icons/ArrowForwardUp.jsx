import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15.82,13.34l3.66-3.66L15.82,6m3.66,3.67H9.41a3.67,3.67,0,1,0,0,7.33h.91'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M15.82,13.34l3.66-3.66L15.82,6m3.66,3.67H9.41a3.67,3.67,0,1,0,0,7.33h.91'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15.82,13.34l3.66-3.66L15.82,6m3.66,3.67H9.41a3.67,3.67,0,1,0,0,7.33h.91'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M15.82,13.34l3.66-3.66L15.82,6m3.66,3.67H9.41a3.67,3.67,0,1,0,0,7.33h.91'
    />
  </Fragment>
)

const ArrowForwardUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowForwardUp
