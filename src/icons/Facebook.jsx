import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.33,10.67v2.66h2V18H13V13.33h2l.67-2.66H13V9.33a.67.67,0,0,1,.67-.66h2V6h-2a3.34,3.34,0,0,0-3.34,3.33v1.34h-2'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M8.33,10.67v2.66h2V18H13V13.33h2l.67-2.66H13V9.33a.67.67,0,0,1,.67-.66h2V6h-2a3.34,3.34,0,0,0-3.34,3.33v1.34h-2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M8.33,10.67v2.66h2V18H13V13.33h2l.67-2.66H13V9.33a.67.67,0,0,1,.67-.66h2V6h-2a3.34,3.34,0,0,0-3.34,3.33v1.34h-2'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M8.33,10.67v2.66h2V18H13V13.33h2l.67-2.66H13V9.33a.67.67,0,0,1,.67-.66h2V6h-2a3.34,3.34,0,0,0-3.34,3.33v1.34h-2'
    />
  </Fragment>
)

const Facebook = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Facebook
