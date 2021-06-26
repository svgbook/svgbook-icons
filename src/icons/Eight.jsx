import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='9' r='3' />
    <circle fill='none' cx='12' cy='15' r='3' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='9' r='3' />
    <circle cx='12' cy='15' r='3' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='9' r='3' />
    <circle fillOpacity='.2' cx='12' cy='15' r='3' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='9' r='3' />
    <circle fill={secondaryColor} cx='12' cy='15' r='3' />
  </Fragment>
)

const Eight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Eight
