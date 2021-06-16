import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fill='none'
      d='M14.14,14.14,11.33,18V13.33h-4L9.86,9.86M11,8.31,12.67,6v4.67h4L15.26,12.6'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline points='12.67 6 12.67 10.67 16.67 10.67 11.33 18 11.33 13.33 7.33 13.33 12.67 6' />
    <path
      fill='none'
      d='M14.14,14.14,11.33,18V13.33h-4L9.86,9.86M11,8.31,12.67,6v4.67h4L15.26,12.6'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M14.14,14.14,11.33,18V13.33h-4L9.86,9.86M11,8.31,12.67,6v4.67h4L15.26,12.6'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M14.14,14.14,11.33,18V13.33h-4L9.86,9.86M11,8.31,12.67,6v4.67h4L15.26,12.6'
    />
    <line stroke={secondaryColor} x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const BoltOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BoltOff
