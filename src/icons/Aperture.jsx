import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <line x1='6.4' y1='14' x2='13.43' y2='14' />
    <line x1='8.37' y1='7.29' x2='10.54' y2='13.98' />
    <line x1='15.36' y1='7.09' x2='9.67' y2='11.22' />
    <line x1='17.71' y1='13.67' x2='12.02' y2='9.54' />
    <line x1='12.17' y1='17.94' x2='14.35' y2='11.26' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polygon
      stroke='none'
      points='10.24 11.43 10.91 13.5 13.09 13.5 13.76 11.43 12 10.14 10.24 11.43'
    />
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm5.16,8.4-2.55-1.85-1.74,5.38a4.94,4.94,0,0,1-.87.07h-.2l1-3H7.11a5.09,5.09,0,0,1-.4-1H9.86L8.11,8.11a4.87,4.87,0,0,1,.83-.67l1,3L14.49,7.1a4.76,4.76,0,0,1,.9.58L12.85,9.53l4.58,3.32A4.63,4.63,0,0,1,17.16,13.9Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <line x1='6.4' y1='14' x2='13.43' y2='14' />
    <line x1='8.37' y1='7.29' x2='10.54' y2='13.98' />
    <line x1='15.36' y1='7.09' x2='9.67' y2='11.22' />
    <line x1='17.71' y1='13.67' x2='12.02' y2='9.54' />
    <line x1='12.17' y1='17.94' x2='14.35' y2='11.26' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <line x1='6.4' y1='14' x2='13.43' y2='14' />
    <line x1='8.37' y1='7.29' x2='10.54' y2='13.98' />
    <line x1='15.36' y1='7.09' x2='9.67' y2='11.22' />
    <line x1='17.71' y1='13.67' x2='12.02' y2='9.54' />
    <line x1='12.17' y1='17.94' x2='14.35' y2='11.26' />
  </Fragment>
)

const Aperture = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Aperture
