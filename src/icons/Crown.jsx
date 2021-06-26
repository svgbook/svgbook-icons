import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,8l2.67,4L18,9.33,16.67,16H7.33L6,9.33,9.33,12Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,8l2.67,4L18,9.33,16.67,16H7.33L6,9.33,9.33,12Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12,8l2.67,4L18,9.33,16.67,16H7.33L6,9.33,9.33,12Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12,8l2.67,4L18,9.33,16.67,16H7.33L6,9.33,9.33,12Z'
    />
  </Fragment>
)

const Crown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Crown
