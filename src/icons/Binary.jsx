import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.43,10.29V6H8.57m6.86,12V13.71h-.86' />
    <rect fill='none' x='12.86' y='6' width='2.57' height='4.29' rx='0.43' />
    <rect fill='none' x='8.57' y='13.71' width='2.57' height='4.29' rx='0.43' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M9.43,10.29V6H8.57m6.86,12V13.71h-.86' />
    <rect x='12.86' y='6' width='2.57' height='4.29' rx='0.43' />
    <rect x='8.57' y='13.71' width='2.57' height='4.29' rx='0.43' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.43,10.29V6H8.57m6.86,12V13.71h-.86' />
    <rect
      fillOpacity='.2'
      x='12.86'
      y='6'
      width='2.57'
      height='4.29'
      rx='0.43'
    />
    <rect
      fillOpacity='.2'
      x='8.57'
      y='13.71'
      width='2.57'
      height='4.29'
      rx='0.43'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M9.43,10.29V6H8.57m6.86,12V13.71h-.86' />
    <rect
      fill={secondaryColor}
      x='12.86'
      y='6'
      width='2.57'
      height='4.29'
      rx='0.43'
    />
    <rect
      fill={secondaryColor}
      x='8.57'
      y='13.71'
      width='2.57'
      height='4.29'
      rx='0.43'
    />
  </Fragment>
)

const Binary = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Binary
