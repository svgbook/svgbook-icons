import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,14.69A2.74,2.74,0,0,1,6,12,2.74,2.74,0,0,1,8.79,9.34,3.35,3.35,0,0,1,12.72,7a3,3,0,0,1,2.61,3.53h.59a2.08,2.08,0,1,1,0,4.16h-.59'
    />
    <polyline
      fill='none'
      points='12.36 12.31 11.17 14.69 12.95 14.69 11.76 17.06'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,14.69A2.74,2.74,0,0,1,6,12,2.74,2.74,0,0,1,8.79,9.34,3.35,3.35,0,0,1,12.72,7a3,3,0,0,1,2.61,3.53h.59a2.08,2.08,0,1,1,0,4.16h-.59'
    />
    <polyline
      fill='none'
      points='12.36 12.31 11.17 14.69 12.95 14.69 11.76 17.06'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M8.79,14.69A2.74,2.74,0,0,1,6,12,2.74,2.74,0,0,1,8.79,9.34,3.35,3.35,0,0,1,12.72,7a3,3,0,0,1,2.61,3.53h.59a2.08,2.08,0,1,1,0,4.16h-.59'
    />
    <polyline
      fill='none'
      points='12.36 12.31 11.17 14.69 12.95 14.69 11.76 17.06'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,14.69A2.74,2.74,0,0,1,6,12,2.74,2.74,0,0,1,8.79,9.34,3.35,3.35,0,0,1,12.72,7a3,3,0,0,1,2.61,3.53h.59a2.08,2.08,0,1,1,0,4.16h-.59'
    />
    <polyline
      fill='none'
      stroke={secondaryColor}
      points='12.36 12.31 11.17 14.69 12.95 14.69 11.76 17.06'
    />
  </Fragment>
)

const CloudStorm = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CloudStorm
