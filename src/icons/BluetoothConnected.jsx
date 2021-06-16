import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='8.25 9 15.75 15 12 18 12 6 15.75 9 8.25 15' />
    <line x1='6.38' y1='12' x2='7.13' y2='12' />
    <line x1='16.88' y1='12' x2='17.63' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polygon points='14.95 15 12.5 16.96 12.5 13.04 14.95 15' />
    <polygon points='14.95 9 12.5 10.96 12.5 7.04 14.95 9' />
    <polyline fill='none' points='8.25 9 15.75 15 12 18 12 6 15.75 9 8.25 15' />
    <line x1='6.38' y1='12' x2='7.13' y2='12' />
    <line x1='16.88' y1='12' x2='17.63' y2='12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polygon
      fillOpacity='.2'
      stroke='none'
      points='14.95 15 12.5 16.96 12.5 13.04 14.95 15'
    />
    <polygon
      fillOpacity='.2'
      stroke='none'
      points='14.95 9 12.5 10.96 12.5 7.04 14.95 9'
    />
    <polyline fill='none' points='8.25 9 15.75 15 12 18 12 6 15.75 9 8.25 15' />
    <line strokeOpacity='.2' x1='6.38' y1='12' x2='7.13' y2='12' />
    <line strokeOpacity='.2' x1='16.88' y1='12' x2='17.63' y2='12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polygon
      fill={secondaryColor}
      stroke='none'
      points='14.95 15 12.5 16.96 12.5 13.04 14.95 15'
    />
    <polygon
      fill={secondaryColor}
      stroke='none'
      points='14.95 9 12.5 10.96 12.5 7.04 14.95 9'
    />
    <polyline fill='none' points='8.25 9 15.75 15 12 18 12 6 15.75 9 8.25 15' />
    <line x1='6.38' y1='12' x2='7.13' y2='12' />
    <line x1='16.88' y1='12' x2='17.63' y2='12' />
  </Fragment>
)

const BluetoothConnected = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BluetoothConnected
