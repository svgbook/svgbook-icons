import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M10.94,7.77h1.41v8.47C9.18,15.53,6.71,11.65,6,7.77' />
    <path fill='none' d='M18,7.77c-.71,1.41-2.12,3.52-3.53,4.23H12.35' />
    <path fill='none' d='M18,16.24c-.71-1.42-2.12-3.53-3.53-4.24' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M10.94,7.77h1.41v8.47C9.18,15.53,6.71,11.65,6,7.77' />
    <path fill='none' d='M18,7.77c-.71,1.41-2.12,3.52-3.53,4.23H12.35' />
    <path fill='none' d='M18,16.24c-.71-1.42-2.12-3.53-3.53-4.24' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M10.94,7.77h1.41v8.47C9.18,15.53,6.71,11.65,6,7.77' />
    <path fill='none' d='M18,7.77c-.71,1.41-2.12,3.52-3.53,4.23H12.35' />
    <path fill='none' d='M18,16.24c-.71-1.42-2.12-3.53-3.53-4.24' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M10.94,7.77h1.41v8.47C9.18,15.53,6.71,11.65,6,7.77' />
    <path fill='none' d='M18,7.77c-.71,1.41-2.12,3.52-3.53,4.23H12.35' />
    <path fill='none' d='M18,16.24c-.71-1.42-2.12-3.53-3.53-4.24' />
  </Fragment>
)

const VK = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default VK
