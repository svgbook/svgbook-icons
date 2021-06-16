import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.75,6h4.5a1.5,1.5,0,0,1,1.5,1.5V18L12,15.75,8.25,18V7.5A1.5,1.5,0,0,1,9.75,6'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M9.75,6h4.5a1.5,1.5,0,0,1,1.5,1.5V18L12,15.75,8.25,18V7.5A1.5,1.5,0,0,1,9.75,6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M9.75,6h4.5a1.5,1.5,0,0,1,1.5,1.5V18L12,15.75,8.25,18V7.5A1.5,1.5,0,0,1,9.75,6'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M9.75,6h4.5a1.5,1.5,0,0,1,1.5,1.5V18L12,15.75,8.25,18V7.5A1.5,1.5,0,0,1,9.75,6'
    />
  </Fragment>
)

const Bookmark = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bookmark
