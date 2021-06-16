import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='10.02' r='4.02' />
    <polyline
      fill='none'
      points='12 14.05 14.28 18 15.35 15.83 17.77 15.99 15.49 12.04'
    />
    <polyline
      fill='none'
      points='8.51 12.04 6.23 15.99 8.65 15.83 9.72 18 12 14.05'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='10.02' r='4.02' />
    <polyline
      fill='none'
      points='12 14.05 14.28 18 15.35 15.83 17.77 15.99 15.49 12.04'
    />
    <polyline
      fill='none'
      points='8.51 12.04 6.23 15.99 8.65 15.83 9.72 18 12 14.05'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='10.02' r='4.02' />
    <polyline
      fill='none'
      points='12 14.05 14.28 18 15.35 15.83 17.77 15.99 15.49 12.04'
    />
    <polyline
      fill='none'
      points='8.51 12.04 6.23 15.99 8.65 15.83 9.72 18 12 14.05'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='10.02' r='4.02' />
    <polyline
      fill='none'
      points='12 14.05 14.28 18 15.35 15.83 17.77 15.99 15.49 12.04'
    />
    <polyline
      fill='none'
      points='8.51 12.04 6.23 15.99 8.65 15.83 9.72 18 12 14.05'
    />
  </Fragment>
)

const Award = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Award
