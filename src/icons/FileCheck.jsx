import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.67,9.33v7.34A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.66.66,0,0,0,.67.66Z'
    />
    <path fill='none' d='M16.67,9.33H14a.66.66,0,0,1-.67-.66V6Z' />
    <path fill='none' d='M10,14l1.33,1.33L14,12.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17,9,17,8.92l-3.2-3.2-.06-.07h0a.65.65,0,0,0-.15-.1.39.39,0,0,0-.18,0H8.67A1.84,1.84,0,0,0,6.83,7.33v9.34A1.84,1.84,0,0,0,8.67,18.5h6.66a1.84,1.84,0,0,0,1.84-1.83V9.34A.53.53,0,0,0,17,9Zm-2.67,4-2.66,2.67a.5.5,0,0,1-.36.14.47.47,0,0,1-.35-.14L9.65,14.35a.49.49,0,0,1,.7-.7l1,1,2.32-2.32a.5.5,0,0,1,.7,0A.5.5,0,0,1,14.35,13ZM14,8.83a.17.17,0,0,1-.17-.16V7.21l1.63,1.62Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.67,9.33v7.34A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.66.66,0,0,0,.67.66Z'
    />
    <path fill='none' d='M16.67,9.33H14a.66.66,0,0,1-.67-.66V6Z' />
    <path fill='none' d='M10,14l1.33,1.33L14,12.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.67,9.33v7.34A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.66.66,0,0,0,.67.66Z'
    />
    <path fill='none' d='M16.67,9.33H14a.66.66,0,0,1-.67-.66V6Z' />
    <path fill='none' d='M10,14l1.33,1.33L14,12.67' />
  </Fragment>
)

const FileCheck = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileCheck
