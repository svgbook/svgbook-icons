import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.57,18h-7a1.72,1.72,0,0,1-1.72-1.71,2,2,0,0,1,0-.25L10.29,6'
    />
    <path fill='none' d='M14.14,9.43,6.43,12.86' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M17.57,18h-7a1.72,1.72,0,0,1-1.72-1.71,2,2,0,0,1,0-.25L10.29,6'
    />
    <path fill='none' d='M14.14,9.43,6.43,12.86' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.57,18h-7a1.72,1.72,0,0,1-1.72-1.71,2,2,0,0,1,0-.25L10.29,6'
    />
    <path fill='none' strokeOpacity='.2' d='M14.14,9.43,6.43,12.86' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M17.57,18h-7a1.72,1.72,0,0,1-1.72-1.71,2,2,0,0,1,0-.25L10.29,6'
    />
    <path fill='none' stroke={secondaryColor} d='M14.14,9.43,6.43,12.86' />
  </Fragment>
)

const Litecoin = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Litecoin
