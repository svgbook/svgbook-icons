import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <line x1='12' y1='9.33' x2='9.33' y2='12' />
    <line x1='12' y1='9.33' x2='12' y2='14.67' />
    <line x1='14.67' y1='12' x2='12' y2='9.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm3,6.85a.5.5,0,0,1-.35.15.51.51,0,0,1-.36-.15L12.5,10.54v4.13a.5.5,0,1,1-1,0V10.54L9.69,12.35a.51.51,0,0,1-.36.15A.5.5,0,0,1,9,12.35a.48.48,0,0,1,0-.7l2.6-2.6L11.65,9l.07-.06.08-.05h0a.47.47,0,0,1,.38,0h0l.08.05.07.06.07.07,2.6,2.6A.48.48,0,0,1,15,12.35Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <line x1='12' y1='9.33' x2='9.33' y2='12' />
    <line x1='12' y1='9.33' x2='12' y2='14.67' />
    <line x1='14.67' y1='12' x2='12' y2='9.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <line x1='12' y1='9.33' x2='9.33' y2='12' />
    <line x1='12' y1='9.33' x2='12' y2='14.67' />
    <line x1='14.67' y1='12' x2='12' y2='9.33' />
  </Fragment>
)

const ArrowUpCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowUpCircle
