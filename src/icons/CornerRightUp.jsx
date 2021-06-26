import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,18h5.53a2.77,2.77,0,0,0,2.77-2.77V6' />
    <polyline fill='none' points='17.99 9.69 14.31 6 10.62 9.69' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,18h5.53a2.77,2.77,0,0,0,2.77-2.77V6' />
    <polyline fill='none' points='17.99 9.69 14.31 6 10.62 9.69' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M6,18h5.53a2.77,2.77,0,0,0,2.77-2.77V6'
    />
    <polyline fill='none' points='17.99 9.69 14.31 6 10.62 9.69' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6,18h5.53a2.77,2.77,0,0,0,2.77-2.77V6'
    />
    <polyline fill='none' points='17.99 9.69 14.31 6 10.62 9.69' />
  </Fragment>
)

const CornerRightUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerRightUp
