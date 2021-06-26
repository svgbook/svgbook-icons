import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='5.65' y='8.82' width='12.71' height='9.18' rx='1.41' />
    <path
      fill='none'
      d='M9.18,8.82V7.41A1.41,1.41,0,0,1,10.59,6h2.82a1.41,1.41,0,0,1,1.41,1.41V8.82'
    />
    <line x1='12' y1='12.35' x2='12' y2='12.36' />
    <path fill='none' d='M5.65,13.06a14.13,14.13,0,0,0,12.7,0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.94,8.32H15.32V7.41A1.91,1.91,0,0,0,13.41,5.5H10.59A1.91,1.91,0,0,0,8.68,7.41v.91H7.06a1.91,1.91,0,0,0-1.91,1.91v6.36A1.91,1.91,0,0,0,7.06,18.5h9.88a1.91,1.91,0,0,0,1.91-1.91V10.23A1.91,1.91,0,0,0,16.94,8.32ZM9.68,7.41a.91.91,0,0,1,.91-.91h2.82a.91.91,0,0,1,.91.91v.91H9.68Zm2.82,4.94h0a.5.5,0,1,1-.5-.5A.5.5,0,0,1,12.5,12.36Zm5.35,1.5a14.75,14.75,0,0,1-11.7,0V12.74a13.62,13.62,0,0,0,11.7,0Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect
      fillOpacity='.2'
      x='5.65'
      y='8.82'
      width='12.71'
      height='9.18'
      rx='1.41'
    />
    <path
      fill='none'
      d='M9.18,8.82V7.41A1.41,1.41,0,0,1,10.59,6h2.82a1.41,1.41,0,0,1,1.41,1.41V8.82'
    />
    <line x1='12' y1='12.35' x2='12' y2='12.36' />
    <path fill='none' d='M5.65,13.06a14.13,14.13,0,0,0,12.7,0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='5.65'
      y='8.82'
      width='12.71'
      height='9.18'
      rx='1.41'
    />
    <path
      fill='none'
      d='M9.18,8.82V7.41A1.41,1.41,0,0,1,10.59,6h2.82a1.41,1.41,0,0,1,1.41,1.41V8.82'
    />
    <line x1='12' y1='12.35' x2='12' y2='12.36' />
    <path fill='none' d='M5.65,13.06a14.13,14.13,0,0,0,12.7,0' />
  </Fragment>
)

const Briefcase = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Briefcase
