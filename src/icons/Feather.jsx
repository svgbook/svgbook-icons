import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M7.5,16.5,6,18' />
    <polygon
      fill='none'
      points='13.5 6.75 13.5 10.5 10.5 13.5 10.5 9.75 13.5 6.75'
    />
    <polygon
      fill='none'
      points='10.5 9.75 10.5 13.5 7.5 16.5 7.5 12.75 10.5 9.75'
    />
    <polygon
      fill='none'
      points='14.25 13.5 11.25 16.5 7.5 16.5 7.5 16.5 10.5 13.5 14.25 13.5'
    />
    <polygon
      fill='none'
      points='17.25 10.5 14.25 13.5 10.5 13.5 13.5 10.5 17.25 10.5'
    />
    <path
      fill='none'
      d='M18,8.63a2.61,2.61,0,0,1-.75,1.87H13.5V6.75A2.65,2.65,0,0,1,18,8.63Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M7.5,16.5,6,18' />
    <polygon
      fill='none'
      points='13.5 6.75 13.5 10.5 10.5 13.5 10.5 9.75 13.5 6.75'
    />
    <polygon
      fill='none'
      points='10.5 9.75 10.5 13.5 7.5 16.5 7.5 12.75 10.5 9.75'
    />
    <polygon
      fill='none'
      points='14.25 13.5 11.25 16.5 7.5 16.5 7.5 16.5 10.5 13.5 14.25 13.5'
    />
    <polygon
      fill='none'
      points='17.25 10.5 14.25 13.5 10.5 13.5 13.5 10.5 17.25 10.5'
    />
    <path d='M18,8.63a2.61,2.61,0,0,1-.75,1.87H13.5V6.75A2.65,2.65,0,0,1,18,8.63Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M7.5,16.5,6,18' />
    <polygon
      fill='none'
      points='13.5 6.75 13.5 10.5 10.5 13.5 10.5 9.75 13.5 6.75'
    />
    <polygon
      fill='none'
      points='10.5 9.75 10.5 13.5 7.5 16.5 7.5 12.75 10.5 9.75'
    />
    <polygon
      fill='none'
      points='14.25 13.5 11.25 16.5 7.5 16.5 7.5 16.5 10.5 13.5 14.25 13.5'
    />
    <polygon
      fill='none'
      points='17.25 10.5 14.25 13.5 10.5 13.5 13.5 10.5 17.25 10.5'
    />
    <path
      fillOpacity='.2'
      d='M18,8.63a2.61,2.61,0,0,1-.75,1.87H13.5V6.75A2.65,2.65,0,0,1,18,8.63Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M7.5,16.5,6,18' />
    <polygon
      fill='none'
      points='13.5 6.75 13.5 10.5 10.5 13.5 10.5 9.75 13.5 6.75'
    />
    <polygon
      fill='none'
      points='10.5 9.75 10.5 13.5 7.5 16.5 7.5 12.75 10.5 9.75'
    />
    <polygon
      fill='none'
      points='14.25 13.5 11.25 16.5 7.5 16.5 7.5 16.5 10.5 13.5 14.25 13.5'
    />
    <polygon
      fill='none'
      points='17.25 10.5 14.25 13.5 10.5 13.5 13.5 10.5 17.25 10.5'
    />
    <path
      fill={secondaryColor}
      d='M18,8.63a2.61,2.61,0,0,1-.75,1.87H13.5V6.75A2.65,2.65,0,0,1,18,8.63Z'
    />
  </Fragment>
)

const Feather = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Feather
