import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,18V15.33A2.67,2.67,0,1,1,8.67,18H6' />
    <path
      fill='none'
      d='M11.2,14.53A10.65,10.65,0,0,0,18,6a10.65,10.65,0,0,0-8.53,6.8'
    />
    <path fill='none' d='M11.07,10A6,6,0,0,1,14,12.93' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M6,18V15.33A2.67,2.67,0,1,1,8.67,18H6' />
    <path
      fill='none'
      d='M11.2,14.53A10.65,10.65,0,0,0,18,6a10.65,10.65,0,0,0-8.53,6.8'
    />
    <path fill='none' d='M11.07,10A6,6,0,0,1,14,12.93' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M6,18V15.33A2.67,2.67,0,1,1,8.67,18H6' />
    <path
      fill='none'
      d='M11.2,14.53A10.65,10.65,0,0,0,18,6a10.65,10.65,0,0,0-8.53,6.8'
    />
    <path fill='none' d='M11.07,10A6,6,0,0,1,14,12.93' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M6,18V15.33A2.67,2.67,0,1,1,8.67,18H6' />
    <path
      fill='none'
      d='M11.2,14.53A10.65,10.65,0,0,0,18,6a10.65,10.65,0,0,0-8.53,6.8'
    />
    <path fill='none' d='M11.07,10A6,6,0,0,1,14,12.93' />
  </Fragment>
)

const Brush = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Brush
