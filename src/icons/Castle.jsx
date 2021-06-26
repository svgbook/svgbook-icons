import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M14,16.33V15a2,2,0,0,0-4,0v1.33a.67.67,0,0,1-.67.67H6.67A.67.67,0,0,1,6,16.33V7H8.67V9h2V7h2.66V9h2V7H18v9.33a.67.67,0,0,1-.67.67H14.67A.67.67,0,0,1,14,16.33Z'
    />
    <line x1='6' y1='11' x2='18' y2='11' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M14,16.33V15a2,2,0,0,0-4,0v1.33a.67.67,0,0,1-.67.67H6.67A.67.67,0,0,1,6,16.33V7H8.67V9h2V7h2.66V9h2V7H18v9.33a.67.67,0,0,1-.67.67H14.67A.67.67,0,0,1,14,16.33Z' />
    <line x1='6' y1='11' x2='18' y2='11' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M14,16.33V15a2,2,0,0,0-4,0v1.33a.67.67,0,0,1-.67.67H6.67A.67.67,0,0,1,6,16.33V7H8.67V9h2V7h2.66V9h2V7H18v9.33a.67.67,0,0,1-.67.67H14.67A.67.67,0,0,1,14,16.33Z'
    />
    <line x1='6' y1='11' x2='18' y2='11' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M14,16.33V15a2,2,0,0,0-4,0v1.33a.67.67,0,0,1-.67.67H6.67A.67.67,0,0,1,6,16.33V7H8.67V9h2V7h2.66V9h2V7H18v9.33a.67.67,0,0,1-.67.67H14.67A.67.67,0,0,1,14,16.33Z'
    />
    <line x1='6' y1='11' x2='18' y2='11' />
  </Fragment>
)

const Castle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Castle
