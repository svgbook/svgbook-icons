import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.53,15.16A1.27,1.27,0,1,1,7.26,13.9,1.26,1.26,0,0,1,8.53,15.16Z'
    />
    <path
      fill='none'
      d='M14.21,15.16A1.27,1.27,0,1,1,13,13.9,1.26,1.26,0,0,1,14.21,15.16Z'
    />
    <path
      fill='none'
      d='M14.21,11.37v3.79a1.27,1.27,0,0,0-2.53,0H8.53a1.27,1.27,0,0,0-2.53,0V11.37Z'
    />
    <rect fill='none' x='7.26' y='8.84' width='2.52' height='2.53' />
    <polygon
      fill='none'
      points='14.21 11.37 9.79 11.37 9.79 7.58 12.31 7.58 14.21 11.37'
    />
    <path fill='none' d='M18,13.9H16.11V7.58' />
    <line x1='14.21' y1='12.63' x2='16.11' y2='12.63' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M8.53,15.16A1.27,1.27,0,1,1,7.26,13.9,1.26,1.26,0,0,1,8.53,15.16Z'
    />
    <path
      fill='none'
      d='M14.21,15.16A1.27,1.27,0,1,1,13,13.9,1.26,1.26,0,0,1,14.21,15.16Z'
    />
    <path d='M14.21,11.37v3.79a1.27,1.27,0,0,0-2.53,0H8.53a1.27,1.27,0,0,0-2.53,0V11.37Z' />
    <rect fill='none' x='7.26' y='8.84' width='2.52' height='2.53' />
    <polygon
      fill='none'
      points='14.21 11.37 9.79 11.37 9.79 7.58 12.31 7.58 14.21 11.37'
    />
    <path fill='none' d='M18,13.9H16.11V7.58' />
    <line x1='14.21' y1='12.63' x2='16.11' y2='12.63' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.53,15.16A1.27,1.27,0,1,1,7.26,13.9,1.26,1.26,0,0,1,8.53,15.16Z'
    />
    <path
      fill='none'
      d='M14.21,15.16A1.27,1.27,0,1,1,13,13.9,1.26,1.26,0,0,1,14.21,15.16Z'
    />
    <path
      fillOpacity='.2'
      d='M14.21,11.37v3.79a1.27,1.27,0,0,0-2.53,0H8.53a1.27,1.27,0,0,0-2.53,0V11.37Z'
    />
    <rect fillOpacity='.2' x='7.26' y='8.84' width='2.52' height='2.53' />
    <polygon
      fill='none'
      points='14.21 11.37 9.79 11.37 9.79 7.58 12.31 7.58 14.21 11.37'
    />
    <path fill='none' d='M18,13.9H16.11V7.58' />
    <line x1='14.21' y1='12.63' x2='16.11' y2='12.63' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M8.53,15.16A1.27,1.27,0,1,1,7.26,13.9,1.26,1.26,0,0,1,8.53,15.16Z'
    />
    <path
      fill='none'
      d='M14.21,15.16A1.27,1.27,0,1,1,13,13.9,1.26,1.26,0,0,1,14.21,15.16Z'
    />
    <path
      fill={secondaryColor}
      d='M14.21,11.37v3.79a1.27,1.27,0,0,0-2.53,0H8.53a1.27,1.27,0,0,0-2.53,0V11.37Z'
    />
    <rect fill={secondaryColor} x='7.26' y='8.84' width='2.52' height='2.53' />
    <polygon
      fill='none'
      points='14.21 11.37 9.79 11.37 9.79 7.58 12.31 7.58 14.21 11.37'
    />
    <path fill='none' d='M18,13.9H16.11V7.58' />
    <line x1='14.21' y1='12.63' x2='16.11' y2='12.63' />
  </Fragment>
)

const Forklift = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Forklift
