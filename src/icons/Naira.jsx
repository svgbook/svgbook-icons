import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.71,17.14V7.76a.9.9,0,0,1,.9-.9.91.91,0,0,1,.79.46l5.2,9.36a.9.9,0,0,0,1.69-.44V6.86'
    />
    <path fill='none' d='M6,10.29H18' />
    <path fill='none' d='M6,13.71H18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M7.71,17.14V7.76a.9.9,0,0,1,.9-.9.91.91,0,0,1,.79.46l5.2,9.36a.9.9,0,0,0,1.69-.44V6.86'
    />
    <path fill='none' d='M6,10.29H18' />
    <path fill='none' d='M6,13.71H18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.71,17.14V7.76a.9.9,0,0,1,.9-.9.91.91,0,0,1,.79.46l5.2,9.36a.9.9,0,0,0,1.69-.44V6.86'
    />
    <path fill='none' strokeOpacity='.2' d='M6,10.29H18' />
    <path fill='none' strokeOpacity='.2' d='M6,13.71H18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M7.71,17.14V7.76a.9.9,0,0,1,.9-.9.91.91,0,0,1,.79.46l5.2,9.36a.9.9,0,0,0,1.69-.44V6.86'
    />
    <path fill='none' stroke={secondaryColor} d='M6,10.29H18' />
    <path fill='none' stroke={secondaryColor} d='M6,13.71H18' />
  </Fragment>
)

const Naira = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Naira
