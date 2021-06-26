import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,6.8v4.8A2.39,2.39,0,0,1,15.6,14H10' />
    <path fill='none' d='M13.2,10.8,10,14l3.2,3.2m-4-6.4L6,14l3.2,3.2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M18,6.8v4.8A2.39,2.39,0,0,1,15.6,14H10' />
    <path fill='none' d='M13.2,10.8,10,14l3.2,3.2m-4-6.4L6,14l3.2,3.2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M18,6.8v4.8A2.39,2.39,0,0,1,15.6,14H10'
    />
    <path fill='none' d='M13.2,10.8,10,14l3.2,3.2m-4-6.4L6,14l3.2,3.2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M18,6.8v4.8A2.39,2.39,0,0,1,15.6,14H10'
    />
    <path fill='none' d='M13.2,10.8,10,14l3.2,3.2m-4-6.4L6,14l3.2,3.2' />
  </Fragment>
)

const CornerDownLeftDouble = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerDownLeftDouble
