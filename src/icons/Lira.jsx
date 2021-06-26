import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M10.8,6V18a5.6,5.6,0,0,0,5.6-5.6' />
    <path fill='none' d='M7.6,14,14,10.8' />
    <path fill='none' d='M14,7.6,7.6,10.8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M10.8,6V18a5.6,5.6,0,0,0,5.6-5.6' />
    <path fill='none' d='M7.6,14,14,10.8' />
    <path fill='none' d='M14,7.6,7.6,10.8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M10.8,6V18a5.6,5.6,0,0,0,5.6-5.6' />
    <path fill='none' strokeOpacity='.2' d='M7.6,14,14,10.8' />
    <path fill='none' strokeOpacity='.2' d='M14,7.6,7.6,10.8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M10.8,6V18a5.6,5.6,0,0,0,5.6-5.6' />
    <path fill='none' stroke={secondaryColor} d='M7.6,14,14,10.8' />
    <path fill='none' stroke={secondaryColor} d='M14,7.6,7.6,10.8' />
  </Fragment>
)

const Lira = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Lira
