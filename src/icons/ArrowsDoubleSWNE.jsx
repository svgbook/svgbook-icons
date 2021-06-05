import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path d='M13.33,6,6,13.33' />
    <path fill='none' d='M6,10.67v2.66H8.67' />
    <path d='M10.67,18,18,10.67' />
    <path fill='none' d='M15.33,10.67H18v2.66' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M13.33,6,6,13.33' />
    <path fill='none' d='M6,10.67v2.66H8.67' />
    <path d='M10.67,18,18,10.67' />
    <path fill='none' d='M15.33,10.67H18v2.66' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path strokeOpacity='.2' d='M13.33,6,6,13.33' />
    <path fill='none' d='M6,10.67v2.66H8.67' />
    <path strokeOpacity='.2' d='M10.67,18,18,10.67' />
    <path fill='none' d='M15.33,10.67H18v2.66' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path stroke={secondaryColor} d='M13.33,6,6,13.33' />
    <path fill='none' d='M6,10.67v2.66H8.67' />
    <path stroke={secondaryColor} d='M10.67,18,18,10.67' />
    <path fill='none' d='M15.33,10.67H18v2.66' />
  </Fragment>
)

const ArrowsDoubleSWNE = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsDoubleSWNE
