import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='12' height='12' rx='1.5' />
    <path d='M9,15H9' />
    <path d='M9,12H9' />
    <path d='M9,9H9' />
    <path d='M15,15h0' />
    <path d='M15,12h0' />
    <path d='M15,9h0' />
    <path d='M12,9h0' />
    <path d='M12,15h0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='12' height='12' rx='1.5' />
    <path d='M9,15H9' />
    <path d='M9,12H9' />
    <path d='M9,9H9' />
    <path d='M15,15h0' />
    <path d='M15,12h0' />
    <path d='M15,9h0' />
    <path d='M12,9h0' />
    <path d='M12,15h0' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6' width='12' height='12' rx='1.5' />
    <path d='M9,15H9' />
    <path d='M9,12H9' />
    <path d='M9,9H9' />
    <path d='M15,15h0' />
    <path d='M15,12h0' />
    <path d='M15,9h0' />
    <path d='M12,9h0' />
    <path d='M12,15h0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='6' y='6' width='12' height='12' rx='1.5' />
    <path d='M9,15H9' />
    <path d='M9,12H9' />
    <path d='M9,9H9' />
    <path d='M15,15h0' />
    <path d='M15,12h0' />
    <path d='M15,9h0' />
    <path d='M12,9h0' />
    <path d='M12,15h0' />
  </Fragment>
)

const BoxPadding = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BoxPadding
