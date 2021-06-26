import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M18,15.34a1.32,1.32,0,0,1-1.34,1.32H7.34A1.32,1.32,0,0,1,6,15.34l2.66-2h6.68Z'
    />
    <path
      fill='none'
      d='M18,8.66v6.68l-2.66-2H8.66L6,15.34V8.66A1.32,1.32,0,0,1,7.34,7.34h9.32A1.32,1.32,0,0,1,18,8.66Z'
    />
    <circle fill='none' cx='9' cy='10.33' r='0.33' />
    <circle fill='none' cx='15' cy='10.33' r='0.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M18,15.34a1.32,1.32,0,0,1-1.34,1.32H7.34A1.32,1.32,0,0,1,6,15.34l2.66-2h6.68Z' />
    <path
      fill='none'
      d='M18,8.66v6.68l-2.66-2H8.66L6,15.34V8.66A1.32,1.32,0,0,1,7.34,7.34h9.32A1.32,1.32,0,0,1,18,8.66Z'
    />
    <circle fill='none' cx='9' cy='10.33' r='0.33' />
    <circle fill='none' cx='15' cy='10.33' r='0.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M18,15.34a1.32,1.32,0,0,1-1.34,1.32H7.34A1.32,1.32,0,0,1,6,15.34l2.66-2h6.68Z'
    />
    <path
      fillOpacity='.2'
      d='M18,8.66v6.68l-2.66-2H8.66L6,15.34V8.66A1.32,1.32,0,0,1,7.34,7.34h9.32A1.32,1.32,0,0,1,18,8.66Z'
    />
    <circle fill='none' cx='9' cy='10.33' r='0.33' />
    <circle fill='none' cx='15' cy='10.33' r='0.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M18,15.34a1.32,1.32,0,0,1-1.34,1.32H7.34A1.32,1.32,0,0,1,6,15.34l2.66-2h6.68Z'
    />
    <path
      fill='none'
      d='M18,8.66v6.68l-2.66-2H8.66L6,15.34V8.66A1.32,1.32,0,0,1,7.34,7.34h9.32A1.32,1.32,0,0,1,18,8.66Z'
    />
    <circle fill='none' cx='9' cy='10.33' r='0.33' />
    <circle fill='none' cx='15' cy='10.33' r='0.33' />
  </Fragment>
)

const AudioTape = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AudioTape
