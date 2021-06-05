import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12.35,18V8.82a2.83,2.83,0,1,1,2.83,2.83H6' />
    <path fill='none' d='M8.12,13.77,6,11.65,8.12,9.53' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12.35,18V8.82a2.83,2.83,0,1,1,2.83,2.83H6' />
    <path fill='none' d='M8.12,13.77,6,11.65,8.12,9.53' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M12.35,18V8.82a2.83,2.83,0,1,1,2.83,2.83H6'
    />
    <path fill='none' d='M8.12,13.77,6,11.65,8.12,9.53' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M12.35,18V8.82a2.83,2.83,0,1,1,2.83,2.83H6'
    />
    <path fill='none' d='M8.12,13.77,6,11.65,8.12,9.53' />
  </Fragment>
)

const ArrowLoopLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowLoopLeft
