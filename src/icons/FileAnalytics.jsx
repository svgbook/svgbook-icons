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
    <line x1='10' y1='15.33' x2='10' y2='12' />
    <line x1='12' y1='15.33' x2='12' y2='14.67' />
    <line x1='14' y1='15.33' x2='14' y2='13.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.13,9.14h0A.42.42,0,0,0,17,9L17,8.91l-3.2-3.19-.07-.07a.42.42,0,0,0-.15-.11h0a.33.33,0,0,0-.17,0H8.67A1.84,1.84,0,0,0,6.83,7.33v9.34A1.84,1.84,0,0,0,8.67,18.5h6.66a1.84,1.84,0,0,0,1.84-1.83V9.31A.33.33,0,0,0,17.13,9.14ZM10.5,15.33a.5.5,0,0,1-1,0V12a.5.5,0,0,1,1,0Zm2,0a.5.5,0,0,1-1,0v-.66a.5.5,0,0,1,1,0Zm2,0a.5.5,0,0,1-1,0v-2a.5.5,0,1,1,1,0ZM14,8.83a.17.17,0,0,1-.17-.16V7.2l1.63,1.63Z'
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
    <line x1='10' y1='15.33' x2='10' y2='12' />
    <line x1='12' y1='15.33' x2='12' y2='14.67' />
    <line x1='14' y1='15.33' x2='14' y2='13.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.67,9.33v7.34A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.67.67,0,0,0,.67.66Z'
    />
    <path fill='none' d='M16.67,9.33H14a.67.67,0,0,1-.67-.66V6Z' />
    <line x1='10' y1='15.33' x2='10' y2='12' />
    <line x1='12' y1='15.33' x2='12' y2='14.67' />
    <line x1='14' y1='15.33' x2='14' y2='13.33' />
  </Fragment>
)

const FileAnalytics = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileAnalytics
