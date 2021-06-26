import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9' />
    <path fill='none' d='M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9' />
    <path fill='none' d='M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9' />
    <path fill='none' d='M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15' />
    <line x1='9.75' y1='10.5' x2='9.76' y2='10.5' />
    <line x1='14.25' y1='10.5' x2='14.26' y2='10.5' />
    <path fill='none' d='M10.13,14.25a2.62,2.62,0,0,0,3.71,0l0,0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9' />
    <path fill='none' d='M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9' />
    <path fill='none' d='M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9' />
    <path fill='none' d='M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15' />
    <line x1='9.75' y1='10.5' x2='9.76' y2='10.5' />
    <line x1='14.25' y1='10.5' x2='14.26' y2='10.5' />
    <path fill='none' d='M10.13,14.25a2.62,2.62,0,0,0,3.71,0l0,0' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9' />
    <path fill='none' strokeOpacity='.2' d='M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9' />
    <path fill='none' strokeOpacity='.2' d='M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15'
    />
    <line x1='9.75' y1='10.5' x2='9.76' y2='10.5' />
    <line x1='14.25' y1='10.5' x2='14.26' y2='10.5' />
    <path fill='none' d='M10.13,14.25a2.62,2.62,0,0,0,3.71,0l0,0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M6,9V7.5A1.5,1.5,0,0,1,7.5,6H9' />
    <path fill='none' d='M6,15v1.5A1.5,1.5,0,0,0,7.5,18H9' />
    <path fill='none' d='M15,6h1.5A1.5,1.5,0,0,1,18,7.5V9' />
    <path fill='none' d='M15,18h1.5A1.5,1.5,0,0,0,18,16.5V15' />
    <line stroke={secondaryColor} x1='9.75' y1='10.5' x2='9.76' y2='10.5' />
    <line stroke={secondaryColor} x1='14.25' y1='10.5' x2='14.26' y2='10.5' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M10.13,14.25a2.62,2.62,0,0,0,3.71,0l0,0'
    />
  </Fragment>
)

const FaceId = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FaceId
