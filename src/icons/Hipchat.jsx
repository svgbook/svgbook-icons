import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15.87,15.53l.13-.1a4.89,4.89,0,0,0,2-3.86c0-2.86-2.69-5.18-6-5.18S6,8.71,6,11.57s2.69,5.1,6,5.1c.28,0,.75,0,1.39-.06a6.21,6.21,0,0,0,3.15,1,.32.32,0,0,0,.27-.56,5.94,5.94,0,0,1-.94-1.52Z'
    />
    <path fill='none' d='M9,13a4.22,4.22,0,0,0,6,0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.48,15.68a5.34,5.34,0,0,0,2-4.11c0-3.13-2.92-5.68-6.5-5.68S5.5,8.44,5.5,11.57s2.85,5.6,6.5,5.6c.26,0,.68,0,1.26-.05a6.72,6.72,0,0,0,3.28,1,.85.85,0,0,0,.79-.46.86.86,0,0,0-.13-.91A7,7,0,0,1,16.48,15.68Zm-1.13-2.33a4.71,4.71,0,0,1-6.7,0,.49.49,0,0,1,.7-.7,3.83,3.83,0,0,0,5.3,0,.49.49,0,0,1,.7.7Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M15.87,15.53l.13-.1a4.89,4.89,0,0,0,2-3.86c0-2.86-2.69-5.18-6-5.18S6,8.71,6,11.57s2.69,5.1,6,5.1c.28,0,.75,0,1.39-.06a6.21,6.21,0,0,0,3.15,1,.32.32,0,0,0,.27-.56,5.94,5.94,0,0,1-.94-1.52Z'
    />
    <path fill='none' d='M9,13a4.22,4.22,0,0,0,6,0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M15.87,15.53l.13-.1a4.89,4.89,0,0,0,2-3.86c0-2.86-2.69-5.18-6-5.18S6,8.71,6,11.57s2.69,5.1,6,5.1c.28,0,.75,0,1.39-.06a6.21,6.21,0,0,0,3.15,1,.32.32,0,0,0,.27-.56,5.94,5.94,0,0,1-.94-1.52Z'
    />
    <path fill='none' d='M9,13a4.22,4.22,0,0,0,6,0' />
  </Fragment>
)

const Hipchat = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Hipchat
