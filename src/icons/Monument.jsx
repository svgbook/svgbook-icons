import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.33,16l1.34-8.67L12,6l1.33,1.33L14.67,16' />
    <path fill='none' d='M7.33,18V16h9.34v2' />
    <line x1='6' y1='18' x2='18' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M9.33,16l1.34-8.67L12,6l1.33,1.33L14.67,16' />
    <path d='M7.33,18V16h9.34v2' />
    <line x1='6' y1='18' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M9.33,16l1.34-8.67L12,6l1.33,1.33L14.67,16' />
    <path fillOpacity='.2' d='M7.33,18V16h9.34v2' />
    <line x1='6' y1='18' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M9.33,16l1.34-8.67L12,6l1.33,1.33L14.67,16'
    />
    <path fill={secondaryColor} d='M7.33,18V16h9.34v2' />
    <line x1='6' y1='18' x2='18' y2='18' />
  </Fragment>
)

const Monument = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Monument
