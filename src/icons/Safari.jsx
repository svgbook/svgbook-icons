import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline
      fill='none'
      points='9.33 14.67 10.67 10.67 14.67 9.33 13.33 13.33 9.33 14.67'
    />
    <circle fill='none' cx='12' cy='12' r='6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm3.14,4-1.33,4a.51.51,0,0,1-.32.32l-4,1.33a.41.41,0,0,1-.16,0A.47.47,0,0,1,9,15a.5.5,0,0,1-.12-.51l1.33-4a.51.51,0,0,1,.32-.32l4-1.33a.5.5,0,0,1,.63.63Z'
    />
    <polygon
      stroke='none'
      points='13.88 10.12 12.94 12.94 10.12 13.88 11.06 11.06 13.88 10.12'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <polyline
      fill='none'
      points='9.33 14.67 10.67 10.67 14.67 9.33 13.33 13.33 9.33 14.67'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <polyline
      fill='none'
      points='9.33 14.67 10.67 10.67 14.67 9.33 13.33 13.33 9.33 14.67'
    />
  </Fragment>
)

const Safari = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Safari
