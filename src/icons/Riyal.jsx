import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M13.58,9.79v1.26a1.27,1.27,0,1,1-2.53,0v0a1.26,1.26,0,1,1-2.52,0V13A1.27,1.27,0,0,1,6,13V11.68'
    />
    <path fill='none' d='M15.47,11.69h0' />
    <path fill='none' d='M18,10.42v.63a3.15,3.15,0,0,1-3.16,3.16' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M13.58,9.79v1.26a1.27,1.27,0,1,1-2.53,0v0a1.26,1.26,0,1,1-2.52,0V13A1.27,1.27,0,0,1,6,13V11.68'
    />
    <path fill='none' d='M15.47,11.69h0' />
    <path fill='none' d='M18,10.42v.63a3.15,3.15,0,0,1-3.16,3.16' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M13.58,9.79v1.26a1.27,1.27,0,1,1-2.53,0v0a1.26,1.26,0,1,1-2.52,0V13A1.27,1.27,0,0,1,6,13V11.68'
    />
    <path fill='none' strokeOpacity='.2' d='M15.47,11.69h0' />
    <path fill='none' d='M18,10.42v.63a3.15,3.15,0,0,1-3.16,3.16' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M13.58,9.79v1.26a1.27,1.27,0,1,1-2.53,0v0a1.26,1.26,0,1,1-2.52,0V13A1.27,1.27,0,0,1,6,13V11.68'
    />
    <path fill='none' stroke={secondaryColor} d='M15.47,11.69h0' />
    <path fill='none' d='M18,10.42v.63a3.15,3.15,0,0,1-3.16,3.16' />
  </Fragment>
)

const Riyal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Riyal
