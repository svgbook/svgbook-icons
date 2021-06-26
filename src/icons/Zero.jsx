import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,6a3,3,0,0,1,3,3v6a3,3,0,0,1-6,0V9A3,3,0,0,1,12,6Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,6a3,3,0,0,1,3,3v6a3,3,0,0,1-6,0V9A3,3,0,0,1,12,6Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12,6a3,3,0,0,1,3,3v6a3,3,0,0,1-6,0V9A3,3,0,0,1,12,6Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12,6a3,3,0,0,1,3,3v6a3,3,0,0,1-6,0V9A3,3,0,0,1,12,6Z'
    />
  </Fragment>
)

const Zero = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Zero
