import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.62,7V8.25a.63.63,0,0,1-.62.63H7a.63.63,0,0,1-.62-.63V7A.62.62,0,0,1,7,6.38H17A.62.62,0,0,1,17.62,7Z'
    />
    <path
      fill='none'
      d='M7.63,8.88v4.37a4.37,4.37,0,0,0,8.74,0V8.88ZM12,15.75a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,12,15.75Z'
    />
    <line x1='12' y1='13.25' x2='12.01' y2='13.25' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M17.62,7V8.25a.63.63,0,0,1-.62.63H7a.63.63,0,0,1-.62-.63V7A.62.62,0,0,1,7,6.38H17A.62.62,0,0,1,17.62,7Z'
    />
    <path d='M7.63,8.88v4.37a4.37,4.37,0,0,0,8.74,0V8.88ZM12,15.75a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,12,15.75Z' />
    <line x1='12' y1='13.25' x2='12.01' y2='13.25' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.62,7V8.25a.63.63,0,0,1-.62.63H7a.63.63,0,0,1-.62-.63V7A.62.62,0,0,1,7,6.38H17A.62.62,0,0,1,17.62,7Z'
    />
    <path
      fillOpacity='.2'
      d='M7.63,8.88v4.37a4.37,4.37,0,0,0,8.74,0V8.88ZM12,15.75a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,12,15.75Z'
    />
    <line x1='12' y1='13.25' x2='12.01' y2='13.25' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M17.62,7V8.25a.63.63,0,0,1-.62.63H7a.63.63,0,0,1-.62-.63V7A.62.62,0,0,1,7,6.38H17A.62.62,0,0,1,17.62,7Z'
    />
    <path
      fill={secondaryColor}
      d='M7.63,8.88v4.37a4.37,4.37,0,0,0,8.74,0V8.88ZM12,15.75a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,12,15.75Z'
    />
    <line x1='12' y1='13.25' x2='12.01' y2='13.25' />
  </Fragment>
)

const CCTV = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CCTV
