import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,11.25H9.75v3h4.5v-3H18V18H6ZM9.75,6h4.5V9H9.75Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M6,11.25H9.75v3h4.5v-3H18V18H6ZM9.75,6h4.5V9H9.75Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M6,11.25H9.75v3h4.5v-3H18V18H6ZM9.75,6h4.5V9H9.75Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M6,11.25H9.75v3h4.5v-3H18V18H6ZM9.75,6h4.5V9H9.75Z'
    />
  </Fragment>
)

const Unsplash = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Unsplash
