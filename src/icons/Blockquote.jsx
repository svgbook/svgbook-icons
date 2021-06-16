import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path d='M8,13.83H18' />
    <path d='M18,16.5H8' />
    <path d='M14,11.17h4' />
    <path d='M18,8.5H14' />
    <path
      fill='none'
      d='M10,9.83h.67a.67.67,0,1,1-.67.67V8.83A1.34,1.34,0,0,1,11.33,7.5'
    />
    <path
      fill='none'
      d='M6,9.83h.67A.67.67,0,1,1,6,10.5V8.83A1.34,1.34,0,0,1,7.33,7.5'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M8,13.83H18' />
    <path d='M18,16.5H8' />
    <path d='M14,11.17h4' />
    <path d='M18,8.5H14' />
    <path
      fill='none'
      d='M10,9.83h.67a.67.67,0,1,1-.67.67V8.83A1.34,1.34,0,0,1,11.33,7.5'
    />
    <path
      fill='none'
      d='M6,9.83h.67A.67.67,0,1,1,6,10.5V8.83A1.34,1.34,0,0,1,7.33,7.5'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path strokeOpacity='.2' d='M8,13.83H18' />
    <path strokeOpacity='.2' d='M18,16.5H8' />
    <path strokeOpacity='.2' d='M14,11.17h4' />
    <path strokeOpacity='.2' d='M18,8.5H14' />
    <path
      fill='none'
      d='M10,9.83h.67a.67.67,0,1,1-.67.67V8.83A1.34,1.34,0,0,1,11.33,7.5'
    />
    <path
      fill='none'
      d='M6,9.83h.67A.67.67,0,1,1,6,10.5V8.83A1.34,1.34,0,0,1,7.33,7.5'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path d='M8,13.83H18' />
    <path d='M18,16.5H8' />
    <path d='M14,11.17h4' />
    <path d='M18,8.5H14' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M10,9.83h.67a.67.67,0,1,1-.67.67V8.83A1.34,1.34,0,0,1,11.33,7.5'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6,9.83h.67A.67.67,0,1,1,6,10.5V8.83A1.34,1.34,0,0,1,7.33,7.5'
    />
  </Fragment>
)

const Blockquote = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Blockquote
