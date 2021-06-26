import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6.8,18h4.8A2.39,2.39,0,0,0,14,15.6V10' />
    <path fill='none' d='M10.8,13.2,14,10l3.2,3.2m-6.4-4L14,6l3.2,3.2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6.8,18h4.8A2.39,2.39,0,0,0,14,15.6V10' />
    <path fill='none' d='M10.8,13.2,14,10l3.2,3.2m-6.4-4L14,6l3.2,3.2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M6.8,18h4.8A2.39,2.39,0,0,0,14,15.6V10'
    />
    <path fill='none' d='M10.8,13.2,14,10l3.2,3.2m-6.4-4L14,6l3.2,3.2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6.8,18h4.8A2.39,2.39,0,0,0,14,15.6V10'
    />
    <path fill='none' d='M10.8,13.2,14,10l3.2,3.2m-6.4-4L14,6l3.2,3.2' />
  </Fragment>
)

const CornerRightUpDouble = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerRightUpDouble
