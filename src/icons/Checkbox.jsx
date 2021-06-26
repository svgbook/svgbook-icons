import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='9.75 11.25 12 13.5 18 7.5' />
    <path
      fill='none'
      d='M18,12v4.5A1.5,1.5,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5v-9A1.5,1.5,0,0,1,7.5,6h6.75'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline fill='none' points='9.75 11.25 12 13.5 18 7.5' />
    <path
      fill='none'
      d='M18,12v4.5A1.5,1.5,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5v-9A1.5,1.5,0,0,1,7.5,6h6.75'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline fill='none' points='9.75 11.25 12 13.5 18 7.5' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M18,12v4.5A1.5,1.5,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5v-9A1.5,1.5,0,0,1,7.5,6h6.75'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline
      fill='none'
      stroke={secondaryColor}
      points='9.75 11.25 12 13.5 18 7.5'
    />
    <path
      fill='none'
      d='M18,12v4.5A1.5,1.5,0,0,1,16.5,18h-9A1.5,1.5,0,0,1,6,16.5v-9A1.5,1.5,0,0,1,7.5,6h6.75'
    />
  </Fragment>
)

const Checkbox = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Checkbox
