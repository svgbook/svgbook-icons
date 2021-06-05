import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10,17.32V11.86H7.5a.69.69,0,0,1-.68-.68.68.68,0,0,1,.2-.49l4.5-4.49a.67.67,0,0,1,1,0L17,10.69a.68.68,0,0,1,0,1,.67.67,0,0,1-.48.2H14.05v5.46a.68.68,0,0,1-.68.68H10.64A.68.68,0,0,1,10,17.32Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M10,17.32V11.86H7.5a.69.69,0,0,1-.68-.68.68.68,0,0,1,.2-.49l4.5-4.49a.67.67,0,0,1,1,0L17,10.69a.68.68,0,0,1,0,1,.67.67,0,0,1-.48.2H14.05v5.46a.68.68,0,0,1-.68.68H10.64A.68.68,0,0,1,10,17.32Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M10,17.32V11.86H7.5a.69.69,0,0,1-.68-.68.68.68,0,0,1,.2-.49l4.5-4.49a.67.67,0,0,1,1,0L17,10.69a.68.68,0,0,1,0,1,.67.67,0,0,1-.48.2H14.05v5.46a.68.68,0,0,1-.68.68H10.64A.68.68,0,0,1,10,17.32Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M10,17.32V11.86H7.5a.69.69,0,0,1-.68-.68.68.68,0,0,1,.2-.49l4.5-4.49a.67.67,0,0,1,1,0L17,10.69a.68.68,0,0,1,0,1,.67.67,0,0,1-.48.2H14.05v5.46a.68.68,0,0,1-.68.68H10.64A.68.68,0,0,1,10,17.32Z'
    />
  </Fragment>
)

const ArrowBigTop = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBigTop
