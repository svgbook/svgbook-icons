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
    <path d='M18,8.48A7.43,7.43,0,0,0,16.14,6' />
    <path d='M6,8.48A7.43,7.43,0,0,1,7.86,6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4' />
    <path d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <path d='M18,8.48A7.43,7.43,0,0,0,16.14,6' />
    <path d='M6,8.48A7.43,7.43,0,0,1,7.86,6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4'
    />
    <path fillOpacity='.2' d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <path d='M18,8.48A7.43,7.43,0,0,0,16.14,6' />
    <path d='M6,8.48A7.43,7.43,0,0,1,7.86,6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <path
      fill={secondaryColor}
      d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4'
    />
    <path d='M18,8.48A7.43,7.43,0,0,0,16.14,6' />
    <path d='M6,8.48A7.43,7.43,0,0,1,7.86,6' />
  </Fragment>
)

const BellRinging = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BellRinging
