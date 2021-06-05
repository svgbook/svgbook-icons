import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M11.65,18V8.82a2.83,2.83,0,1,0-2.83,2.83H18' />
    <path fill='none' d='M15.88,13.77,18,11.65,15.88,9.53' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M11.65,18V8.82a2.83,2.83,0,1,0-2.83,2.83H18' />
    <path fill='none' d='M15.88,13.77,18,11.65,15.88,9.53' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M11.65,18V8.82a2.83,2.83,0,1,0-2.83,2.83H18'
    />
    <path fill='none' d='M15.88,13.77,18,11.65,15.88,9.53' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.65,18V8.82a2.83,2.83,0,1,0-2.83,2.83H18'
    />
    <path fill='none' d='M15.88,13.77,18,11.65,15.88,9.53' />
  </Fragment>
)

const ArrowLoopRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowLoopRight
