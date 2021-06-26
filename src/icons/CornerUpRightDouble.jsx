import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,17.2V12.4A2.39,2.39,0,0,1,8.4,10H14' />
    <path fill='none' d='M10.8,13.2,14,10,10.8,6.8m4,6.4L18,10,14.8,6.8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,17.2V12.4A2.39,2.39,0,0,1,8.4,10H14' />
    <path fill='none' d='M10.8,13.2,14,10,10.8,6.8m4,6.4L18,10,14.8,6.8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M6,17.2V12.4A2.39,2.39,0,0,1,8.4,10H14'
    />
    <path fill='none' d='M10.8,13.2,14,10,10.8,6.8m4,6.4L18,10,14.8,6.8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6,17.2V12.4A2.39,2.39,0,0,1,8.4,10H14'
    />
    <path fill='none' d='M10.8,13.2,14,10,10.8,6.8m4,6.4L18,10,14.8,6.8' />
  </Fragment>
)

const CornerUpRightDouble = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerUpRightDouble
