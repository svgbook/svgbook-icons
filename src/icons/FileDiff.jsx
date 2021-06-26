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
    <line x1='12' y1='10.67' x2='12' y2='13.33' />
    <line x1='10.67' y1='12' x2='13.33' y2='12' />
    <line x1='10.67' y1='15.33' x2='13.33' y2='15.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17,9,17,8.91l-3.2-3.19-.06-.07h0a.65.65,0,0,0-.15-.1.39.39,0,0,0-.18,0H8.67A1.84,1.84,0,0,0,6.83,7.33v9.34A1.84,1.84,0,0,0,8.67,18.5h6.66a1.84,1.84,0,0,0,1.84-1.83V9.34A.53.53,0,0,0,17,9Zm-3.69,6.85H10.67a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h2.66a.5.5,0,0,1,.5.5A.5.5,0,0,1,13.33,15.83Zm0-3.33H12.5v.83a.5.5,0,0,1-1,0V12.5h-.83a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h.83v-.83a.5.5,0,0,1,1,0v.83h.83a.5.5,0,0,1,.5.5A.5.5,0,0,1,13.33,12.5ZM14,8.83a.17.17,0,0,1-.17-.16V7.21l1.63,1.62Z'
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
    <line x1='12' y1='10.67' x2='12' y2='13.33' />
    <line x1='10.67' y1='12' x2='13.33' y2='12' />
    <line x1='10.67' y1='15.33' x2='13.33' y2='15.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.67,9.33v7.34A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.67.67,0,0,0,.67.66Z'
    />
    <path fill='none' d='M16.67,9.33H14a.67.67,0,0,1-.67-.66V6Z' />
    <line x1='12' y1='10.67' x2='12' y2='13.33' />
    <line x1='10.67' y1='12' x2='13.33' y2='12' />
    <line x1='10.67' y1='15.33' x2='13.33' y2='15.33' />
  </Fragment>
)

const FileDiff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileDiff
