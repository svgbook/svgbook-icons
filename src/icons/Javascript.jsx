import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M17.82,6,16.36,16.55,12,18,7.64,16.55,6.18,6Z' />
    <path fill='none' d='M8.73,8.91h2.18v5.82L9.45,14' />
    <path
      fill='none'
      d='M15.27,8.91H13.45a.36.36,0,0,0-.36.36v2.18a.36.36,0,0,0,.36.37h1a.36.36,0,0,1,.36.36v.05l-.3,2.13-1.46.37'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18.2,5.67a.52.52,0,0,0-.38-.17H6.18a.48.48,0,0,0-.37.17.49.49,0,0,0-.12.4L7.14,16.61a.51.51,0,0,0,.34.41l4.36,1.45a.44.44,0,0,0,.32,0L16.52,17a.51.51,0,0,0,.34-.41L18.31,6.07A.52.52,0,0,0,18.2,5.67Zm-6.79,9.06a.52.52,0,0,1-.5.5.43.43,0,0,1-.22-.06l-1.46-.72A.49.49,0,0,1,9,13.78a.5.5,0,0,1,.67-.23l.73.37V9.41H8.73a.5.5,0,0,1,0-1h2.18a.5.5,0,0,1,.5.5Zm3.86-5.32H13.59v1.91h.9a.86.86,0,0,1,.86.86.57.57,0,0,1,0,.13L15,14.43a.5.5,0,0,1-.37.42l-1.46.36-.12,0a.49.49,0,0,1-.48-.38.5.5,0,0,1,.36-.61L14.1,14l.23-1.64h-.88a.87.87,0,0,1-.86-.87V9.27a.87.87,0,0,1,.86-.86h1.82a.5.5,0,0,1,0,1Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M17.82,6,16.36,16.55,12,18,7.64,16.55,6.18,6Z' />
    <path fill='none' d='M8.73,8.91h2.18v5.82L9.45,14' />
    <path
      fill='none'
      d='M15.27,8.91H13.45a.36.36,0,0,0-.36.36v2.18a.36.36,0,0,0,.36.37h1a.36.36,0,0,1,.36.36v.05l-.3,2.13-1.46.37'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M17.82,6,16.36,16.55,12,18,7.64,16.55,6.18,6Z'
    />
    <path fill='none' d='M8.73,8.91h2.18v5.82L9.45,14' />
    <path
      fill='none'
      d='M15.27,8.91H13.45a.36.36,0,0,0-.36.36v2.18a.36.36,0,0,0,.36.37h1a.36.36,0,0,1,.36.36v.05l-.3,2.13-1.46.37'
    />
  </Fragment>
)

const Javascript = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Javascript
