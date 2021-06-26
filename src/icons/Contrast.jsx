import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M12,15.33a3.33,3.33,0,0,0,0-6.66v6.66' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path d='M12,15.33a3.33,3.33,0,0,0,0-6.66v6.66' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fillOpacity='.2' d='M12,15.33a3.33,3.33,0,0,0,0-6.66v6.66' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill={secondaryColor} d='M12,15.33a3.33,3.33,0,0,0,0-6.66v6.66' />
  </Fragment>
)

const Contrast = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Contrast
