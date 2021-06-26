import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,12a6,6,0,1,1-6-6V9.33A2.67,2.67,0,1,0,14.67,12Z' />
    <path
      fill='none'
      d='M18,12H14.67A2.67,2.67,0,0,0,12,9.33V6A6,6,0,0,1,18,12Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M18,12a6,6,0,1,1-6-6V9.33A2.67,2.67,0,1,0,14.67,12Z' />
    <path
      fill='none'
      d='M18,12H14.67A2.67,2.67,0,0,0,12,9.33V6A6,6,0,0,1,18,12Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M18,12a6,6,0,1,1-6-6V9.33A2.67,2.67,0,1,0,14.67,12Z'
    />
    <path
      fillOpacity='.2'
      d='M18,12H14.67A2.67,2.67,0,0,0,12,9.33V6A6,6,0,0,1,18,12Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M18,12a6,6,0,1,1-6-6V9.33A2.67,2.67,0,1,0,14.67,12Z'
    />
    <path
      fill={secondaryColor}
      d='M18,12H14.67A2.67,2.67,0,0,0,12,9.33V6A6,6,0,0,1,18,12Z'
    />
  </Fragment>
)

const ChartDonut2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartDonut2
