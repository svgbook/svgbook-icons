import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12.66,10c2.63-.13,4.67-1,4.67-2S15,6,12,6a12.68,12.68,0,0,0-3,.34m-1.85.82A1.11,1.11,0,0,0,6.67,8c0,.81,1.29,1.51,3.15,1.83'
    />
    <path
      fill='none'
      d='M6.67,8v4c0,1.1,2.38,2,5.33,2a12.29,12.29,0,0,0,1.87-.13M16,13.33c.84-.36,1.34-.82,1.34-1.33V8'
    />
    <path
      fill='none'
      d='M6.67,12v4c0,1.11,2.38,2,5.33,2a8.46,8.46,0,0,0,4.84-1.16'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
    <line x1='17.33' y1='14.67' x2='17.33' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M17.33,12v2.67L16,13.33' />
    <path d='M17.33,8c0,1-2,1.86-4.67,2L9,6.34A12.68,12.68,0,0,1,12,6C15,6,17.33,6.9,17.33,8Z' />
    <path
      fill='none'
      d='M17.33,8v4c0,.51-.5,1-1.34,1.33L12.66,10C15.29,9.86,17.33,9,17.33,8Z'
    />
    <path
      fill='none'
      d='M13.87,13.87A12.29,12.29,0,0,1,12,14c-2.95,0-5.33-.9-5.33-2V8c0,.81,1.29,1.51,3.15,1.83Z'
    />
    <path d='M9.82,9.83C8,9.51,6.67,8.81,6.67,8a1.11,1.11,0,0,1,.49-.84Z' />
    <path
      fill='none'
      d='M16.84,16.84A8.46,8.46,0,0,1,12,18c-2.95,0-5.33-.9-5.33-2V12c0,1.1,2.38,2,5.33,2a12.29,12.29,0,0,0,1.87-.13Z'
    />
    <line fill='none' x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M17.33,12v2.67L16,13.33' />
    <path
      fillOpacity='.2'
      d='M17.33,8c0,1-2,1.86-4.67,2L9,6.34A12.68,12.68,0,0,1,12,6C15,6,17.33,6.9,17.33,8Z'
    />
    <path
      fillOpacity='.2'
      d='M17.33,8v4c0,.51-.5,1-1.34,1.33L12.66,10C15.29,9.86,17.33,9,17.33,8Z'
    />
    <path
      fillOpacity='.2'
      d='M13.87,13.87A12.29,12.29,0,0,1,12,14c-2.95,0-5.33-.9-5.33-2V8c0,.81,1.29,1.51,3.15,1.83Z'
    />
    <path
      fillOpacity='.2'
      d='M9.82,9.83C8,9.51,6.67,8.81,6.67,8a1.11,1.11,0,0,1,.49-.84Z'
    />
    <path
      fillOpacity='.2'
      d='M16.84,16.84A8.46,8.46,0,0,1,12,18c-2.95,0-5.33-.9-5.33-2V12c0,1.1,2.38,2,5.33,2a12.29,12.29,0,0,0,1.87-.13Z'
    />
    <line fill='none' x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M17.33,12v2.67L16,13.33' />
    <path
      fill={secondaryColor}
      d='M17.33,8c0,1-2,1.86-4.67,2L9,6.34A12.68,12.68,0,0,1,12,6C15,6,17.33,6.9,17.33,8Z'
    />
    <path
      fill='none'
      d='M17.33,8v4c0,.51-.5,1-1.34,1.33L12.66,10C15.29,9.86,17.33,9,17.33,8Z'
    />
    <path
      fill='none'
      d='M13.87,13.87A12.29,12.29,0,0,1,12,14c-2.95,0-5.33-.9-5.33-2V8c0,.81,1.29,1.51,3.15,1.83Z'
    />
    <path
      fill={secondaryColor}
      d='M9.82,9.83C8,9.51,6.67,8.81,6.67,8a1.11,1.11,0,0,1,.49-.84Z'
    />
    <path
      fill='none'
      d='M16.84,16.84A8.46,8.46,0,0,1,12,18c-2.95,0-5.33-.9-5.33-2V12c0,1.1,2.38,2,5.33,2a12.29,12.29,0,0,0,1.87-.13Z'
    />
    <line fill='none' stroke={secondaryColor} x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const DatabaseOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DatabaseOff
