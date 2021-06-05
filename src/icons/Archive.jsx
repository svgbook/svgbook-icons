import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6.77,6H17.23a1.5,1.5,0,0,1,1.5,1.5h0A1.5,1.5,0,0,1,17.23,9H6.77a1.5,1.5,0,0,1-1.5-1.49h0A1.5,1.5,0,0,1,6.77,6Z'
    />
    <path
      fill='none'
      d='M6.77,9v7.47A1.5,1.5,0,0,0,8.26,18h7.48a1.5,1.5,0,0,0,1.49-1.5V9'
    />
    <line x1='10.51' y1='12' x2='13.5' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.23,8.51H6.77a.5.5,0,0,0-.5.5v7.47a2,2,0,0,0,2,2h7.48a2,2,0,0,0,2-2V9A.5.5,0,0,0,17.23,8.51Zm-3.73,4h-3a.5.5,0,1,1,0-1h3a.5.5,0,0,1,0,1Z'
    />
    <path
      stroke='none'
      d='M17.23,9.51H6.77a2,2,0,1,1,0-4H17.23a2,2,0,1,1,0,4Zm-10.46-3a1,1,0,1,0,0,2H17.23a1,1,0,1,0,0-2Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6.77,6H17.23a1.5,1.5,0,0,1,1.5,1.5h0A1.5,1.5,0,0,1,17.23,9H6.77a1.5,1.5,0,0,1-1.5-1.49h0A1.5,1.5,0,0,1,6.77,6Z'
    />
    <path
      fillOpacity='.2'
      d='M6.77,9v7.47A1.5,1.5,0,0,0,8.26,18h7.48a1.5,1.5,0,0,0,1.49-1.5V9'
    />
    <line x1='10.51' y1='12' x2='13.5' y2='12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M6.77,9v7.47A1.5,1.5,0,0,0,8.26,18h7.48a1.5,1.5,0,0,0,1.49-1.5V9'
    />
    <path
      fill='none'
      d='M6.77,6H17.23a1.5,1.5,0,0,1,1.5,1.5h0A1.5,1.5,0,0,1,17.23,9H6.77a1.5,1.5,0,0,1-1.5-1.49h0A1.5,1.5,0,0,1,6.77,6Z'
    />
    <line x1='10.51' y1='12' x2='13.5' y2='12' />
  </Fragment>
)

const Archive = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Archive
