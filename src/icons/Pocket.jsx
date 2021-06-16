import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.06,6h9.88a1.41,1.41,0,0,1,1.41,1.41v4.24a6.35,6.35,0,0,1-12.7,0V7.41A1.41,1.41,0,0,1,7.06,6'
    />
    <polyline fill='none' points='9.18 10.94 12 13.77 14.82 10.94' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.94,5.5H7.06A1.91,1.91,0,0,0,5.15,7.41v4.24a6.85,6.85,0,0,0,13.7,0V7.41A1.91,1.91,0,0,0,16.94,5.5Zm-1.76,5.79-2.83,2.83a.51.51,0,0,1-.7,0L8.82,11.29a.5.5,0,0,1,0-.7.5.5,0,0,1,.71,0L12,13.06l2.47-2.47a.5.5,0,0,1,.71,0A.5.5,0,0,1,15.18,11.29Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.06,6h9.88a1.41,1.41,0,0,1,1.41,1.41v4.24a6.35,6.35,0,0,1-12.7,0V7.41A1.41,1.41,0,0,1,7.06,6'
    />
    <polyline fill='none' points='9.18 10.94 12 13.77 14.82 10.94' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.06,6h9.88a1.41,1.41,0,0,1,1.41,1.41v4.24a6.35,6.35,0,0,1-12.7,0V7.41A1.41,1.41,0,0,1,7.06,6'
    />
    <polyline fill='none' points='9.18 10.94 12 13.77 14.82 10.94' />
  </Fragment>
)

const Pocket = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Pocket
