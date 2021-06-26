import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <line x1='12' y1='6' x2='12' y2='18' />
    <line x1='12' y1='10' x2='15.1' y2='6.9' />
    <line x1='12' y1='13.53' x2='16.91' y2='8.62' />
    <line x1='12' y1='17.07' x2='17.9' y2='11.17' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm.5,1A5.1,5.1,0,0,1,14.29,7L12.5,8.8Zm0,3.67,2.68-2.68a5.65,5.65,0,0,1,1.1,1L12.5,12.33Zm0,3.54L16.84,9.4A5.59,5.59,0,0,1,17.4,11l-4.9,4.9Zm0,3.73,5-5.18A5.48,5.48,0,0,1,12.5,17.47Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <line x1='12' y1='6' x2='12' y2='18' />
    <line x1='12' y1='10' x2='15.1' y2='6.9' />
    <line x1='12' y1='13.53' x2='16.91' y2='8.62' />
    <line x1='12' y1='17.07' x2='17.9' y2='11.17' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <line x1='12' y1='6' x2='12' y2='18' />
    <line x1='12' y1='10' x2='15.1' y2='6.9' />
    <line x1='12' y1='13.53' x2='16.91' y2='8.62' />
    <line x1='12' y1='17.07' x2='17.9' y2='11.17' />
  </Fragment>
)

const Brightness = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Brightness
