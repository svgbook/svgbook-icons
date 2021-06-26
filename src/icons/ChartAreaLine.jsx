import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline
      fill='none'
      points='6 17.63 9 13.13 12 14.63 15 10.88 18 13.88 18 17.63 6 17.63'
    />
    <polyline
      fill='none'
      points='6 12.38 8.25 9.38 11.25 10.88 15 6.38 18 9.38'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline points='6 17.63 9 13.13 12 14.63 15 10.88 18 13.88 18 17.63 6 17.63' />
    <polyline
      fill='none'
      points='6 12.38 8.25 9.38 11.25 10.88 15 6.38 18 9.38'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline
      fillOpacity='.2'
      points='6 17.63 9 13.13 12 14.63 15 10.88 18 13.88 18 17.63 6 17.63'
    />
    <polyline
      fill='none'
      points='6 12.38 8.25 9.38 11.25 10.88 15 6.38 18 9.38'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline
      fill={secondaryColor}
      points='6 17.63 9 13.13 12 14.63 15 10.88 18 13.88 18 17.63 6 17.63'
    />
    <polyline
      fill='none'
      points='6 12.38 8.25 9.38 11.25 10.88 15 6.38 18 9.38'
    />
  </Fragment>
)

const ChartAreaLine = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartAreaLine
