import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,14.69A2.74,2.74,0,0,1,6,12,2.74,2.74,0,0,1,8.79,9.34,3.35,3.35,0,0,1,12.72,7a3,3,0,0,1,2.61,3.53h.59a2.08,2.08,0,1,1,0,4.16'
    />
    <path
      fill='none'
      d='M11.17,11.72v1.19m0,1.78v1.19m2.38-3v1.18m0,1.79v1.18'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,14.69A2.74,2.74,0,0,1,6,12,2.74,2.74,0,0,1,8.79,9.34,3.35,3.35,0,0,1,12.72,7a3,3,0,0,1,2.61,3.53h.59a2.08,2.08,0,1,1,0,4.16'
    />
    <path
      fill='none'
      d='M11.17,11.72v1.19m0,1.78v1.19m2.38-3v1.18m0,1.79v1.18'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M8.79,14.69A2.74,2.74,0,0,1,6,12,2.74,2.74,0,0,1,8.79,9.34,3.35,3.35,0,0,1,12.72,7a3,3,0,0,1,2.61,3.53h.59a2.08,2.08,0,1,1,0,4.16'
    />
    <path
      fill='none'
      d='M11.17,11.72v1.19m0,1.78v1.19m2.38-3v1.18m0,1.79v1.18'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,14.69A2.74,2.74,0,0,1,6,12,2.74,2.74,0,0,1,8.79,9.34,3.35,3.35,0,0,1,12.72,7a3,3,0,0,1,2.61,3.53h.59a2.08,2.08,0,1,1,0,4.16'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.17,11.72v1.19m0,1.78v1.19m2.38-3v1.18m0,1.79v1.18'
    />
  </Fragment>
)

const CloudRain = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CloudRain
