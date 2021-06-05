import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='15.33' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <path fill='none' d='M10.67,18V15.33h2.66V18Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='15.33' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <path d='M10.67,18V15.33h2.66V18Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='12' y1='15.33' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <path fillOpacity='.2' d='M10.67,18V15.33h2.66V18Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='12' y1='15.33' x2='12' y2='6' />
    <path fill='none' d='M14,8,12,6,10,8' />
    <path fill={secondaryColor} d='M10.67,18V15.33h2.66V18Z' />
  </Fragment>
)

const ArrowTopSquare = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowTopSquare
