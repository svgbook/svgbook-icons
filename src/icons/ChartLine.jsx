import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='6 13.88 9 9.38 12 10.88 15 7.13 18 10.13' />
    <line x1='6' y1='16.88' x2='18' y2='16.88' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline fill='none' points='6 13.88 9 9.38 12 10.88 15 7.13 18 10.13' />
    <line x1='6' y1='16.88' x2='18' y2='16.88' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline
      fill='none'
      strokeOpacity='.2'
      points='6 13.88 9 9.38 12 10.88 15 7.13 18 10.13'
    />
    <line x1='6' y1='16.88' x2='18' y2='16.88' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline
      fill='none'
      stroke={secondaryColor}
      points='6 13.88 9 9.38 12 10.88 15 7.13 18 10.13'
    />
    <line x1='6' y1='16.88' x2='18' y2='16.88' />
  </Fragment>
)

const ChartLine = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartLine
