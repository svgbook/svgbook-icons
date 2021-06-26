import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='9' r='3' />
    <path fill='none' d='M9,15a3,3,0,0,0,6,0V9' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='9' r='3' />
    <path fill='none' d='M9,15a3,3,0,0,0,6,0V9' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='9' r='3' />
    <path fill='none' d='M9,15a3,3,0,0,0,6,0V9' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='9' r='3' />
    <path fill='none' d='M9,15a3,3,0,0,0,6,0V9' />
  </Fragment>
)

const Nine = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Nine
