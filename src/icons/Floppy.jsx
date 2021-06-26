import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15,6H13.5V9H9V6H7.5A1.5,1.5,0,0,0,6,7.5v9A1.5,1.5,0,0,0,7.5,18h9A1.5,1.5,0,0,0,18,16.5V9Zm-3,9a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,15Z'
    />
    <rect fill='none' x='9' y='6' width='4.5' height='3' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M15,6H13.5V9H9V6H7.5A1.5,1.5,0,0,0,6,7.5v9A1.5,1.5,0,0,0,7.5,18h9A1.5,1.5,0,0,0,18,16.5V9Zm-3,9a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,15Z' />
    <rect fill='none' x='9' y='6' width='4.5' height='3' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M15,6H13.5V9H9V6H7.5A1.5,1.5,0,0,0,6,7.5v9A1.5,1.5,0,0,0,7.5,18h9A1.5,1.5,0,0,0,18,16.5V9Zm-3,9a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,15Z'
    />
    <rect fill='none' x='9' y='6' width='4.5' height='3' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M15,6H13.5V9H9V6H7.5A1.5,1.5,0,0,0,6,7.5v9A1.5,1.5,0,0,0,7.5,18h9A1.5,1.5,0,0,0,18,16.5V9Zm-3,9a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,15Z'
    />
    <rect fill='none' x='9' y='6' width='4.5' height='3' />
  </Fragment>
)

const Floppy = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Floppy
