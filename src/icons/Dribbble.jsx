import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M10,6.4c3.33,4,4.67,7,5,10.8' />
    <path fill='none' d='M8.27,16.67c2.33-2.34,4-4.34,9.66-4.27' />
    <path fill='none' d='M6.07,11.17c3.33,0,6.54-.26,10.21-3.34' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path fill='none' d='M10,6.4c3.33,4,4.67,7,5,10.8' />
    <path fill='none' d='M8.27,16.67c2.33-2.34,4-4.34,9.66-4.27' />
    <path fill='none' d='M6.07,11.17c3.33,0,6.54-.26,10.21-3.34' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path fill='none' d='M10,6.4c3.33,4,4.67,7,5,10.8' />
    <path fill='none' d='M8.27,16.67c2.33-2.34,4-4.34,9.66-4.27' />
    <path fill='none' d='M6.07,11.17c3.33,0,6.54-.26,10.21-3.34' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path fill='none' d='M10,6.4c3.33,4,4.67,7,5,10.8' />
    <path fill='none' d='M8.27,16.67c2.33-2.34,4-4.34,9.66-4.27' />
    <path fill='none' d='M6.07,11.17c3.33,0,6.54-.26,10.21-3.34' />
  </Fragment>
)

const Dribbble = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Dribbble
