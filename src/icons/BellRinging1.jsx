import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.57,6.44a1.48,1.48,0,0,1,0,2.1,5.23,5.23,0,0,1-1.06,5.26l-1.57,1.57A3,3,0,0,0,14.41,18L6,9.59a3,3,0,0,0,2.63-.53L10.2,7.49a5.2,5.2,0,0,1,5.26-1A1.48,1.48,0,0,1,17.57,6.44Z'
    />
    <path
      fill='none'
      d='M8.63,12.22l-.53.52a2.23,2.23,0,0,0,3.16,3.16l.52-.53'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M17.57,6.44a1.48,1.48,0,0,1,0,2.1,5.23,5.23,0,0,1-1.06,5.26l-1.57,1.57A3,3,0,0,0,14.41,18L6,9.59a3,3,0,0,0,2.63-.53L10.2,7.49a5.2,5.2,0,0,1,5.26-1A1.48,1.48,0,0,1,17.57,6.44Z' />
    <path d='M8.63,12.22l-.53.52a2.23,2.23,0,0,0,3.16,3.16l.52-.53' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.57,6.44a1.48,1.48,0,0,1,0,2.1,5.23,5.23,0,0,1-1.06,5.26l-1.57,1.57A3,3,0,0,0,14.41,18L6,9.59a3,3,0,0,0,2.63-.53L10.2,7.49a5.2,5.2,0,0,1,5.26-1A1.48,1.48,0,0,1,17.57,6.44Z'
    />
    <path
      fillOpacity='.2'
      d='M8.63,12.22l-.53.52a2.23,2.23,0,0,0,3.16,3.16l.52-.53'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M8.63,12.22l-.53.52a2.23,2.23,0,0,0,3.16,3.16l.52-.53'
    />
    <path
      fill={secondaryColor}
      d='M17.57,6.44a1.48,1.48,0,0,1,0,2.1,5.23,5.23,0,0,1-1.06,5.26l-1.57,1.57A3,3,0,0,0,14.41,18L6,9.59a3,3,0,0,0,2.63-.53L10.2,7.49a5.2,5.2,0,0,1,5.26-1A1.48,1.48,0,0,1,17.57,6.44Z'
    />
  </Fragment>
)

const BellRinging1 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BellRinging1
