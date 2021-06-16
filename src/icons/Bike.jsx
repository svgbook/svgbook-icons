import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='7.11' cy='15.84' r='2.11' />
    <circle fill='none' cx='16.95' cy='15.84' r='2.11' />
    <polyline
      fill='none'
      points='12.03 16.55 12.03 13.73 9.92 11.62 13.44 8.81 14.84 10.92 16.95 10.92'
    />
    <circle fill='none' cx='15.54' cy='6.7' r='0.7' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='7.11' cy='15.84' r='2.11' />
    <circle cx='16.95' cy='15.84' r='2.11' />
    <polyline
      fill='none'
      points='12.03 16.55 12.03 13.73 9.92 11.62 13.44 8.81 14.84 10.92 16.95 10.92'
    />
    <circle cx='15.54' cy='6.7' r='0.7' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='7.11' cy='15.84' r='2.11' />
    <circle fillOpacity='.2' cx='16.95' cy='15.84' r='2.11' />
    <polyline
      fill='none'
      points='12.03 16.55 12.03 13.73 9.92 11.62 13.44 8.81 14.84 10.92 16.95 10.92'
    />
    <circle fillOpacity='.2' cx='15.54' cy='6.7' r='0.7' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='7.11' cy='15.84' r='2.11' />
    <circle fill={secondaryColor} cx='16.95' cy='15.84' r='2.11' />
    <polyline
      fill='none'
      points='12.03 16.55 12.03 13.73 9.92 11.62 13.44 8.81 14.84 10.92 16.95 10.92'
    />
    <circle fill={secondaryColor} cx='15.54' cy='6.7' r='0.7' />
  </Fragment>
)

const Bike = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bike
