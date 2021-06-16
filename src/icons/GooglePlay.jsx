import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6.68,6.47V17.53a.47.47,0,0,0,.47.47.46.46,0,0,0,.23-.06l9.76-5.62a.37.37,0,0,0,.13-.5.35.35,0,0,0-.13-.14L7.38,6.06a.47.47,0,0,0-.64.17.53.53,0,0,0-.06.24Z'
    />
    <line x1='14.02' y1='10' x2='7.01' y2='17.67' />
    <line x1='7.01' y1='6.33' x2='14.02' y2='14' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M6.68,6.47V17.53a.47.47,0,0,0,.47.47.46.46,0,0,0,.23-.06l9.76-5.62a.37.37,0,0,0,.13-.5.35.35,0,0,0-.13-.14L7.38,6.06a.47.47,0,0,0-.64.17.53.53,0,0,0-.06.24Z'
    />
    <line x1='14.02' y1='10' x2='7.01' y2='17.67' />
    <line x1='7.01' y1='6.33' x2='14.02' y2='14' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M6.68,6.47V17.53a.47.47,0,0,0,.47.47.46.46,0,0,0,.23-.06l9.76-5.62a.37.37,0,0,0,.13-.5.35.35,0,0,0-.13-.14L7.38,6.06a.47.47,0,0,0-.64.17.53.53,0,0,0-.06.24Z'
    />
    <line x1='14.02' y1='10' x2='7.01' y2='17.67' />
    <line x1='7.01' y1='6.33' x2='14.02' y2='14' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M6.68,6.47V17.53a.47.47,0,0,0,.47.47.46.46,0,0,0,.23-.06l9.76-5.62a.37.37,0,0,0,.13-.5.35.35,0,0,0-.13-.14L7.38,6.06a.47.47,0,0,0-.64.17.53.53,0,0,0-.06.24Z'
    />
    <line x1='14.02' y1='10' x2='7.01' y2='17.67' />
    <line x1='7.01' y1='6.33' x2='14.02' y2='14' />
  </Fragment>
)

const GooglePlay = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GooglePlay
