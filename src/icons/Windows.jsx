import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.35,16.9A1.45,1.45,0,0,1,6,15.48V8.56A1.47,1.47,0,0,1,7.35,7.13l9-1.12A1.48,1.48,0,0,1,18,7.43v9.1A1.44,1.44,0,0,1,16.37,18Z'
    />
    <line x1='12.01' y1='6.76' x2='12.01' y2='17.28' />
    <line x1='6' y1='12.02' x2='18.02' y2='12.02' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M7.35,16.9A1.45,1.45,0,0,1,6,15.48V8.56A1.47,1.47,0,0,1,7.35,7.13l9-1.12A1.48,1.48,0,0,1,18,7.43v9.1A1.44,1.44,0,0,1,16.37,18Z'
    />
    <line x1='12.01' y1='6.76' x2='12.01' y2='17.28' />
    <line x1='6' y1='12.02' x2='18.02' y2='12.02' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.35,16.9A1.45,1.45,0,0,1,6,15.48V8.56A1.47,1.47,0,0,1,7.35,7.13l9-1.12A1.48,1.48,0,0,1,18,7.43v9.1A1.44,1.44,0,0,1,16.37,18Z'
    />
    <line x1='12.01' y1='6.76' x2='12.01' y2='17.28' />
    <line x1='6' y1='12.02' x2='18.02' y2='12.02' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.35,16.9A1.45,1.45,0,0,1,6,15.48V8.56A1.47,1.47,0,0,1,7.35,7.13l9-1.12A1.48,1.48,0,0,1,18,7.43v9.1A1.44,1.44,0,0,1,16.37,18Z'
    />
    <line x1='12.01' y1='6.76' x2='12.01' y2='17.28' />
    <line x1='6' y1='12.02' x2='18.02' y2='12.02' />
  </Fragment>
)

const Windows = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Windows
