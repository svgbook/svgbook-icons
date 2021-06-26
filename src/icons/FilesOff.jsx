import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M14,6V8.67a.67.67,0,0,0,.67.66h2.66' />
    <path
      fill='none'
      d='M10,7.33A1.34,1.34,0,0,1,11.33,6H14l3.33,3.33V14a1.42,1.42,0,0,1-.11.55'
    />
    <path
      fill='none'
      d='M14.66,15.33v1.34A1.33,1.33,0,0,1,13.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V10A1.33,1.33,0,0,1,8.67,8.67L10,10v4a1.33,1.33,0,0,0,1.33,1.33Z'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M14,6V8.67a.67.67,0,0,0,.67.66h2.66' />
    <path
      fill='none'
      d='M10,7.33A1.34,1.34,0,0,1,11.33,6H14l3.33,3.33V14a1.42,1.42,0,0,1-.11.55'
    />
    <path d='M14.66,15.33v1.34A1.33,1.33,0,0,1,13.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V10A1.33,1.33,0,0,1,8.67,8.67L10,10v4a1.33,1.33,0,0,0,1.33,1.33Z' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M14,6V8.67a.67.67,0,0,0,.67.66h2.66' />
    <path
      fill='none'
      d='M10,7.33A1.34,1.34,0,0,1,11.33,6H14l3.33,3.33V14a1.42,1.42,0,0,1-.11.55'
    />
    <path
      fillOpacity='.2'
      d='M14.66,15.33v1.34A1.33,1.33,0,0,1,13.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V10A1.33,1.33,0,0,1,8.67,8.67L10,10v4a1.33,1.33,0,0,0,1.33,1.33Z'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M14,6V8.67a.67.67,0,0,0,.67.66h2.66' />
    <path
      fill='none'
      d='M10,7.33A1.34,1.34,0,0,1,11.33,6H14l3.33,3.33V14a1.42,1.42,0,0,1-.11.55'
    />
    <path
      fill={secondaryColor}
      d='M14.66,15.33v1.34A1.33,1.33,0,0,1,13.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V10A1.33,1.33,0,0,1,8.67,8.67L10,10v4a1.33,1.33,0,0,0,1.33,1.33Z'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const FilesOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FilesOff
