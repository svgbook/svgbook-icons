import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.28,14.84A6,6,0,0,1,6.68,9.28a3.87,3.87,0,0,1,.67-3c.06.6.39.8.73,1.12a1.45,1.45,0,0,1,1.25,0c.54-.6,1.12-1.56,1.74-1.39a2.49,2.49,0,0,0-.16.33A1.85,1.85,0,0,0,12,8.79c-.11.65-1,1.27-1.83,1.79s-.48,1.22,0,1.48,2.4-.66,3,.24c-1.13.06-1,2.06-2.65,1.81a3.75,3.75,0,0,0,3.63-.23,4.64,4.64,0,0,0,1.91-3.69A4.43,4.43,0,0,0,15.23,7,6,6,0,0,1,17.28,14.84Z'
    />
    <path fill='none' d='M10.89,6.35H12A5.44,5.44,0,0,1,15.2,7l0,0h0' />
    <path fill='none' d='M7.28,10.39a2,2,0,0,1-.6-1.11' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M17.28,14.84A6,6,0,0,1,6.68,9.28a3.87,3.87,0,0,1,.67-3c.06.6.39.8.73,1.12a1.45,1.45,0,0,1,1.25,0c.54-.6,1.12-1.56,1.74-1.39a2.49,2.49,0,0,0-.16.33A1.85,1.85,0,0,0,12,8.79c-.11.65-1,1.27-1.83,1.79s-.48,1.22,0,1.48,2.4-.66,3,.24c-1.13.06-1,2.06-2.65,1.81a3.75,3.75,0,0,0,3.63-.23,4.64,4.64,0,0,0,1.91-3.69A4.43,4.43,0,0,0,15.23,7,6,6,0,0,1,17.28,14.84Z' />
    <path d='M10.89,6.35H12A5.44,5.44,0,0,1,15.2,7l0,0h0' />
    <path d='M7.28,10.39a2,2,0,0,1-.6-1.11' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.28,14.84A6,6,0,0,1,6.68,9.28a3.87,3.87,0,0,1,.67-3c.06.6.39.8.73,1.12a1.45,1.45,0,0,1,1.25,0c.54-.6,1.12-1.56,1.74-1.39a2.49,2.49,0,0,0-.16.33A1.85,1.85,0,0,0,12,8.79c-.11.65-1,1.27-1.83,1.79s-.48,1.22,0,1.48,2.4-.66,3,.24c-1.13.06-1,2.06-2.65,1.81a3.75,3.75,0,0,0,3.63-.23,4.64,4.64,0,0,0,1.91-3.69A4.43,4.43,0,0,0,15.23,7,6,6,0,0,1,17.28,14.84Z'
    />
    <path fill='none' d='M10.89,6.35H12A5.44,5.44,0,0,1,15.2,7l0,0h0' />
    <path fill='none' d='M7.28,10.39a2,2,0,0,1-.6-1.11' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M17.28,14.84A6,6,0,0,1,6.68,9.28a3.87,3.87,0,0,1,.67-3c.06.6.39.8.73,1.12a1.45,1.45,0,0,1,1.25,0c.54-.6,1.12-1.56,1.74-1.39a2.49,2.49,0,0,0-.16.33A1.85,1.85,0,0,0,12,8.79c-.11.65-1,1.27-1.83,1.79s-.48,1.22,0,1.48,2.4-.66,3,.24c-1.13.06-1,2.06-2.65,1.81a3.75,3.75,0,0,0,3.63-.23,4.64,4.64,0,0,0,1.91-3.69A4.43,4.43,0,0,0,15.23,7,6,6,0,0,1,17.28,14.84Z'
    />
    <path fill='none' d='M10.89,6.35H12A5.44,5.44,0,0,1,15.2,7l0,0h0' />
    <path fill='none' d='M7.28,10.39a2,2,0,0,1-.6-1.11' />
  </Fragment>
)

const Firefox = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Firefox