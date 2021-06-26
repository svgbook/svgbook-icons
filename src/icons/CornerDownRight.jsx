import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6.25,6v5.31A2.65,2.65,0,0,0,8.9,14h8.85' />
    <polyline fill='none' points='14.21 10.45 17.75 13.98 13.65 17.98' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6.25,6v5.31A2.65,2.65,0,0,0,8.9,14h8.85' />
    <polyline fill='none' points='14.21 10.45 17.75 13.98 13.65 17.98' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M6.25,6v5.31A2.65,2.65,0,0,0,8.9,14h8.85'
    />
    <polyline fill='none' points='14.21 10.45 17.75 13.98 13.65 17.98' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6.25,6v5.31A2.65,2.65,0,0,0,8.9,14h8.85'
    />
    <polyline fill='none' points='14.21 10.45 17.75 13.98 13.65 17.98' />
  </Fragment>
)

const CornerDownRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerDownRight
