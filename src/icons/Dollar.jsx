import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15.13,9.33A2,2,0,0,0,13.33,8H10.67a2,2,0,0,0,0,4h2.66a2,2,0,0,1,0,4H10.67a2,2,0,0,1-1.8-1.33'
    />
    <path fill='none' d='M12,6V8m0,8v2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M15.13,9.33A2,2,0,0,0,13.33,8H10.67a2,2,0,0,0,0,4h2.66a2,2,0,0,1,0,4H10.67a2,2,0,0,1-1.8-1.33'
    />
    <path fill='none' d='M12,6V8m0,8v2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15.13,9.33A2,2,0,0,0,13.33,8H10.67a2,2,0,0,0,0,4h2.66a2,2,0,0,1,0,4H10.67a2,2,0,0,1-1.8-1.33'
    />
    <path fill='none' strokeOpacity='.2' d='M12,6V8m0,8v2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M15.13,9.33A2,2,0,0,0,13.33,8H10.67a2,2,0,0,0,0,4h2.66a2,2,0,0,1,0,4H10.67a2,2,0,0,1-1.8-1.33'
    />
    <path fill='none' stroke={secondaryColor} d='M12,6V8m0,8v2' />
  </Fragment>
)

const Dollar = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Dollar
