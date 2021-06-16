import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fill='none'
      d='M15.33,15.33H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.64,4.64,0,0,1,.85-2.47m1.38-1.29a3.75,3.75,0,0,1,.44-.24,1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2'
    />
    <path fill='none' d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M15.33,15.33H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.64,4.64,0,0,1,.85-2.47m1.38-1.29a3.75,3.75,0,0,1,.44-.24,1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2'
    />
    <path d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15.33,15.33H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.64,4.64,0,0,1,.85-2.47m1.38-1.29a3.75,3.75,0,0,1,.44-.24,1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2'
    />
    <path fillOpacity='.2' d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <path
      fill='none'
      d='M15.33,15.33H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.64,4.64,0,0,1,.85-2.47m1.38-1.29a3.75,3.75,0,0,1,.44-.24,1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2'
    />
    <line stroke={secondaryColor} x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const BellOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BellOff
