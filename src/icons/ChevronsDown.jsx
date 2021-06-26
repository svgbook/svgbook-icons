import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='6.55 6 12 11.45 17.45 6' />
    <polyline fill='none' points='6.55 12.54 12 18 17.45 12.54' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline fill='none' points='6.55 6 12 11.45 17.45 6' />
    <polyline fill='none' points='6.55 12.54 12 18 17.45 12.54' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline fill='none' strokeOpacity='.2' points='6.55 6 12 11.45 17.45 6' />
    <polyline fill='none' points='6.55 12.54 12 18 17.45 12.54' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline
      fill='none'
      stroke={secondaryColor}
      points='6.55 6 12 11.45 17.45 6'
    />
    <polyline fill='none' points='6.55 12.54 12 18 17.45 12.54' />
  </Fragment>
)

const ChevronsDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChevronsDown
