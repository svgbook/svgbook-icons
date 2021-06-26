import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='18' x2='18' y2='18' />
    <path
      fill='none'
      d='M6,8.67v.66a2,2,0,0,0,4,0V8.67m0,.66a2,2,0,0,0,4,0V8.67m0,.66a2,2,0,0,0,4,0V8.67H6L7.33,6h9.34L18,8.67'
    />
    <line x1='7.33' y1='18' x2='7.33' y2='11.23' />
    <line x1='16.67' y1='18' x2='16.67' y2='11.23' />
    <path
      fill='none'
      d='M10,18V15.33A1.34,1.34,0,0,1,11.33,14h1.34A1.34,1.34,0,0,1,14,15.33V18'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='18' x2='18' y2='18' />
    <path d='M6,8.67v.66a2,2,0,0,0,4,0V8.67m0,.66a2,2,0,0,0,4,0V8.67m0,.66a2,2,0,0,0,4,0V8.67H6L7.33,6h9.34L18,8.67' />
    <line x1='7.33' y1='18' x2='7.33' y2='11.23' />
    <line x1='16.67' y1='18' x2='16.67' y2='11.23' />
    <path
      fill='none'
      d='M10,18V15.33A1.34,1.34,0,0,1,11.33,14h1.34A1.34,1.34,0,0,1,14,15.33V18'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6' y1='18' x2='18' y2='18' />
    <path
      fillOpacity='.2'
      d='M6,8.67v.66a2,2,0,0,0,4,0V8.67m0,.66a2,2,0,0,0,4,0V8.67m0,.66a2,2,0,0,0,4,0V8.67H6L7.33,6h9.34L18,8.67'
    />
    <line x1='7.33' y1='18' x2='7.33' y2='11.23' />
    <line x1='16.67' y1='18' x2='16.67' y2='11.23' />
    <path
      fill='none'
      d='M10,18V15.33A1.34,1.34,0,0,1,11.33,14h1.34A1.34,1.34,0,0,1,14,15.33V18'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6' y1='18' x2='18' y2='18' />
    <path
      fill={secondaryColor}
      d='M6,8.67v.66a2,2,0,0,0,4,0V8.67m0,.66a2,2,0,0,0,4,0V8.67m0,.66a2,2,0,0,0,4,0V8.67H6L7.33,6h9.34L18,8.67'
    />
    <line x1='7.33' y1='18' x2='7.33' y2='11.23' />
    <line x1='16.67' y1='18' x2='16.67' y2='11.23' />
    <path
      fill='none'
      d='M10,18V15.33A1.34,1.34,0,0,1,11.33,14h1.34A1.34,1.34,0,0,1,14,15.33V18'
    />
  </Fragment>
)

const Store = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Store
