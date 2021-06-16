import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16,6V8.67l-2.57,4H16v2.66H11.71L10,18H8V15.33l2.57-4H8V8.67h4.29L14,6Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M16,6V8.67l-2.57,4H16v2.66H11.71L10,18H8V15.33l2.57-4H8V8.67h4.29L14,6Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16,6V8.67l-2.57,4H16v2.66H11.71L10,18H8V15.33l2.57-4H8V8.67h4.29L14,6Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16,6V8.67l-2.57,4H16v2.66H11.71L10,18H8V15.33l2.57-4H8V8.67h4.29L14,6Z'
    />
  </Fragment>
)

const Deviantart = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Deviantart
