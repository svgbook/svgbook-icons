import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M19.06,12.4a3.15,3.15,0,0,1-2.62-2.18A2.48,2.48,0,0,0,15.76,12c0,.18-.24.75-.41.74H4.94c0,3.88,2.35,5.21,4.6,5.21,3.07,0,5.82-1,7.33-3.72C17.72,14.16,18.58,13.11,19.06,12.4Z'
    />
    <path fill='none' d='M6.42,10.51H8.65v2.23H6.42Z' />
    <path fill='none' d='M8.65,10.51h2.23v2.23H8.65Z' />
    <path fill='none' d='M10.88,10.51h2.24v2.23H10.88Z' />
    <path fill='none' d='M8.65,8.28h2.23v2.23H8.65Z' />
    <path fill='none' d='M10.88,8.28h2.24v2.23H10.88Z' />
    <path fill='none' d='M10.88,6.05h2.24V8.28H10.88Z' />
    <path fill='none' d='M6.11,16.46a2.83,2.83,0,0,0,2.19-.58' />
    <line x1='10.14' y1='14.97' x2='10.14' y2='14.98' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M19.06,12.4a3.15,3.15,0,0,1-2.62-2.18A2.48,2.48,0,0,0,15.76,12c0,.18-.24.75-.41.74H4.94c0,3.88,2.35,5.21,4.6,5.21,3.07,0,5.82-1,7.33-3.72C17.72,14.16,18.58,13.11,19.06,12.4Z'
    />
    <path fill='none' d='M6.42,10.51H8.65v2.23H6.42Z' />
    <path fill='none' d='M8.65,10.51h2.23v2.23H8.65Z' />
    <path fill='none' d='M10.88,10.51h2.24v2.23H10.88Z' />
    <path fill='none' d='M8.65,8.28h2.23v2.23H8.65Z' />
    <path fill='none' d='M10.88,8.28h2.24v2.23H10.88Z' />
    <path fill='none' d='M10.88,6.05h2.24V8.28H10.88Z' />
    <path fill='none' d='M6.11,16.46a2.83,2.83,0,0,0,2.19-.58' />
    <line x1='10.14' y1='14.97' x2='10.14' y2='14.98' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M19.06,12.4a3.15,3.15,0,0,1-2.62-2.18A2.48,2.48,0,0,0,15.76,12c0,.18-.24.75-.41.74H4.94c0,3.88,2.35,5.21,4.6,5.21,3.07,0,5.82-1,7.33-3.72C17.72,14.16,18.58,13.11,19.06,12.4Z'
    />
    <path fill='none' d='M6.42,10.51H8.65v2.23H6.42Z' />
    <path fill='none' d='M8.65,10.51h2.23v2.23H8.65Z' />
    <path fill='none' d='M10.88,10.51h2.24v2.23H10.88Z' />
    <path fill='none' d='M8.65,8.28h2.23v2.23H8.65Z' />
    <path fill='none' d='M10.88,8.28h2.24v2.23H10.88Z' />
    <path fill='none' d='M10.88,6.05h2.24V8.28H10.88Z' />
    <path fill='none' d='M6.11,16.46a2.83,2.83,0,0,0,2.19-.58' />
    <line x1='10.14' y1='14.97' x2='10.14' y2='14.98' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M19.06,12.4a3.15,3.15,0,0,1-2.62-2.18A2.48,2.48,0,0,0,15.76,12c0,.18-.24.75-.41.74H4.94c0,3.88,2.35,5.21,4.6,5.21,3.07,0,5.82-1,7.33-3.72C17.72,14.16,18.58,13.11,19.06,12.4Z'
    />
    <path fill='none' d='M6.42,10.51H8.65v2.23H6.42Z' />
    <path fill='none' d='M8.65,10.51h2.23v2.23H8.65Z' />
    <path fill='none' d='M10.88,10.51h2.24v2.23H10.88Z' />
    <path fill='none' d='M8.65,8.28h2.23v2.23H8.65Z' />
    <path fill='none' d='M10.88,8.28h2.24v2.23H10.88Z' />
    <path fill='none' d='M10.88,6.05h2.24V8.28H10.88Z' />
    <path fill='none' d='M6.11,16.46a2.83,2.83,0,0,0,2.19-.58' />
    <line x1='10.14' y1='14.97' x2='10.14' y2='14.98' />
  </Fragment>
)

const Docker = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Docker
