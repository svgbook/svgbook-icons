import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M7.71,14.57h3.43' />
    <path fill='none' d='M16.29,6H11.14A1.72,1.72,0,0,0,9.43,7.71V18' />
    <path fill='none' d='M9.43,11.14h6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M7.71,14.57h3.43' />
    <path fill='none' d='M16.29,6H11.14A1.72,1.72,0,0,0,9.43,7.71V18' />
    <path fill='none' d='M9.43,11.14h6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M7.71,14.57h3.43' />
    <path fill='none' d='M16.29,6H11.14A1.72,1.72,0,0,0,9.43,7.71V18' />
    <path fill='none' strokeOpacity='.2' d='M9.43,11.14h6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M7.71,14.57h3.43' />
    <path fill='none' d='M16.29,6H11.14A1.72,1.72,0,0,0,9.43,7.71V18' />
    <path fill='none' stroke={secondaryColor} d='M9.43,11.14h6' />
  </Fragment>
)

const Frank = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Frank
