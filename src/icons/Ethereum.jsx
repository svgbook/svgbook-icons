import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polygon fill='none' points='16 12 12 18 8 12 12 13.33 16 12' />
    <polygon fill='none' points='16 12 12 10 8 12 12 6 16 12' />
    <polygon fill='none' points='16 12 12 13.33 8 12 12 10 16 12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polygon points='16 12 12 18 8 12 12 13.33 16 12' />
    <polygon points='16 12 12 10 8 12 12 6 16 12' />
    <polygon fill='none' points='16 12 12 13.33 8 12 12 10 16 12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polygon fillOpacity='.2' points='16 12 12 18 8 12 12 13.33 16 12' />
    <polygon fillOpacity='.2' points='16 12 12 10 8 12 12 6 16 12' />
    <polygon fill='none' points='16 12 12 13.33 8 12 12 10 16 12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polygon fill={secondaryColor} points='16 12 12 18 8 12 12 13.33 16 12' />
    <polygon fill={secondaryColor} points='16 12 12 10 8 12 12 6 16 12' />
    <polygon fill='none' points='16 12 12 13.33 8 12 12 10 16 12' />
  </Fragment>
)

const Ethereum = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Ethereum
