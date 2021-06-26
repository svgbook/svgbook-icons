import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,15A2.74,2.74,0,0,1,6,12.31,2.73,2.73,0,0,1,8.79,9.64a3.35,3.35,0,0,1,3.92-2.35,3,3,0,0,1,2.61,3.53h.59a2.08,2.08,0,0,1,0,4.16'
    />
    <path d='M11.16,13.2h0m0,1.78h0m0,1.78h0m2.38-2.38h0m0,1.78h0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,15A2.74,2.74,0,0,1,6,12.31,2.73,2.73,0,0,1,8.79,9.64a3.35,3.35,0,0,1,3.92-2.35,3,3,0,0,1,2.61,3.53h.59a2.08,2.08,0,0,1,0,4.16'
    />
    <path d='M11.16,13.2h0m0,1.78h0m0,1.78h0m2.38-2.38h0m0,1.78h0' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M8.79,15A2.74,2.74,0,0,1,6,12.31,2.73,2.73,0,0,1,8.79,9.64a3.35,3.35,0,0,1,3.92-2.35,3,3,0,0,1,2.61,3.53h.59a2.08,2.08,0,0,1,0,4.16'
    />
    <path d='M11.16,13.2h0m0,1.78h0m0,1.78h0m2.38-2.38h0m0,1.78h0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,15A2.74,2.74,0,0,1,6,12.31,2.73,2.73,0,0,1,8.79,9.64a3.35,3.35,0,0,1,3.92-2.35,3,3,0,0,1,2.61,3.53h.59a2.08,2.08,0,0,1,0,4.16'
    />
    <path
      stroke={secondaryColor}
      d='M11.16,13.2h0m0,1.78h0m0,1.78h0m2.38-2.38h0m0,1.78h0'
    />
  </Fragment>
)

const CloudRain = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CloudRain
