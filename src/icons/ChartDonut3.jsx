import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,6V9.33a2.67,2.67,0,0,0-2,4.39L7.42,15.88A6,6,0,0,1,12,6Z'
    />
    <path
      fill='none'
      d='M18,12A6,6,0,0,1,7.42,15.88L10,13.72A2.67,2.67,0,0,0,14.67,12Z'
    />
    <path
      fill='none'
      d='M18,12H14.67A2.68,2.68,0,0,0,12,9.33V6A6,6,0,0,1,18,12Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M12,6V9.33a2.67,2.67,0,0,0-2,4.39L7.42,15.88A6,6,0,0,1,12,6Z'
    />
    <path
      fill='none'
      d='M18,12A6,6,0,0,1,7.42,15.88L10,13.72A2.67,2.67,0,0,0,14.67,12Z'
    />
    <path d='M18,12H14.67A2.68,2.68,0,0,0,12,9.33V6A6,6,0,0,1,18,12Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12,6V9.33a2.67,2.67,0,0,0-2,4.39L7.42,15.88A6,6,0,0,1,12,6Z'
    />
    <path
      fillOpacity='.2'
      d='M18,12A6,6,0,0,1,7.42,15.88L10,13.72A2.67,2.67,0,0,0,14.67,12Z'
    />
    <path
      fillOpacity='.2'
      d='M18,12H14.67A2.68,2.68,0,0,0,12,9.33V6A6,6,0,0,1,18,12Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12,6V9.33a2.67,2.67,0,0,0-2,4.39L7.42,15.88A6,6,0,0,1,12,6Z'
    />
    <path
      fill={secondaryColor}
      d='M18,12A6,6,0,0,1,7.42,15.88L10,13.72A2.67,2.67,0,0,0,14.67,12Z'
    />
    <path
      fill={secondaryColor}
      d='M18,12H14.67A2.68,2.68,0,0,0,12,9.33V6A6,6,0,0,1,18,12Z'
    />
  </Fragment>
)

const ChartDonut3 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartDonut3
