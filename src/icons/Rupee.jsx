import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M7.29,6H9.86a3.43,3.43,0,0,1,0,6.86H7.29L12.43,18' />
    <line x1='7.29' y1='9.43' x2='16.71' y2='9.43' />
    <line x1='7.29' y1='6' x2='16.71' y2='6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M7.29,6H9.86a3.43,3.43,0,0,1,0,6.86H7.29L12.43,18' />
    <line x1='7.29' y1='9.43' x2='16.71' y2='9.43' />
    <line x1='7.29' y1='6' x2='16.71' y2='6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M7.29,6H9.86a3.43,3.43,0,0,1,0,6.86H7.29L12.43,18' />
    <line strokeOpacity='.2' x1='7.29' y1='9.43' x2='16.71' y2='9.43' />
    <line x1='7.29' y1='6' x2='16.71' y2='6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M7.29,6H9.86a3.43,3.43,0,0,1,0,6.86H7.29L12.43,18' />
    <line stroke={secondaryColor} x1='7.29' y1='9.43' x2='16.71' y2='9.43' />
    <line x1='7.29' y1='6' x2='16.71' y2='6' />
  </Fragment>
)

const Rupee = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Rupee
