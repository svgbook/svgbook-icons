import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M11.25,6.38h-3A2.25,2.25,0,0,0,6,8.63v9' />
    <path fill='none' d='M10.5,11.63H6' />
    <path fill='none' d='M15,6.38v9.75a1.5,1.5,0,0,0,1.5,1.49H18' />
    <path fill='none' d='M17.25,10.13H13.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M11.25,6.38h-3A2.25,2.25,0,0,0,6,8.63v9' />
    <path fill='none' d='M10.5,11.63H6' />
    <path fill='none' d='M15,6.38v9.75a1.5,1.5,0,0,0,1.5,1.49H18' />
    <path fill='none' d='M17.25,10.13H13.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M11.25,6.38h-3A2.25,2.25,0,0,0,6,8.63v9' />
    <path fill='none' strokeOpacity='.2' d='M10.5,11.63H6' />
    <path fill='none' d='M15,6.38v9.75a1.5,1.5,0,0,0,1.5,1.49H18' />
    <path fill='none' strokeOpacity='.2' d='M17.25,10.13H13.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M11.25,6.38h-3A2.25,2.25,0,0,0,6,8.63v9' />
    <path fill='none' stroke={secondaryColor} d='M10.5,11.63H6' />
    <path fill='none' d='M15,6.38v9.75a1.5,1.5,0,0,0,1.5,1.49H18' />
    <path fill='none' stroke={secondaryColor} d='M17.25,10.13H13.5' />
  </Fragment>
)

const Forint = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Forint
