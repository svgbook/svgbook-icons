import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8,10.67a4.77,4.77,0,0,1,.52-2.15m1.2-1.47a4.67,4.67,0,0,1,7,6l-.43.51m-1.36,1.3A5.64,5.64,0,0,0,14,16.4,3,3,0,0,1,10,17.65a3.08,3.08,0,0,1-.48-.32'
    />
    <path fill='none' d='M11.61,9a2,2,0,0,1,2.76,2.75' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M8,10.67a4.77,4.77,0,0,1,.52-2.15m1.2-1.47a4.67,4.67,0,0,1,7,6l-.43.51m-1.36,1.3A5.64,5.64,0,0,0,14,16.4,3,3,0,0,1,10,17.65a3.08,3.08,0,0,1-.48-.32'
    />
    <path fill='none' d='M11.61,9a2,2,0,0,1,2.76,2.75' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8,10.67a4.77,4.77,0,0,1,.52-2.15m1.2-1.47a4.67,4.67,0,0,1,7,6l-.43.51m-1.36,1.3A5.64,5.64,0,0,0,14,16.4,3,3,0,0,1,10,17.65a3.08,3.08,0,0,1-.48-.32'
    />
    <path fill='none' strokeOpacity={0.2} d='M11.61,9a2,2,0,0,1,2.76,2.75' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M8,10.67a4.77,4.77,0,0,1,.52-2.15m1.2-1.47a4.67,4.67,0,0,1,7,6l-.43.51m-1.36,1.3A5.64,5.64,0,0,0,14,16.4,3,3,0,0,1,10,17.65a3.08,3.08,0,0,1-.48-.32'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.61,9a2,2,0,0,1,2.76,2.75'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const EarOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default EarOff
