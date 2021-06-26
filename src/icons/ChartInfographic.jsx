import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M11.33,8.67A2.67,2.67,0,1,1,8.67,6V8.67Z' />
    <path fill='none' d='M11.33,8.67H8.67V6A2.66,2.66,0,0,1,11.33,8.67Z' />
    <line x1='10' y1='15.33' x2='10' y2='18' />
    <line x1='15.33' y1='13.33' x2='15.33' y2='18' />
    <line x1='12.67' y1='12.67' x2='12.67' y2='18' />
    <line x1='18' y1='12' x2='18' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M11.33,8.67A2.67,2.67,0,1,1,8.67,6V8.67Z' />
    <path d='M11.33,8.67H8.67V6A2.66,2.66,0,0,1,11.33,8.67Z' />
    <line x1='10' y1='15.33' x2='10' y2='18' />
    <line x1='15.33' y1='13.33' x2='15.33' y2='18' />
    <line x1='12.67' y1='12.67' x2='12.67' y2='18' />
    <line x1='18' y1='12' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M11.33,8.67A2.67,2.67,0,1,1,8.67,6V8.67Z' />
    <path fillOpacity='.2' d='M11.33,8.67H8.67V6A2.66,2.66,0,0,1,11.33,8.67Z' />
    <line x1='10' y1='15.33' x2='10' y2='18' />
    <line x1='15.33' y1='13.33' x2='15.33' y2='18' />
    <line x1='12.67' y1='12.67' x2='12.67' y2='18' />
    <line x1='18' y1='12' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.33,8.67A2.67,2.67,0,1,1,8.67,6V8.67Z'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.33,8.67H8.67V6A2.66,2.66,0,0,1,11.33,8.67Z'
    />
    <line x1='10' y1='15.33' x2='10' y2='18' />
    <line x1='15.33' y1='13.33' x2='15.33' y2='18' />
    <line x1='12.67' y1='12.67' x2='12.67' y2='18' />
    <line x1='18' y1='12' x2='18' y2='18' />
  </Fragment>
)

const ChartInfographic = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartInfographic
