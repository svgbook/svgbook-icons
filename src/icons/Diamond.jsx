import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8,7.1h8l2,3.33-5.67,6.33a.46.46,0,0,1-.66,0h0L6,10.43,8,7.1'
    />
    <path fill='none' d='M10.67,11.76,9.33,10.3l.4-.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18.43,10.17l-2-3.33A.5.5,0,0,0,16,6.6H8a.5.5,0,0,0-.43.24l-2,3.33a.5.5,0,0,0,.06.59l5.69,6.37a1,1,0,0,0,.67.27,1,1,0,0,0,.72-.3l5.66-6.34A.5.5,0,0,0,18.43,10.17Zm-7.43,2a.46.46,0,0,1-.33.13.49.49,0,0,1-.37-.16L9,10.63A.5.5,0,0,1,8.9,10l.4-.67A.51.51,0,0,1,10,9.2a.5.5,0,0,1,.17.69l-.21.35L11,11.43A.49.49,0,0,1,11,12.13Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M8,7.1h8l2,3.33-5.67,6.33a.46.46,0,0,1-.66,0h0L6,10.43,8,7.1'
    />
    <path fill='none' d='M10.67,11.76,9.33,10.3l.4-.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M8,7.1h8l2,3.33-5.67,6.33a.46.46,0,0,1-.66,0h0L6,10.43,8,7.1'
    />
    <path fill='none' d='M10.67,11.76,9.33,10.3l.4-.67' />
  </Fragment>
)

const Diamond = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Diamond
