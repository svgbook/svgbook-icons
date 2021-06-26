import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.7,6v9.22A2.76,2.76,0,0,0,12.46,18H18' />
    <polyline fill='none' points='13.38 9.69 9.7 6 6.01 9.69' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M9.7,6v9.22A2.76,2.76,0,0,0,12.46,18H18' />
    <polyline fill='none' points='13.38 9.69 9.7 6 6.01 9.69' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M9.7,6v9.22A2.76,2.76,0,0,0,12.46,18H18'
    />
    <polyline fill='none' points='13.38 9.69 9.7 6 6.01 9.69' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M9.7,6v9.22A2.76,2.76,0,0,0,12.46,18H18'
    />
    <polyline fill='none' points='13.38 9.69 9.7 6 6.01 9.69' />
  </Fragment>
)

const CornerLeftUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerLeftUp
