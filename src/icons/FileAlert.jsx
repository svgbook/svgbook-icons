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
    <line x1='12' y1='15.33' x2='12.01' y2='15.33' />
    <line x1='12' y1='11.33' x2='12' y2='13.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17,9,17,8.92l-3.2-3.2-.06-.07h0a.65.65,0,0,0-.15-.1h0a.41.41,0,0,0-.19,0H8.67A1.84,1.84,0,0,0,6.83,7.33v9.34A1.84,1.84,0,0,0,8.67,18.5h6.66a1.84,1.84,0,0,0,1.84-1.83V9.33A.51.51,0,0,0,17,9ZM11.5,11.33a.5.5,0,1,1,1,0v2a.5.5,0,0,1-1,0Zm.51,4.5a.5.5,0,1,1,0-1h0a.51.51,0,0,1,.5.5A.5.5,0,0,1,12,15.83Zm2-7a.17.17,0,0,1-.17-.16V7.2l1.63,1.63Z'
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
    <line x1='12' y1='15.33' x2='12.01' y2='15.33' />
    <line x1='12' y1='11.33' x2='12' y2='13.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.67,9.33v7.34A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.67.67,0,0,0,.67.66Z'
    />
    <path fill='none' d='M16.67,9.33H14a.67.67,0,0,1-.67-.66V6Z' />
    <line x1='12' y1='15.33' x2='12.01' y2='15.33' />
    <line x1='12' y1='11.33' x2='12' y2='13.33' />
  </Fragment>
)

const FileAlert = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileAlert
