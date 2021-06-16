import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15,8.25h.75a1.5,1.5,0,0,1,1.5,1.5v.37a.38.38,0,0,0,.37.38.38.38,0,0,1,.38.37v2.25a.38.38,0,0,1-.38.38.38.38,0,0,0-.37.37v.38a1.5,1.5,0,0,1-1.5,1.5h-1.5'
    />
    <path
      fill='none'
      d='M9,8.25H7.5A1.5,1.5,0,0,0,6,9.75v4.5a1.5,1.5,0,0,0,1.5,1.5h.75'
    />
    <path fill='none' d='M12,9l-1.5,3h2.25l-1.5,3' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M15,8.25h.75a1.5,1.5,0,0,1,1.5,1.5v.37a.38.38,0,0,0,.37.38.38.38,0,0,1,.38.37v2.25a.38.38,0,0,1-.38.38.38.38,0,0,0-.37.37v.38a1.5,1.5,0,0,1-1.5,1.5h-1.5'
    />
    <path
      fill='none'
      d='M9,8.25H7.5A1.5,1.5,0,0,0,6,9.75v4.5a1.5,1.5,0,0,0,1.5,1.5h.75'
    />
    <path fill='none' d='M12,9l-1.5,3h2.25l-1.5,3' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M15,8.25h.75a1.5,1.5,0,0,1,1.5,1.5v.37a.38.38,0,0,0,.37.38.38.38,0,0,1,.38.37v2.25a.38.38,0,0,1-.38.38.38.38,0,0,0-.37.37v.38a1.5,1.5,0,0,1-1.5,1.5h-1.5'
    />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M9,8.25H7.5A1.5,1.5,0,0,0,6,9.75v4.5a1.5,1.5,0,0,0,1.5,1.5h.75'
    />
    <path fill='none' d='M12,9l-1.5,3h2.25l-1.5,3' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M15,8.25h.75a1.5,1.5,0,0,1,1.5,1.5v.37a.38.38,0,0,0,.37.38.38.38,0,0,1,.38.37v2.25a.38.38,0,0,1-.38.38.38.38,0,0,0-.37.37v.38a1.5,1.5,0,0,1-1.5,1.5h-1.5'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M9,8.25H7.5A1.5,1.5,0,0,0,6,9.75v4.5a1.5,1.5,0,0,0,1.5,1.5h.75'
    />
    <path fill='none' d='M12,9l-1.5,3h2.25l-1.5,3' />
  </Fragment>
)

const BatteryCharging = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BatteryCharging
