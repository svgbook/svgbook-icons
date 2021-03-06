import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='15.14' y1='12' x2='15.14' y2='11.7' />
    <line x1='13.34' y1='12' x2='13.34' y2='11.1' />
    <line x1='11.54' y1='11.7' x2='11.54' y2='11.1' />
    <path
      fill='none'
      d='M16.94,11.7v2.7a3.6,3.6,0,0,1-3.6,3.6H12.27a3.62,3.62,0,0,1-3-1.62,1.74,1.74,0,0,1-.11-.18c-.19-.29-.85-1.43-2-3.44a.9.9,0,0,1,.33-1.21,1.12,1.12,0,0,1,1.36.17l.88.88V11.1a.9.9,0,0,1,1.8,0V6.9a.9.9,0,0,1,1.8,0v4.2a.9.9,0,0,1,1.8,0v.6a.9.9,0,0,1,1.8,0Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='15.14' y1='12' x2='15.14' y2='11.7' />
    <line x1='13.34' y1='12' x2='13.34' y2='11.1' />
    <line x1='11.54' y1='11.7' x2='11.54' y2='11.1' />
    <path d='M16.94,11.7v2.7a3.6,3.6,0,0,1-3.6,3.6H12.27a3.62,3.62,0,0,1-3-1.62,1.74,1.74,0,0,1-.11-.18c-.19-.29-.85-1.43-2-3.44a.9.9,0,0,1,.33-1.21,1.12,1.12,0,0,1,1.36.17l.88.88V11.1a.9.9,0,0,1,1.8,0V6.9a.9.9,0,0,1,1.8,0v4.2a.9.9,0,0,1,1.8,0v.6a.9.9,0,0,1,1.8,0Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.94,11.7v2.7a3.6,3.6,0,0,1-3.6,3.6H12.27a3.62,3.62,0,0,1-3-1.62,1.74,1.74,0,0,1-.11-.18c-.19-.29-.85-1.43-2-3.44a.9.9,0,0,1,.33-1.21,1.12,1.12,0,0,1,1.36.17l.88.88V11.1a.9.9,0,0,1,1.8,0V6.9a.9.9,0,0,1,1.8,0v4.2a.9.9,0,0,1,1.8,0v.6a.9.9,0,0,1,1.8,0Z'
    />
    <line x1='15.14' y1='12' x2='15.14' y2='11.7' />
    <line x1='13.34' y1='12' x2='13.34' y2='11.1' />
    <line x1='11.54' y1='11.7' x2='11.54' y2='11.1' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.94,11.7v2.7a3.6,3.6,0,0,1-3.6,3.6H12.27a3.62,3.62,0,0,1-3-1.62,1.74,1.74,0,0,1-.11-.18c-.19-.29-.85-1.43-2-3.44a.9.9,0,0,1,.33-1.21,1.12,1.12,0,0,1,1.36.17l.88.88V11.1a.9.9,0,0,1,1.8,0V6.9a.9.9,0,0,1,1.8,0v4.2a.9.9,0,0,1,1.8,0v.6a.9.9,0,0,1,1.8,0Z'
    />
    <line x1='15.14' y1='12' x2='15.14' y2='11.7' />
    <line x1='13.34' y1='12' x2='13.34' y2='11.1' />
    <line x1='11.54' y1='11.7' x2='11.54' y2='11.1' />
  </Fragment>
)

const HandMiddleFinger = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default HandMiddleFinger
