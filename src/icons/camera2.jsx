import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,6a4.7,4.7,0,1,0,4.69,4.69A4.69,4.69,0,0,0,12,6Zm0,6.71a2,2,0,1,1,2-2A2,2,0,0,1,12,12.71Z'
    />
    <path
      fill='none'
      d='M16.25,17.33a.67.67,0,0,1-.67.67h-7a.73.73,0,0,1-.35-.09A.68.68,0,0,1,8,17l1.43-2.37a4.72,4.72,0,0,0,5.33-.11L16.15,17A.67.67,0,0,1,16.25,17.33Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,6a4.7,4.7,0,1,0,4.69,4.69A4.69,4.69,0,0,0,12,6Zm0,6.71a2,2,0,1,1,2-2A2,2,0,0,1,12,12.71Z' />
    <path
      fill='none'
      d='M16.25,17.33a.67.67,0,0,1-.67.67h-7a.73.73,0,0,1-.35-.09A.68.68,0,0,1,8,17l1.43-2.37a4.72,4.72,0,0,0,5.33-.11L16.15,17A.67.67,0,0,1,16.25,17.33Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12,6a4.7,4.7,0,1,0,4.69,4.69A4.69,4.69,0,0,0,12,6Zm0,6.71a2,2,0,1,1,2-2A2,2,0,0,1,12,12.71Z'
    />
    <path
      fill='none'
      d='M16.25,17.33a.67.67,0,0,1-.67.67h-7a.73.73,0,0,1-.35-.09A.68.68,0,0,1,8,17l1.43-2.37a4.72,4.72,0,0,0,5.33-.11L16.15,17A.67.67,0,0,1,16.25,17.33Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12,6a4.7,4.7,0,1,0,4.69,4.69A4.69,4.69,0,0,0,12,6Zm0,6.71a2,2,0,1,1,2-2A2,2,0,0,1,12,12.71Z'
    />
    <path
      fill='none'
      d='M16.25,17.33a.67.67,0,0,1-.67.67h-7a.73.73,0,0,1-.35-.09A.68.68,0,0,1,8,17l1.43-2.37a4.72,4.72,0,0,0,5.33-.11L16.15,17A.67.67,0,0,1,16.25,17.33Z'
    />
  </Fragment>
)

const Camera2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Camera2
