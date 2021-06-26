import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <polyline fill='none' points='12 8.67 12 12 14 14' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm2.35,8.85a.48.48,0,0,1-.7,0l-2-2A.47.47,0,0,1,11.5,12V8.67a.5.5,0,0,1,1,0v3.12l1.85,1.86A.48.48,0,0,1,14.35,14.35Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <polyline fill='none' points='12 8.67 12 12 14 14' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <polyline fill='none' points='12 8.67 12 12 14 14' />
  </Fragment>
)

const Clock = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Clock
