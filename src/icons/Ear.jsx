import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.33,10.67A4.67,4.67,0,1,1,16,13.07a6.7,6.7,0,0,1-1.33,1.33,5.43,5.43,0,0,0-1.34,2,3,3,0,0,1-4.05,1.25,3,3,0,0,1-.48-.31'
    />
    <path fill='none' d='M10,10.67a2,2,0,1,1,3.33,1.47' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M7.33,10.67A4.67,4.67,0,1,1,16,13.07a6.7,6.7,0,0,1-1.33,1.33,5.43,5.43,0,0,0-1.34,2,3,3,0,0,1-4.05,1.25,3,3,0,0,1-.48-.31'
    />
    <path fill='none' d='M10,10.67a2,2,0,1,1,3.33,1.47' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.33,10.67A4.67,4.67,0,1,1,16,13.07a6.7,6.7,0,0,1-1.33,1.33,5.43,5.43,0,0,0-1.34,2,3,3,0,0,1-4.05,1.25,3,3,0,0,1-.48-.31'
    />
    <path fill='none' strokeOpacity='.2' d='M10,10.67a2,2,0,1,1,3.33,1.47' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M7.33,10.67A4.67,4.67,0,1,1,16,13.07a6.7,6.7,0,0,1-1.33,1.33,5.43,5.43,0,0,0-1.34,2,3,3,0,0,1-4.05,1.25,3,3,0,0,1-.48-.31'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M10,10.67a2,2,0,1,1,3.33,1.47'
    />
  </Fragment>
)

const Ear = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Ear
