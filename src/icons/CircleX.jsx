import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M10.67,10.67l2.66,2.66m0-2.66-2.66,2.66' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5ZM13.69,13a.51.51,0,0,1,0,.71.52.52,0,0,1-.71,0l-1-1-1,1a.5.5,0,1,1-.71-.71l1-1-1-1a.5.5,0,1,1,.71-.71l1,1,1-1a.5.5,0,1,1,.71.71l-1,1Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path fill='none' d='M10.67,10.67l2.66,2.66m0-2.66-2.66,2.66' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path fill='none' d='M10.67,10.67l2.66,2.66m0-2.66-2.66,2.66' />
  </Fragment>
)

const CircleX = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CircleX
