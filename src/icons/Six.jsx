import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='15' r='3' />
    <path fill='none' d='M15,9A3,3,0,0,0,9,9v6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='15' r='3' />
    <path fill='none' d='M15,9A3,3,0,0,0,9,9v6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='15' r='3' />
    <path fill='none' d='M15,9A3,3,0,0,0,9,9v6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='15' r='3' />
    <path fill='none' d='M15,9A3,3,0,0,0,9,9v6' />
  </Fragment>
)

const Six = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Six
