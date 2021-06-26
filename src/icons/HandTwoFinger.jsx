import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline points='11.54 12 11.54 8.1 11.54 7.5' />
    <path
      fill='none'
      d='M16.94,11.7v2.7a3.6,3.6,0,0,1-3.6,3.6H12.27a3.62,3.62,0,0,1-3-1.62l-.12-.18c-.18-.29-.84-1.43-2-3.44a.9.9,0,0,1,.33-1.21,1.11,1.11,0,0,1,1.36.17l.88.88V7.5a.9.9,0,0,1,1.8,0V6.9a.9.9,0,0,1,1.8,0v4.2a.9.9,0,0,1,1.8,0v.6a.9.9,0,0,1,1.8,0Z'
    />
    <line x1='15.14' y1='12' x2='15.14' y2='11.7' />
    <line x1='13.34' y1='12' x2='13.34' y2='11.1' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline points='11.54 12 11.54 8.1 11.54 7.5' />
    <path d='M16.94,11.7v2.7a3.6,3.6,0,0,1-3.6,3.6H12.27a3.62,3.62,0,0,1-3-1.62l-.12-.18c-.18-.29-.84-1.43-2-3.44a.9.9,0,0,1,.33-1.21,1.11,1.11,0,0,1,1.36.17l.88.88V7.5a.9.9,0,0,1,1.8,0V6.9a.9.9,0,0,1,1.8,0v4.2a.9.9,0,0,1,1.8,0v.6a.9.9,0,0,1,1.8,0Z' />
    <line x1='15.14' y1='12' x2='15.14' y2='11.7' />
    <line x1='13.34' y1='12' x2='13.34' y2='11.1' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline points='11.54 12 11.54 8.1 11.54 7.5' />
    <path
      fillOpacity='.2'
      d='M16.94,11.7v2.7a3.6,3.6,0,0,1-3.6,3.6H12.27a3.62,3.62,0,0,1-3-1.62l-.12-.18c-.18-.29-.84-1.43-2-3.44a.9.9,0,0,1,.33-1.21,1.11,1.11,0,0,1,1.36.17l.88.88V7.5a.9.9,0,0,1,1.8,0V6.9a.9.9,0,0,1,1.8,0v4.2a.9.9,0,0,1,1.8,0v.6a.9.9,0,0,1,1.8,0Z'
    />
    <line x1='15.14' y1='12' x2='15.14' y2='11.7' />
    <line x1='13.34' y1='12' x2='13.34' y2='11.1' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.94,11.7v2.7a3.6,3.6,0,0,1-3.6,3.6H12.27a3.62,3.62,0,0,1-3-1.62l-.12-.18c-.18-.29-.84-1.43-2-3.44a.9.9,0,0,1,.33-1.21,1.11,1.11,0,0,1,1.36.17l.88.88V7.5a.9.9,0,0,1,1.8,0V6.9a.9.9,0,0,1,1.8,0v4.2a.9.9,0,0,1,1.8,0v.6a.9.9,0,0,1,1.8,0Z'
    />
    <polyline points='11.54 12 11.54 8.1 11.54 7.5' />
    <line x1='15.14' y1='12' x2='15.14' y2='11.7' />
    <line x1='13.34' y1='12' x2='13.34' y2='11.1' />
  </Fragment>
)

const HandTwoFinger = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default HandTwoFinger
