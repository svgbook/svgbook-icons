import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fill='none'
      d='M8.67,6h4.66l3.34,3.33V14m0,2.67A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path d='M16.67,16.67A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33Z' />
    <polygon points='8.67 6 13.33 6 16.67 9.33 16.67 14 8.67 6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.67,16.67A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33Z'
    />
    <polygon
      fillOpacity='.2'
      points='8.67 6 13.33 6 16.67 9.33 16.67 14 8.67 6'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.67,16.67A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33Z'
    />
    <polygon
      fill={secondaryColor}
      points='8.67 6 13.33 6 16.67 9.33 16.67 14 8.67 6'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const FileOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileOff
