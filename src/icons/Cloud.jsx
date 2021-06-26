import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.79,15.88a2.68,2.68,0,1,1,0-5.35,3.36,3.36,0,0,1,3.93-2.35,3,3,0,0,1,2.61,3.54h.59a2.08,2.08,0,1,1,0,4.16H8.79'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M8.79,15.88a2.68,2.68,0,1,1,0-5.35,3.36,3.36,0,0,1,3.93-2.35,3,3,0,0,1,2.61,3.54h.59a2.08,2.08,0,1,1,0,4.16H8.79' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M8.79,15.88a2.68,2.68,0,1,1,0-5.35,3.36,3.36,0,0,1,3.93-2.35,3,3,0,0,1,2.61,3.54h.59a2.08,2.08,0,1,1,0,4.16H8.79'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M8.79,15.88a2.68,2.68,0,1,1,0-5.35,3.36,3.36,0,0,1,3.93-2.35,3,3,0,0,1,2.61,3.54h.59a2.08,2.08,0,1,1,0,4.16H8.79'
    />
  </Fragment>
)

const Cloud = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Cloud
