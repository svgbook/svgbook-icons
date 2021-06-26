import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,17.2V12.4A2.39,2.39,0,0,0,15.6,10H10' />
    <path fill='none' d='M13.2,13.2,10,10l3.2-3.2m-4,6.4L6,10,9.2,6.8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M18,17.2V12.4A2.39,2.39,0,0,0,15.6,10H10' />
    <path fill='none' d='M13.2,13.2,10,10l3.2-3.2m-4,6.4L6,10,9.2,6.8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M18,17.2V12.4A2.39,2.39,0,0,0,15.6,10H10'
    />
    <path fill='none' d='M13.2,13.2,10,10l3.2-3.2m-4,6.4L6,10,9.2,6.8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M18,17.2V12.4A2.39,2.39,0,0,0,15.6,10H10'
    />
    <path fill='none' d='M13.2,13.2,10,10l3.2-3.2m-4,6.4L6,10,9.2,6.8' />
  </Fragment>
)

const CornerUpLeftDouble = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerUpLeftDouble
