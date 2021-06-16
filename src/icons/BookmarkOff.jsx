import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fill='none'
      d='M15.33,15.33v2l-3.33-2-3.33,2V8.67m.78-1.88A1.3,1.3,0,0,1,10,6.67h4A1.33,1.33,0,0,1,15.33,8v4.67'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M9.75,6h4.5a1.5,1.5,0,0,1,1.5,1.5V18L12,15.75,8.25,18V7.5A1.5,1.5,0,0,1,9.75,6'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M15.33,15.33v2l-3.33-2-3.33,2V8.67m.78-1.88A1.3,1.3,0,0,1,10,6.67h4A1.33,1.33,0,0,1,15.33,8v4.67'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M15.33,15.33v2l-3.33-2-3.33,2V8.67m.78-1.88A1.3,1.3,0,0,1,10,6.67h4A1.33,1.33,0,0,1,15.33,8v4.67'
    />
    <line stroke={secondaryColor} x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const BookmarkOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BookmarkOff
