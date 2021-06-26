import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,7.2v9.6' />
    <path
      fill='none'
      d='M10.8,16.8A4.86,4.86,0,0,0,6,12a4.86,4.86,0,0,0,4.8-4.8'
    />
    <path fill='none' d='M14,10.4v6.4' />
    <path fill='none' d='M17.2,10.4A3.2,3.2,0,0,0,14,13.6' />
    <path fill='none' d='M18,16.8h0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,7.2v9.6' />
    <path
      fill='none'
      d='M10.8,16.8A4.86,4.86,0,0,0,6,12a4.86,4.86,0,0,0,4.8-4.8'
    />
    <path fill='none' d='M14,10.4v6.4' />
    <path fill='none' d='M17.2,10.4A3.2,3.2,0,0,0,14,13.6' />
    <path fill='none' d='M18,16.8h0' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,7.2v9.6' />
    <path
      fill='none'
      d='M10.8,16.8A4.86,4.86,0,0,0,6,12a4.86,4.86,0,0,0,4.8-4.8'
    />
    <path fill='none' d='M14,10.4v6.4' />
    <path fill='none' d='M17.2,10.4A3.2,3.2,0,0,0,14,13.6' />
    <path fill='none' strokeOpacity='.2' d='M18,16.8h0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M6,7.2v9.6' />
    <path
      fill='none'
      d='M10.8,16.8A4.86,4.86,0,0,0,6,12a4.86,4.86,0,0,0,4.8-4.8'
    />
    <path fill='none' d='M14,10.4v6.4' />
    <path fill='none' d='M17.2,10.4A3.2,3.2,0,0,0,14,13.6' />
    <path fill='none' stroke={secondaryColor} d='M18,16.8h0' />
  </Fragment>
)

const KroneDanish = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default KroneDanish
