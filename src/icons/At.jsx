import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12.01' r='2.67' />
    <path
      fill='none'
      d='M14.67,12v1A1.67,1.67,0,0,0,18,13V12a6,6,0,1,0-3.67,5.52'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='12' cy='12.01' r='2.67' />
    <path
      fill='none'
      d='M14.67,12v1A1.67,1.67,0,0,0,18,13V12a6,6,0,1,0-3.67,5.52'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12.01' r='2.67' />
    <path
      fill='none'
      d='M14.67,12v1A1.67,1.67,0,0,0,18,13V12a6,6,0,1,0-3.67,5.52'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12.01' r='2.67' />
    <path
      fill='none'
      d='M14.67,12v1A1.67,1.67,0,0,0,18,13V12a6,6,0,1,0-3.67,5.52'
    />
  </Fragment>
)

const At = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default At
