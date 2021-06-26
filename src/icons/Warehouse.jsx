import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,17.67V9l6-2.67L18,9v8.67' />
    <path fill='none' d='M12.67,12.33h2.66v5.34H8.67v-4h4' />
    <path
      fill='none'
      d='M12.67,17.67v-6A.67.67,0,0,0,12,11H10.67a.67.67,0,0,0-.67.67v2'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,17.67V9l6-2.67L18,9v8.67' />
    <path fill='none' d='M12.67,12.33h2.66v5.34H8.67v-4h4' />
    <path
      fill='none'
      d='M12.67,17.67v-6A.67.67,0,0,0,12,11H10.67a.67.67,0,0,0-.67.67v2'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,17.67V9l6-2.67L18,9v8.67' />
    <path fill='none' strokeOpacity='.2' d='M12.67,12.33h2.66v5.34H8.67v-4h4' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M12.67,17.67v-6A.67.67,0,0,0,12,11H10.67a.67.67,0,0,0-.67.67v2'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M6,17.67V9l6-2.67L18,9v8.67' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M12.67,12.33h2.66v5.34H8.67v-4h4'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M12.67,17.67v-6A.67.67,0,0,0,12,11H10.67a.67.67,0,0,0-.67.67v2'
    />
  </Fragment>
)

const Warehouse = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Warehouse
