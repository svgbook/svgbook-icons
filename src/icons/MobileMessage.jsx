import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M10.67,6h6.66v5.33h-2l-2.66,1.34V11.33h-2Z' />
    <path
      fill='none'
      d='M13.33,14.67v2.66a.66.66,0,0,1-.66.67H7.33a.67.67,0,0,1-.66-.67V8a.67.67,0,0,1,.66-.67H8.67'
    />
    <path fill='none' d='M10,16h0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M10.67,6h6.66v5.33h-2l-2.66,1.34V11.33h-2Z' />
    <path
      fill='none'
      d='M13.33,14.67v2.66a.66.66,0,0,1-.66.67H7.33a.67.67,0,0,1-.66-.67V8a.67.67,0,0,1,.66-.67H8.67'
    />
    <path fill='none' d='M10,16h0' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M10.67,6h6.66v5.33h-2l-2.66,1.34V11.33h-2Z' />
    <path
      fill='none'
      d='M13.33,14.67v2.66a.66.66,0,0,1-.66.67H7.33a.67.67,0,0,1-.66-.67V8a.67.67,0,0,1,.66-.67H8.67'
    />
    <path fill='none' d='M10,16h0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M10.67,6h6.66v5.33h-2l-2.66,1.34V11.33h-2Z'
    />
    <path
      fill='none'
      d='M13.33,14.67v2.66a.66.66,0,0,1-.66.67H7.33a.67.67,0,0,1-.66-.67V8a.67.67,0,0,1,.66-.67H8.67'
    />
    <path fill='none' d='M10,16h0' />
  </Fragment>
)

const MobileMessage = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default MobileMessage
