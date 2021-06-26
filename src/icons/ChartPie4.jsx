import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,6v6L7.42,15.88A6,6,0,0,1,12,6Z' />
    <path fill='none' d='M18,12H12V6A6,6,0,0,1,18,12Z' />
    <path fill='none' d='M18,12a6,6,0,0,1-2.67,5L12,12Z' />
    <path fill='none' d='M15.33,17a6,6,0,0,1-7.91-1.11L12,12Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,6v6L7.42,15.88A6,6,0,0,1,12,6Z' />
    <path fill='none' d='M18,12H12V6A6,6,0,0,1,18,12Z' />
    <path fill='none' d='M18,12a6,6,0,0,1-2.67,5L12,12Z' />
    <path fill='none' d='M15.33,17a6,6,0,0,1-7.91-1.11L12,12Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M12,6v6L7.42,15.88A6,6,0,0,1,12,6Z' />
    <path fillOpacity='.2' d='M18,12H12V6A6,6,0,0,1,18,12Z' />
    <path fillOpacity='.2' d='M18,12a6,6,0,0,1-2.67,5L12,12Z' />
    <path fillOpacity='.2' d='M15.33,17a6,6,0,0,1-7.91-1.11L12,12Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M12,6v6L7.42,15.88A6,6,0,0,1,12,6Z' />
    <path fill={secondaryColor} d='M18,12H12V6A6,6,0,0,1,18,12Z' />
    <path fill={secondaryColor} d='M18,12a6,6,0,0,1-2.67,5L12,12Z' />
    <path fill={secondaryColor} d='M15.33,17a6,6,0,0,1-7.91-1.11L12,12Z' />
  </Fragment>
)

const ChartPie4 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartPie4
