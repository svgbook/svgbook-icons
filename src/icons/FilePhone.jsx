import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.67,9.33v7.34A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.67.67,0,0,0,.67.66Z'
    />
    <path fill='none' d='M16.67,9.33H14a.67.67,0,0,1-.67-.66V6Z' />
    <path
      fill='none'
      d='M10,12a.34.34,0,0,0,.67,0v-.67a.34.34,0,0,0-.67,0V12a3.33,3.33,0,0,0,3.33,3.33H14a.33.33,0,0,0,0-.66h-.67a.33.33,0,1,0,0,.66'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.13,9.14h0A.42.42,0,0,0,17,9L17,8.91l-3.2-3.19-.07-.07a.42.42,0,0,0-.15-.11h0a.33.33,0,0,0-.17,0H8.67A1.84,1.84,0,0,0,6.83,7.33v9.34A1.84,1.84,0,0,0,8.67,18.5h6.66a1.84,1.84,0,0,0,1.84-1.83V9.31A.33.33,0,0,0,17.13,9.14ZM14,15.83h-.67A3.84,3.84,0,0,1,9.5,12v-.67a.83.83,0,0,1,.83-.83.84.84,0,0,1,.84.83V12a.86.86,0,0,1-.56.79,2.85,2.85,0,0,0,1.94,1.93.82.82,0,0,1,.78-.55H14a.83.83,0,0,1,0,1.66Zm0-7a.17.17,0,0,1-.17-.16V7.2l1.63,1.63Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.67,9.33v7.34A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.67.67,0,0,0,.67.66Z'
    />
    <path fill='none' d='M16.67,9.33H14a.67.67,0,0,1-.67-.66V6Z' />
    <path
      fill='none'
      d='M10,12a.34.34,0,0,0,.67,0v-.67a.34.34,0,0,0-.67,0V12a3.33,3.33,0,0,0,3.33,3.33H14a.33.33,0,0,0,0-.66h-.67a.33.33,0,1,0,0,.66'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.67,9.33v7.34A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.67.67,0,0,0,.67.66Z'
    />
    <path fill='none' d='M16.67,9.33H14a.67.67,0,0,1-.67-.66V6Z' />
    <path
      fill='none'
      d='M10,12a.34.34,0,0,0,.67,0v-.67a.34.34,0,0,0-.67,0V12a3.33,3.33,0,0,0,3.33,3.33H14a.33.33,0,0,0,0-.66h-.67a.33.33,0,1,0,0,.66'
    />
  </Fragment>
)

const FilePhone = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FilePhone