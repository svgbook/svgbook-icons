import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.67,13.33H6V10.67' />
    <path
      fill='none'
      d='M18,12a3.34,3.34,0,0,1-5.33,0A3.2,3.2,0,0,0,10,10.67,4,4,0,0,0,7.33,12L6,13.33'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M8.67,13.33H6V10.67' />
    <path
      fill='none'
      d='M18,12a3.34,3.34,0,0,1-5.33,0A3.2,3.2,0,0,0,10,10.67,4,4,0,0,0,7.33,12L6,13.33'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.67,13.33H6V10.67' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M18,12a3.34,3.34,0,0,1-5.33,0A3.2,3.2,0,0,0,10,10.67,4,4,0,0,0,7.33,12L6,13.33'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M18,12a3.34,3.34,0,0,1-5.33,0A3.2,3.2,0,0,0,10,10.67,4,4,0,0,0,7.33,12L6,13.33'
    />
    <path fill='none' d='M8.67,13.33H6V10.67' />
  </Fragment>
)

const ArrowWaveLeftDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowWaveLeftDown
