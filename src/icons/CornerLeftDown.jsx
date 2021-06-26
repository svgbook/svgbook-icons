import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,6H12.46A2.76,2.76,0,0,0,9.7,8.77V18' />
    <polyline fill='none' points='6.01 14.31 9.7 18 13.38 14.31' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M18,6H12.46A2.76,2.76,0,0,0,9.7,8.77V18' />
    <polyline fill='none' points='6.01 14.31 9.7 18 13.38 14.31' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M18,6H12.46A2.76,2.76,0,0,0,9.7,8.77V18'
    />
    <polyline fill='none' points='6.01 14.31 9.7 18 13.38 14.31' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M18,6H12.46A2.76,2.76,0,0,0,9.7,8.77V18'
    />
    <polyline fill='none' points='6.01 14.31 9.7 18 13.38 14.31' />
  </Fragment>
)

const CornerLeftDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerLeftDown
