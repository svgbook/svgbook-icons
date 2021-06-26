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
    <circle fill='none' cx='11.33' cy='14.67' r='0.67' />
    <polyline fill='none' points='12 14.67 12 11.33 13.33 12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17,9,17,8.92l-3.2-3.2-.06-.07h0a.5.5,0,0,0-.33-.14H8.67A1.84,1.84,0,0,0,6.83,7.33v9.34A1.84,1.84,0,0,0,8.67,18.5h6.66a1.84,1.84,0,0,0,1.84-1.83V9.34A.53.53,0,0,0,17,9Zm-3.24,3.24a.5.5,0,0,1-.67.23l-.61-.31v2.53a.34.34,0,0,1,0,.1,1.16,1.16,0,1,1-1.16-1.27h.17V11.33a.49.49,0,0,1,.24-.42.48.48,0,0,1,.48,0l1.34.66A.51.51,0,0,1,13.78,12.22ZM14,8.83a.17.17,0,0,1-.17-.16V7.21l1.63,1.62Z'
    />
    <path d='M11.5,14.67c0,.18-.33.18-.33,0a.17.17,0,0,1,.16-.17A.18.18,0,0,1,11.5,14.67Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.67,9.33v7.34A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.66.66,0,0,0,.67.66Z'
    />
    <path fill='none' d='M16.67,9.33H14a.66.66,0,0,1-.67-.66V6Z' />
    <circle fill='none' cx='11.33' cy='14.67' r='0.67' />
    <polyline fill='none' points='12 14.67 12 11.33 13.33 12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.67,9.33v7.34A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33V7.33A1.34,1.34,0,0,1,8.67,6h4.66V8.67a.66.66,0,0,0,.67.66Z'
    />
    <path fill='none' d='M16.67,9.33H14a.66.66,0,0,1-.67-.66V6Z' />
    <circle fill='none' cx='11.33' cy='14.67' r='0.67' />
    <polyline fill='none' points='12 14.67 12 11.33 13.33 12' />
  </Fragment>
)

const FileMusic = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileMusic
