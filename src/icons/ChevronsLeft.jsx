import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='11.46 6.55 6 12 11.46 17.45' />
    <polyline fill='none' points='18 6.55 12.55 12 18 17.45' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline fill='none' points='11.46 6.55 6 12 11.46 17.45' />
    <polyline fill='none' points='18 6.55 12.55 12 18 17.45' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline fill='none' points='11.46 6.55 6 12 11.46 17.45' />
    <polyline
      fill='none'
      strokeOpacity='.2'
      points='18 6.55 12.55 12 18 17.45'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill='none' points='11.46 6.55 6 12 11.46 17.45' />
    <polyline
      fill='none'
      stroke={secondaryColor}
      points='18 6.55 12.55 12 18 17.45'
    />
  </Fragment>
)

const ChevronsLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChevronsLeft
