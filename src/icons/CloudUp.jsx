import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,15a2.68,2.68,0,1,1,0-5.35,3.36,3.36,0,0,1,3.93-2.35,3,3,0,0,1,2.61,3.54h.59a2.08,2.08,0,1,1,0,4.16h-.59'
    />
    <polyline fill='none' points='9.98 13.2 11.76 11.42 13.54 13.2' />
    <line x1='11.76' y1='11.42' x2='11.76' y2='16.77' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,15a2.68,2.68,0,1,1,0-5.35,3.36,3.36,0,0,1,3.93-2.35,3,3,0,0,1,2.61,3.54h.59a2.08,2.08,0,1,1,0,4.16h-.59'
    />
    <polyline fill='none' points='9.98 13.2 11.76 11.42 13.54 13.2' />
    <line x1='11.76' y1='11.42' x2='11.76' y2='16.77' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M8.79,15a2.68,2.68,0,1,1,0-5.35,3.36,3.36,0,0,1,3.93-2.35,3,3,0,0,1,2.61,3.54h.59a2.08,2.08,0,1,1,0,4.16h-.59'
    />
    <polyline fill='none' points='9.98 13.2 11.76 11.42 13.54 13.2' />
    <line x1='11.76' y1='11.42' x2='11.76' y2='16.77' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,15a2.68,2.68,0,1,1,0-5.35,3.36,3.36,0,0,1,3.93-2.35,3,3,0,0,1,2.61,3.54h.59a2.08,2.08,0,1,1,0,4.16h-.59'
    />
    <polyline
      fill='none'
      stroke={secondaryColor}
      points='9.98 13.2 11.76 11.42 13.54 13.2'
    />
    <line stroke={secondaryColor} x1='11.76' y1='11.42' x2='11.76' y2='16.77' />
  </Fragment>
)

const CloudUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CloudUp
