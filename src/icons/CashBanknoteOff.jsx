import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M13.8,11.13a2,2,0,0,0-.94-.94' />
    <path
      fill='none'
      d='M10.67,8h6A1.34,1.34,0,0,1,18,9.33v5.34a1.22,1.22,0,0,1-.12.54'
    />
    <line x1='16' y1='12' x2='16.01' y2='12' />
    <line x1='8' y1='12' x2='8.01' y2='12' />
    <path
      fill='none'
      d='M16,16H7.33A1.34,1.34,0,0,1,6,14.67V9.33A1.34,1.34,0,0,1,7.33,8H8l2.59,2.59a2,2,0,1,0,2.8,2.85l0,0Z'
    />
    <line x1='18' y1='18' x2='16' y2='16' />
    <path fill='none' d='M13.41,13.41l0,0a2,2,0,1,1-2.8-2.85Z' />
    <line x1='8' y1='8' x2='6' y2='6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M13.8,11.13a2,2,0,0,0-.94-.94' />
    <path
      fill='none'
      d='M10.67,8h6A1.34,1.34,0,0,1,18,9.33v5.34a1.22,1.22,0,0,1-.12.54'
    />
    <line x1='16' y1='12' x2='16.01' y2='12' />
    <line x1='8' y1='12' x2='8.01' y2='12' />
    <path
      fill='none'
      d='M16,16H7.33A1.34,1.34,0,0,1,6,14.67V9.33A1.34,1.34,0,0,1,7.33,8H8l2.59,2.59a2,2,0,1,0,2.8,2.85l0,0Z'
    />
    <line x1='18' y1='18' x2='16' y2='16' />
    <path d='M13.41,13.41l0,0a2,2,0,1,1-2.8-2.85Z' />
    <line x1='8' y1='8' x2='6' y2='6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M13.8,11.13a2,2,0,0,0-.94-.94' />
    <path
      fill='none'
      d='M10.67,8h6A1.34,1.34,0,0,1,18,9.33v5.34a1.22,1.22,0,0,1-.12.54'
    />
    <line x1='16' y1='12' x2='16.01' y2='12' />
    <line x1='8' y1='12' x2='8.01' y2='12' />
    <path
      fillOpacity='.2'
      d='M16,16H7.33A1.34,1.34,0,0,1,6,14.67V9.33A1.34,1.34,0,0,1,7.33,8H8l2.59,2.59a2,2,0,1,0,2.8,2.85l0,0Z'
    />
    <path fill='none' d='M13.41,13.41l0,0a2,2,0,1,1-2.8-2.85Z' />
    <line x1='18' y1='18' x2='6' y2='6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M13.8,11.13a2,2,0,0,0-.94-.94' />
    <path
      fill='none'
      d='M10.67,8h6A1.34,1.34,0,0,1,18,9.33v5.34a1.22,1.22,0,0,1-.12.54'
    />
    <path
      fill={secondaryColor}
      d='M16,16H7.33A1.34,1.34,0,0,1,6,14.67V9.33A1.34,1.34,0,0,1,7.33,8H8l2.59,2.59a2,2,0,1,0,2.8,2.85l0,0Z'
    />
    <line x1='16' y1='12' x2='16.01' y2='12' />
    <line x1='8' y1='12' x2='8.01' y2='12' />
    <path fill='none' d='M13.41,13.41l0,0a2,2,0,1,1-2.8-2.85Z' />
    <line stroke={secondaryColor} x1='18' y1='18' x2='6' y2='6' />
  </Fragment>
)

const CashBanknoteOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CashBanknoteOff
