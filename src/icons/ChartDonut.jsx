import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10.71,6A6.08,6.08,0,1,0,18,13.3a.67.67,0,0,0-.68-.68H14.76a2.77,2.77,0,1,1-3.38-3.37V6.54A.61.61,0,0,0,10.71,6h0'
    />
    <path
      fill='none'
      d='M14.08,6.21A6.08,6.08,0,0,1,17.8,9.92h-3a6.14,6.14,0,0,0-.68-.67v-3'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M10.71,6A6.08,6.08,0,1,0,18,13.3a.67.67,0,0,0-.68-.68H14.76a2.77,2.77,0,1,1-3.38-3.37V6.54A.61.61,0,0,0,10.71,6h0' />
    <path d='M14.08,6.21A6.08,6.08,0,0,1,17.8,9.92h-3a6.14,6.14,0,0,0-.68-.67v-3' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M10.71,6A6.08,6.08,0,1,0,18,13.3a.67.67,0,0,0-.68-.68H14.76a2.77,2.77,0,1,1-3.38-3.37V6.54A.61.61,0,0,0,10.71,6h0'
    />
    <path
      fillOpacity='.2'
      d='M14.08,6.21A6.08,6.08,0,0,1,17.8,9.92h-3a6.14,6.14,0,0,0-.68-.67v-3'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M10.71,6A6.08,6.08,0,1,0,18,13.3a.67.67,0,0,0-.68-.68H14.76a2.77,2.77,0,1,1-3.38-3.37V6.54A.61.61,0,0,0,10.71,6h0'
    />
    <path
      fill={secondaryColor}
      d='M14.08,6.21A6.08,6.08,0,0,1,17.8,9.92h-3a6.14,6.14,0,0,0-.68-.67v-3'
    />
  </Fragment>
)

const ChartDonut = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartDonut
