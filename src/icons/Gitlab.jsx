import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,13.33,12,18,6,13.33,8,6l2,4.67h4L16,6Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M18,13.33,12,18,6,13.33,8,6l2,4.67h4L16,6Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M18,13.33,12,18,6,13.33,8,6l2,4.67h4L16,6Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M18,13.33,12,18,6,13.33,8,6l2,4.67h4L16,6Z'
    />
  </Fragment>
)

const Gitlab = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Gitlab
