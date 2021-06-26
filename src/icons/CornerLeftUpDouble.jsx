import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M17.2,18H12.4A2.39,2.39,0,0,1,10,15.6V10' />
    <path fill='none' d='M13.2,13.2,10,10,6.8,13.2m6.4-4L10,6,6.8,9.2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M17.2,18H12.4A2.39,2.39,0,0,1,10,15.6V10' />
    <path fill='none' d='M13.2,13.2,10,10,6.8,13.2m6.4-4L10,6,6.8,9.2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M17.2,18H12.4A2.39,2.39,0,0,1,10,15.6V10'
    />
    <path fill='none' d='M13.2,13.2,10,10,6.8,13.2m6.4-4L10,6,6.8,9.2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M17.2,18H12.4A2.39,2.39,0,0,1,10,15.6V10'
    />
    <path fill='none' d='M13.2,13.2,10,10,6.8,13.2m6.4-4L10,6,6.8,9.2' />
  </Fragment>
)

const CornerLeftUpDouble = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerLeftUpDouble
