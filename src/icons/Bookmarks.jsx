import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12.67,8.67A1.33,1.33,0,0,1,14,10v8l-3.33-2L7.33,18V10A1.33,1.33,0,0,1,8.67,8.67Z'
    />
    <path
      fill='none'
      d='M10.18,6.67A1.32,1.32,0,0,1,11.33,6h4a1.34,1.34,0,0,1,1.34,1.33v8l-.67-.4'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12.67,8.67A1.33,1.33,0,0,1,14,10v8l-3.33-2L7.33,18V10A1.33,1.33,0,0,1,8.67,8.67Z' />
    <path
      fill='none'
      d='M10.18,6.67A1.32,1.32,0,0,1,11.33,6h4a1.34,1.34,0,0,1,1.34,1.33v8l-.67-.4'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12.67,8.67A1.33,1.33,0,0,1,14,10v8l-3.33-2L7.33,18V10A1.33,1.33,0,0,1,8.67,8.67Z'
    />
    <path
      fill='none'
      d='M10.18,6.67A1.32,1.32,0,0,1,11.33,6h4a1.34,1.34,0,0,1,1.34,1.33v8l-.67-.4'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12.67,8.67A1.33,1.33,0,0,1,14,10v8l-3.33-2L7.33,18V10A1.33,1.33,0,0,1,8.67,8.67Z'
    />
    <path
      fill='none'
      d='M10.18,6.67A1.32,1.32,0,0,1,11.33,6h4a1.34,1.34,0,0,1,1.34,1.33v8l-.67-.4'
    />
  </Fragment>
)

const Bookmarks = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bookmarks
