import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.37,9.9c1.62,3.15.32,7.36-3.4,8A4.9,4.9,0,0,1,8.52,9.52c.19-.19.73-.69,1-.85,0,.33.17,2.19.64,2C12,10.67,12.63,8,12.37,6A8.69,8.69,0,0,1,16.37,9.9Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M16.37,9.9c1.62,3.15.32,7.36-3.4,8A4.9,4.9,0,0,1,8.52,9.52c.19-.19.73-.69,1-.85,0,.33.17,2.19.64,2C12,10.67,12.63,8,12.37,6A8.69,8.69,0,0,1,16.37,9.9Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.37,9.9c1.62,3.15.32,7.36-3.4,8A4.9,4.9,0,0,1,8.52,9.52c.19-.19.73-.69,1-.85,0,.33.17,2.19.64,2C12,10.67,12.63,8,12.37,6A8.69,8.69,0,0,1,16.37,9.9Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.37,9.9c1.62,3.15.32,7.36-3.4,8A4.9,4.9,0,0,1,8.52,9.52c.19-.19.73-.69,1-.85,0,.33.17,2.19.64,2C12,10.67,12.63,8,12.37,6A8.69,8.69,0,0,1,16.37,9.9Z'
    />
  </Fragment>
)

const Tinder = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Tinder
