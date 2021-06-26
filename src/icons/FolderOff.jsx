import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fill='none'
      d='M16.67,16.67H7.33A1.34,1.34,0,0,1,6,15.33V8a1.33,1.33,0,0,1,.78-1.21m2.55-.12H10l2,2h4.67A1.33,1.33,0,0,1,18,10v5.33'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path d='M16.67,16.67H7.33A1.34,1.34,0,0,1,6,15.33V8a1.33,1.33,0,0,1,.78-1.21Z' />
    <path d='M9.33,6.67H10l2,2h4.67A1.33,1.33,0,0,1,18,10v5.33Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fillOpacity='.2'
      d='M16.67,16.67H7.33A1.34,1.34,0,0,1,6,15.33V8a1.33,1.33,0,0,1,.78-1.21Z'
    />
    <path
      fillOpacity='.2'
      d='M9.33,6.67H10l2,2h4.67A1.33,1.33,0,0,1,18,10v5.33Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fill={secondaryColor}
      d='M16.67,16.67H7.33A1.34,1.34,0,0,1,6,15.33V8a1.33,1.33,0,0,1,.78-1.21Z'
    />
    <path
      fill={secondaryColor}
      d='M9.33,6.67H10l2,2h4.67A1.33,1.33,0,0,1,18,10v5.33Z'
    />
  </Fragment>
)

const FolderOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FolderOff
