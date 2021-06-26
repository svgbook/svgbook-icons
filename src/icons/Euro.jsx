import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.23,7.71A4.64,4.64,0,0,0,10,7.8,6.73,6.73,0,0,0,10,16.29a4.64,4.64,0,0,0,7.2,0'
    />
    <path fill='none' d='M13.63,10.29H6.77m0,3.42h6.86' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M17.23,7.71A4.64,4.64,0,0,0,10,7.8,6.73,6.73,0,0,0,10,16.29a4.64,4.64,0,0,0,7.2,0'
    />
    <path fill='none' d='M13.63,10.29H6.77m0,3.42h6.86' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.23,7.71A4.64,4.64,0,0,0,10,7.8,6.73,6.73,0,0,0,10,16.29a4.64,4.64,0,0,0,7.2,0'
    />
    <path fill='none' strokeOpacity='.2' d='M13.63,10.29H6.77m0,3.42h6.86' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M17.23,7.71A4.64,4.64,0,0,0,10,7.8,6.73,6.73,0,0,0,10,16.29a4.64,4.64,0,0,0,7.2,0'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M13.63,10.29H6.77m0,3.42h6.86'
    />
  </Fragment>
)

const Euro = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Euro
