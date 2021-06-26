import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.33,11.65a4.24,4.24,0,1,0,7.34,0L12,6,8.33,11.65Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M8.33,11.65a4.24,4.24,0,1,0,7.34,0L12,6,8.33,11.65Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M8.33,11.65a4.24,4.24,0,1,0,7.34,0L12,6,8.33,11.65Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M8.33,11.65a4.24,4.24,0,1,0,7.34,0L12,6,8.33,11.65Z'
    />
  </Fragment>
)

const Droplet = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Droplet
