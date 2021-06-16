import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.67,6A1.43,1.43,0,0,0,7.33,7.5V9.75C7.33,11,6.74,12,6,12c.74,0,1.33,1,1.33,2.25V16.5A1.43,1.43,0,0,0,8.67,18'
    />
    <path
      fill='none'
      d='M15.33,6a1.43,1.43,0,0,1,1.34,1.5V9.75C16.67,11,17.26,12,18,12c-.74,0-1.33,1-1.33,2.25V16.5A1.43,1.43,0,0,1,15.33,18'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M8.67,6A1.43,1.43,0,0,0,7.33,7.5V9.75C7.33,11,6.74,12,6,12c.74,0,1.33,1,1.33,2.25V16.5A1.43,1.43,0,0,0,8.67,18'
    />
    <path
      fill='none'
      d='M15.33,6a1.43,1.43,0,0,1,1.34,1.5V9.75C16.67,11,17.26,12,18,12c-.74,0-1.33,1-1.33,2.25V16.5A1.43,1.43,0,0,1,15.33,18'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.67,6A1.43,1.43,0,0,0,7.33,7.5V9.75C7.33,11,6.74,12,6,12c.74,0,1.33,1,1.33,2.25V16.5A1.43,1.43,0,0,0,8.67,18'
    />
    <path
      fill='none'
      d='M15.33,6a1.43,1.43,0,0,1,1.34,1.5V9.75C16.67,11,17.26,12,18,12c-.74,0-1.33,1-1.33,2.25V16.5A1.43,1.43,0,0,1,15.33,18'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M8.67,6A1.43,1.43,0,0,0,7.33,7.5V9.75C7.33,11,6.74,12,6,12c.74,0,1.33,1,1.33,2.25V16.5A1.43,1.43,0,0,0,8.67,18'
    />
    <path
      fill='none'
      d='M15.33,6a1.43,1.43,0,0,1,1.34,1.5V9.75C16.67,11,17.26,12,18,12c-.74,0-1.33,1-1.33,2.25V16.5A1.43,1.43,0,0,1,15.33,18'
    />
  </Fragment>
)

const Braces = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Braces
