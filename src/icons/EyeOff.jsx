import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6.42' y1='6.6' x2='17.39' y2='17.57' />
    <path fill='none' d='M11,11.23A1.22,1.22,0,1,0,12.76,13' />
    <path
      fill='none'
      d='M10.3,8a5.77,5.77,0,0,1,1.6-.22q3.66,0,6.1,4.27a10.81,10.81,0,0,1-1.53,2.12m-1.3,1.14a5.71,5.71,0,0,1-3.27,1c-2.43,0-4.47-1.42-6.09-4.26A9.5,9.5,0,0,1,8.63,8.83'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6.42' y1='6.6' x2='17.39' y2='17.57' />
    <path d='M15.17,15.35a5.71,5.71,0,0,1-3.27,1c-2.43,0-4.47-1.42-6.09-4.26A9.5,9.5,0,0,1,8.63,8.83L11,11.23A1.22,1.22,0,1,0,12.76,13Z' />
    <path d='M10.3,8a5.77,5.77,0,0,1,1.6-.22q3.66,0,6.1,4.27a10.81,10.81,0,0,1-1.53,2.12Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M15.17,15.35a5.71,5.71,0,0,1-3.27,1c-2.43,0-4.47-1.42-6.09-4.26A9.5,9.5,0,0,1,8.63,8.83L11,11.23A1.22,1.22,0,1,0,12.76,13Z'
    />
    <path
      fillOpacity='.2'
      d='M10.3,8a5.77,5.77,0,0,1,1.6-.22q3.66,0,6.1,4.27a10.81,10.81,0,0,1-1.53,2.12Z'
    />
    <line x1='6.42' y1='6.6' x2='17.39' y2='17.57' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M15.17,15.35a5.71,5.71,0,0,1-3.27,1c-2.43,0-4.47-1.42-6.09-4.26A9.5,9.5,0,0,1,8.63,8.83L11,11.23A1.22,1.22,0,1,0,12.76,13Z'
    />
    <path
      fill={secondaryColor}
      d='M10.3,8a5.77,5.77,0,0,1,1.6-.22q3.66,0,6.1,4.27a10.81,10.81,0,0,1-1.53,2.12Z'
    />
    <line x1='6.42' y1='6.6' x2='17.39' y2='17.57' />
  </Fragment>
)

const EyeOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default EyeOff
