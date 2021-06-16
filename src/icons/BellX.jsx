import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4'
    />
    <path fill='none' d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <path d='M11,10.33l2,2m0-2-2,2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.58,14.9a2.17,2.17,0,0,1-1.08-1.57v-2A5.17,5.17,0,0,0,13.81,7,1.85,1.85,0,0,0,12,5.5,1.83,1.83,0,0,0,10.2,7a5.16,5.16,0,0,0-2.7,4.32v1.94A2.17,2.17,0,0,1,6.42,14.9a.5.5,0,0,0,.25.93H9.5V16a2.5,2.5,0,0,0,5,0v-.17h2.83a.5.5,0,0,0,.49-.37A.49.49,0,0,0,17.58,14.9Zm-6.93-4.21a.5.5,0,0,1,0-.71.48.48,0,0,1,.7,0l.65.65.65-.65a.48.48,0,0,1,.7,0,.5.5,0,0,1,0,.71l-.64.64.64.65a.5.5,0,0,1-.7.71L12,12l-.65.65a.5.5,0,0,1-.7,0,.5.5,0,0,1,0-.71l.64-.65Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4'
    />
    <path fillOpacity='.2' d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <path d='M11,10.33l2,2m0-2-2,2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <path
      fill={secondaryColor}
      d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4'
    />
    <path d='M11,10.33l2,2m0-2-2,2' />
  </Fragment>
)

const BellX = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BellX
