import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M11.6,17.2H6l5.6-5.6H6' />
    <path fill='none' d='M15.6,17.2V6.8' />
    <path fill='none' d='M13.2,14.4,18,11.6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M11.6,17.2H6l5.6-5.6H6' />
    <path fill='none' d='M15.6,17.2V6.8' />
    <path fill='none' d='M13.2,14.4,18,11.6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M11.6,17.2H6l5.6-5.6H6' />
    <path fill='none' d='M15.6,17.2V6.8' />
    <path fill='none' strokeOpacity='.2' d='M13.2,14.4,18,11.6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M11.6,17.2H6l5.6-5.6H6' />
    <path fill='none' d='M15.6,17.2V6.8' />
    <path fill='none' stroke={secondaryColor} d='M13.2,14.4,18,11.6' />
  </Fragment>
)

const Zloty = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Zloty
