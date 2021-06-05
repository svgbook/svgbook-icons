import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='8.11' y1='12' x2='19' y2='12' />
    <path fill='none' d='M16.67,14.33,19,12,16.67,9.67' />
    <path fill='none' d='M5,10.44H8.11v3.12H5Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='8.11' y1='12' x2='19' y2='12' />
    <path fill='none' d='M16.67,14.33,19,12,16.67,9.67' />
    <path d='M5,10.44H8.11v3.12H5Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='8.11' y1='12' x2='19' y2='12' />
    <path fill='none' d='M16.67,14.33,19,12,16.67,9.67' />
    <path fillOpacity='.2' d='M5,10.44H8.11v3.12H5Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='8.11' y1='12' x2='19' y2='12' />
    <path fill='none' d='M16.67,14.33,19,12,16.67,9.67' />
    <path fill={secondaryColor} d='M5,10.44H8.11v3.12H5Z' />
  </Fragment>
)

const ArrowRightSquare = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowRightSquare
