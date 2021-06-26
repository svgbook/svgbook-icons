import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,9.69H8.77A2.77,2.77,0,0,0,6,12.46V18' />
    <polyline fill='none' points='14.32 13.38 18.01 9.69 14.32 6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M18,9.69H8.77A2.77,2.77,0,0,0,6,12.46V18' />
    <polyline fill='none' points='14.32 13.38 18.01 9.69 14.32 6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M18,9.69H8.77A2.77,2.77,0,0,0,6,12.46V18'
    />
    <polyline fill='none' points='14.32 13.38 18.01 9.69 14.32 6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M18,9.69H8.77A2.77,2.77,0,0,0,6,12.46V18'
    />
    <polyline fill='none' points='14.32 13.38 18.01 9.69 14.32 6' />
  </Fragment>
)

const CornerUpRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerUpRight
