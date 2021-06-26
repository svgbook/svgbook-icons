import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='7.5' height='12' rx='0.75' />
    <line x1='9' y1='6.75' x2='10.5' y2='6.75' />
    <line x1='9.75' y1='15.75' x2='9.75' y2='15.76' />
    <path fill='none' d='M18,7.5,16.5,9.75,18,12l-1.5,2.25L18,16.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12.75,5.5h-6A1.25,1.25,0,0,0,5.5,6.75v10.5A1.25,1.25,0,0,0,6.75,18.5h6A1.25,1.25,0,0,0,14,17.25V6.75A1.25,1.25,0,0,0,12.75,5.5Zm-2.5,10.26a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm.25-8.51H9a.5.5,0,0,1-.5-.5.43.43,0,0,1,.07-.25A.48.48,0,0,1,9,6.25h1.5a.51.51,0,0,1,.44.25.51.51,0,0,1,.06.25A.5.5,0,0,1,10.5,7.25Z'
    />
    <path fill='none' d='M18,7.5,16.5,9.75,18,12l-1.5,2.25L18,16.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6' width='7.5' height='12' rx='0.75' />
    <line x1='9' y1='6.75' x2='10.5' y2='6.75' />
    <line x1='9.75' y1='15.75' x2='9.75' y2='15.76' />
    <path fill='none' d='M18,7.5,16.5,9.75,18,12l-1.5,2.25L18,16.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='6' y='6' width='7.5' height='12' rx='0.75' />
    <line x1='9' y1='6.75' x2='10.5' y2='6.75' />
    <line x1='9.75' y1='15.75' x2='9.75' y2='15.76' />
    <path fill='none' d='M18,7.5,16.5,9.75,18,12l-1.5,2.25L18,16.5' />
  </Fragment>
)

const MobileVibration = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default MobileVibration
