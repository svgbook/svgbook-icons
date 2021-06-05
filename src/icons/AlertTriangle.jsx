import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,10.52V12m0,3h0' />
    <path
      fill='none'
      d='M6.78,18H17.24a1.49,1.49,0,0,0,1.48-1.5,1.29,1.29,0,0,0-.11-.55l-5.3-9.16a1.51,1.51,0,0,0-2.62,0l-5.3,9.16a1.48,1.48,0,0,0,.82,1.94A1.35,1.35,0,0,0,6.7,18'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18.61,15.94l-5.3-9.16a1.51,1.51,0,0,0-2.62,0l-5.3,9.16a1.48,1.48,0,0,0,.82,1.94A1.35,1.35,0,0,0,6.7,18H17.24a1.49,1.49,0,0,0,1.48-1.5A1.29,1.29,0,0,0,18.61,15.94ZM12.51,15a.5.5,0,0,1-.5.5.5.5,0,1,1,.5-.51Zm0-3a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V10.52A.5.5,0,0,1,12,10a.5.5,0,0,1,.5.5Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M6.78,18H17.24a1.49,1.49,0,0,0,1.48-1.5,1.29,1.29,0,0,0-.11-.55l-5.3-9.16a1.51,1.51,0,0,0-2.62,0l-5.3,9.16a1.48,1.48,0,0,0,.82,1.94A1.35,1.35,0,0,0,6.7,18'
    />
    <path fill='none' d='M12,10.52V12m0,3h0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M6.78,18H17.24a1.49,1.49,0,0,0,1.48-1.5,1.29,1.29,0,0,0-.11-.55l-5.3-9.16a1.51,1.51,0,0,0-2.62,0l-5.3,9.16a1.48,1.48,0,0,0,.82,1.94A1.35,1.35,0,0,0,6.7,18'
    />
    <path fill='none' d='M12,10.52V12m0,3h0' />
  </Fragment>
)

const AlertTriangle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AlertTriangle
