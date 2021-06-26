import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M12,15.33l-.67-2.66L8.67,12l6-2.67Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path d='M12,15.33l-.67-2.66L8.67,12l6-2.67Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fillOpacity='.2' d='M12,15.33l-.67-2.66L8.67,12l6-2.67Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill={secondaryColor} d='M12,15.33l-.67-2.66L8.67,12l6-2.67Z' />
  </Fragment>
)

const GPS = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GPS
