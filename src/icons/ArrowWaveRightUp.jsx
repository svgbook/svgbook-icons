import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M15.33,10.67H18v2.66' />
    <path
      fill='none'
      d='M6,12a3.19,3.19,0,0,1,2.67-1.33A3.18,3.18,0,0,1,11.33,12,3.2,3.2,0,0,0,14,13.33,4,4,0,0,0,16.67,12L18,10.67'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M15.33,10.67H18v2.66' />
    <path
      fill='none'
      d='M6,12a3.19,3.19,0,0,1,2.67-1.33A3.18,3.18,0,0,1,11.33,12,3.2,3.2,0,0,0,14,13.33,4,4,0,0,0,16.67,12L18,10.67'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M15.33,10.67H18v2.66' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M6,12a3.19,3.19,0,0,1,2.67-1.33A3.18,3.18,0,0,1,11.33,12,3.2,3.2,0,0,0,14,13.33,4,4,0,0,0,16.67,12L18,10.67'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6,12a3.19,3.19,0,0,1,2.67-1.33A3.18,3.18,0,0,1,11.33,12,3.2,3.2,0,0,0,14,13.33,4,4,0,0,0,16.67,12L18,10.67'
    />
    <path fill='none' d='M15.33,10.67H18v2.66' />
  </Fragment>
)

const ArrowWaveRightUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowWaveRightUp
