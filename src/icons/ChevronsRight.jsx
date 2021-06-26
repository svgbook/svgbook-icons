import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='6 6.55 11.46 12 6 17.45' />
    <polyline fill='none' points='12.55 6.55 18 12 12.55 17.45' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline fill='none' points='6 6.55 11.46 12 6 17.45' />
    <polyline fill='none' points='12.55 6.55 18 12 12.55 17.45' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline fill='none' strokeOpacity='.2' points='6 6.55 11.46 12 6 17.45' />
    <polyline fill='none' points='12.55 6.55 18 12 12.55 17.45' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline
      fill='none'
      stroke={secondaryColor}
      points='6 6.55 11.46 12 6 17.45'
    />
    <polyline fill='none' points='12.55 6.55 18 12 12.55 17.45' />
  </Fragment>
)

const ChevronsRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChevronsRight
