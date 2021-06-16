import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline
      fill='none'
      points='12.67 6 12.67 10.67 16.67 10.67 11.33 18 11.33 13.33 7.33 13.33 12.67 6'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline points='12.67 6 12.67 10.67 16.67 10.67 11.33 18 11.33 13.33 7.33 13.33 12.67 6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline
      fillOpacity='.2'
      points='12.67 6 12.67 10.67 16.67 10.67 11.33 18 11.33 13.33 7.33 13.33 12.67 6'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline
      fill={secondaryColor}
      points='12.67 6 12.67 10.67 16.67 10.67 11.33 18 11.33 13.33 7.33 13.33 12.67 6'
    />
  </Fragment>
)

const Bolt = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bolt
