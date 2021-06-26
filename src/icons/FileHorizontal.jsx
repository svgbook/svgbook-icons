import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M18,10.67v4.66a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,15.33V8.67A1.34,1.34,0,0,1,7.33,7.33h7.34V10a.67.67,0,0,0,.66.67Z'
    />
    <path fill='none' d='M18,10.67H15.33a.67.67,0,0,1-.66-.67V7.33Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M18,10.67v4.66a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,15.33V8.67A1.34,1.34,0,0,1,7.33,7.33h7.34V10a.67.67,0,0,0,.66.67Z' />
    <path fill='none' d='M18,10.67H15.33a.67.67,0,0,1-.66-.67V7.33Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M18,10.67v4.66a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,15.33V8.67A1.34,1.34,0,0,1,7.33,7.33h7.34V10a.67.67,0,0,0,.66.67Z'
    />
    <path fill='none' d='M18,10.67H15.33a.67.67,0,0,1-.66-.67V7.33Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M18,10.67v4.66a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,15.33V8.67A1.34,1.34,0,0,1,7.33,7.33h7.34V10a.67.67,0,0,0,.66.67Z'
    />
    <path fill='none' d='M18,10.67H15.33a.67.67,0,0,1-.66-.67V7.33Z' />
  </Fragment>
)

const FileHorizontal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileHorizontal
