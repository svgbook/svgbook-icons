import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M5.25,18l1-2.92a5.62,5.62,0,0,1,2.3-8.22,7.23,7.23,0,0,1,9.25,2.05,5.63,5.63,0,0,1-2.3,8.22,7.51,7.51,0,0,1-6.71.12L5.25,18'
    />
    <path fill='none' d='M9,12.76l2.25-1.5,1.49,1.5L15,11.26' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18.2,8.63A7.75,7.75,0,0,0,8.3,6.42a6.48,6.48,0,0,0-3.36,4.16,5.85,5.85,0,0,0,.74,4.57l-.9,2.69a.49.49,0,0,0,.1.49.5.5,0,0,0,.37.17h.11l3.35-.72a8,8,0,0,0,7-.2,6.52,6.52,0,0,0,3.36-4.17A5.88,5.88,0,0,0,18.2,8.63Zm-2.93,3L13,13.17a.49.49,0,0,1-.63-.06L11.18,11.9l-1.9,1.27a.51.51,0,0,1-.28.09A.51.51,0,0,1,8.58,13a.5.5,0,0,1,.14-.69L11,10.84a.5.5,0,0,1,.63.07l1.21,1.2,1.9-1.27a.5.5,0,1,1,.56.84Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M5.25,18l1-2.92a5.62,5.62,0,0,1,2.3-8.22,7.23,7.23,0,0,1,9.25,2.05,5.63,5.63,0,0,1-2.3,8.22,7.51,7.51,0,0,1-6.71.12L5.25,18'
    />
    <path fill='none' d='M9,12.76l2.25-1.5,1.49,1.5L15,11.26' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M5.25,18l1-2.92a5.62,5.62,0,0,1,2.3-8.22,7.23,7.23,0,0,1,9.25,2.05,5.63,5.63,0,0,1-2.3,8.22,7.51,7.51,0,0,1-6.71.12L5.25,18'
    />
    <path fill='none' d='M9,12.76l2.25-1.5,1.49,1.5L15,11.26' />
  </Fragment>
)

const Messenger = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Messenger
