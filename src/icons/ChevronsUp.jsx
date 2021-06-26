import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='6.55 11.45 12 6 17.45 11.45' />
    <polyline fill='none' points='6.55 18 12 12.54 17.45 18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline fill='none' points='6.55 11.45 12 6 17.45 11.45' />
    <polyline fill='none' points='6.55 18 12 12.54 17.45 18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline fill='none' points='6.55 11.45 12 6 17.45 11.45' />
    <polyline
      fill='none'
      strokeOpacity='.2'
      points='6.55 18 12 12.54 17.45 18'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill='none' points='6.55 11.45 12 6 17.45 11.45' />
    <polyline
      fill='none'
      stroke={secondaryColor}
      points='6.55 18 12 12.54 17.45 18'
    />
  </Fragment>
)

const ChevronsUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChevronsUp
