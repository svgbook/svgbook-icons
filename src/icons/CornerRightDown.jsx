import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M14.31,18V8.77A2.77,2.77,0,0,0,11.54,6H6' />
    <polyline fill='none' points='10.62 14.31 14.31 18 17.99 14.31' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M14.31,18V8.77A2.77,2.77,0,0,0,11.54,6H6' />
    <polyline fill='none' points='10.62 14.31 14.31 18 17.99 14.31' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M14.31,18V8.77A2.77,2.77,0,0,0,11.54,6H6'
    />
    <polyline fill='none' points='10.62 14.31 14.31 18 17.99 14.31' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M14.31,18V8.77A2.77,2.77,0,0,0,11.54,6H6'
    />
    <polyline fill='none' points='10.62 14.31 14.31 18 17.99 14.31' />
  </Fragment>
)

const CornerRightDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerRightDown
