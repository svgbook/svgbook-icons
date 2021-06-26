import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='5.65' y1='18' x2='18.35' y2='18' />
    <path
      fill='none'
      d='M6.35,18V7.42A1.41,1.41,0,0,1,7.76,6h8.47a1.41,1.41,0,0,1,1.41,1.41V18'
    />
    <path fill='none' d='M9.88,18V12.36a2.12,2.12,0,1,1,4.23,0V18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18.35,17.5h-.21V7.42a1.91,1.91,0,0,0-1.91-1.91H7.76A1.91,1.91,0,0,0,5.85,7.42V17.5h-.2a.5.5,0,1,0,0,1h12.7a.5.5,0,0,0,0-1Zm-3.74,0h-1V12.36a1.62,1.62,0,1,0-3.23,0V17.5h-1V12.36a2.62,2.62,0,1,1,5.23,0Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.64,7.42V18H14.11V12.36a2.12,2.12,0,1,0-4.23,0V18H6.35V7.42A1.41,1.41,0,0,1,7.76,6h8.47A1.41,1.41,0,0,1,17.64,7.42Z'
    />
    <line x1='18.35' y1='18' x2='17.64' y2='18' />
    <line x1='14.11' y1='18' x2='9.88' y2='18' />
    <line x1='6.35' y1='18' x2='5.65' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M17.64,7.42V18H14.11V12.36a2.12,2.12,0,1,0-4.23,0V18H6.35V7.42A1.41,1.41,0,0,1,7.76,6h8.47A1.41,1.41,0,0,1,17.64,7.42Z'
    />
    <line x1='18.35' y1='18' x2='17.64' y2='18' />
    <line x1='14.11' y1='18' x2='9.88' y2='18' />
    <line x1='6.35' y1='18' x2='5.65' y2='18' />
  </Fragment>
)

const Arch = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Arch
