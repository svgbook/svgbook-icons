import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,9.88a2.12,2.12,0,0,0,0,4.24Z' />
    <path
      fill='none'
      d='M7.76,7.76h2.48L12,6l1.77,1.76h2.47v2.48L18,12l-1.76,1.76v2.48H13.77L12,18l-1.76-1.76H7.76V13.76L6,12l1.76-1.76Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,9.88a2.12,2.12,0,0,0,0,4.24Z' />
    <path
      fill='none'
      d='M7.76,7.76h2.48L12,6l1.77,1.76h2.47v2.48L18,12l-1.76,1.76v2.48H13.77L12,18l-1.76-1.76H7.76V13.76L6,12l1.76-1.76Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.76,7.76h2.48L12,6l1.77,1.76h2.47v2.48L18,12l-1.76,1.76v2.48H13.77L12,18l-1.76-1.76H7.76V13.76L6,12l1.76-1.76Z'
    />
    <path fill='none' d='M12,9.88a2.12,2.12,0,0,0,0,4.24Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.76,7.76h2.48L12,6l1.77,1.76h2.47v2.48L18,12l-1.76,1.76v2.48H13.77L12,18l-1.76-1.76H7.76V13.76L6,12l1.76-1.76Z'
    />
    <path fill='none' d='M12,9.88a2.12,2.12,0,0,0,0,4.24Z' />
  </Fragment>
)

const BrightnessHalf = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BrightnessHalf
