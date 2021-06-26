import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9' />
    <path fill='none' d='M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9' />
    <path fill='none' d='M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9' />
    <path fill='none' d='M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15' />
    <circle fill='none' cx='12' cy='12' r='2.25' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9' />
    <path fill='none' d='M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9' />
    <path fill='none' d='M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9' />
    <path fill='none' d='M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15' />
    <circle cx='12' cy='12' r='2.25' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9' />
    <path fill='none' d='M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9' />
    <path fill='none' d='M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9' />
    <path fill='none' d='M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15' />
    <circle fillOpacity='.2' cx='12' cy='12' r='2.25' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9' />
    <path fill='none' d='M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9' />
    <path fill='none' d='M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9' />
    <path fill='none' d='M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15' />
    <circle fill={secondaryColor} cx='12' cy='12' r='2.25' />
  </Fragment>
)

const Capture = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Capture
