import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,12a6,6,0,1,1-6-6v6Z' />
    <path fill='none' d='M18,12H12V6A6,6,0,0,1,18,12Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M18,12a6,6,0,1,1-6-6v6Z' />
    <path d='M18,12H12V6A6,6,0,0,1,18,12Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M18,12a6,6,0,1,1-6-6v6Z' />
    <path fillOpacity='.2' d='M18,12H12V6A6,6,0,0,1,18,12Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M18,12a6,6,0,1,1-6-6v6Z' />
    <path fill={secondaryColor} d='M18,12H12V6A6,6,0,0,1,18,12Z' />
  </Fragment>
)

const ChartPie2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartPie2
