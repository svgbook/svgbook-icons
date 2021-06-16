import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9,9h6v6H9Z' />
    <path d='M6,6H6' />
    <path d='M9,6H9' />
    <path d='M12,6h0' />
    <path d='M15,6h0' />
    <path d='M18,6h0' />
    <path d='M6,18H6' />
    <path d='M9,18H9' />
    <path d='M12,18h0' />
    <path d='M15,18h0' />
    <path d='M18,18h0' />
    <path d='M18,15h0' />
    <path d='M18,12h0' />
    <path d='M18,9h0' />
    <path d='M6,15H6' />
    <path d='M6,12H6' />
    <path d='M6,9H6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M9,9h6v6H9Z' />
    <path d='M6,6H6' />
    <path d='M9,6H9' />
    <path d='M12,6h0' />
    <path d='M15,6h0' />
    <path d='M18,6h0' />
    <path d='M6,18H6' />
    <path d='M9,18H9' />
    <path d='M12,18h0' />
    <path d='M15,18h0' />
    <path d='M18,18h0' />
    <path d='M18,15h0' />
    <path d='M18,12h0' />
    <path d='M18,9h0' />
    <path d='M6,15H6' />
    <path d='M6,12H6' />
    <path d='M6,9H6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M9,9h6v6H9Z' />
    <path d='M6,6H6' />
    <path d='M9,6H9' />
    <path d='M12,6h0' />
    <path d='M15,6h0' />
    <path d='M18,6h0' />
    <path d='M6,18H6' />
    <path d='M9,18H9' />
    <path d='M12,18h0' />
    <path d='M15,18h0' />
    <path d='M18,18h0' />
    <path d='M18,15h0' />
    <path d='M18,12h0' />
    <path d='M18,9h0' />
    <path d='M6,15H6' />
    <path d='M6,12H6' />
    <path d='M6,9H6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M9,9h6v6H9Z' />
    <path d='M6,6H6' />
    <path d='M9,6H9' />
    <path d='M12,6h0' />
    <path d='M15,6h0' />
    <path d='M18,6h0' />
    <path d='M6,18H6' />
    <path d='M9,18H9' />
    <path d='M12,18h0' />
    <path d='M15,18h0' />
    <path d='M18,18h0' />
    <path d='M18,15h0' />
    <path d='M18,12h0' />
    <path d='M18,9h0' />
    <path d='M6,15H6' />
    <path d='M6,12H6' />
    <path d='M6,9H6' />
  </Fragment>
)

const BoxMargin = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BoxMargin
