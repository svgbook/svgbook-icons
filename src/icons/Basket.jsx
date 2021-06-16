import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <polyline fill='none' points='8.25 10.5 12 6 15.75 10.5' />
    <path
      fill='none'
      d='M18.75,10.5l-1.5,6a1.61,1.61,0,0,1-1.5,1.5H8.25a1.62,1.62,0,0,1-1.5-1.5l-1.5-6Z'
    />
    <circle fill='none' cx='12' cy='14.25' r='1.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <polyline fill='none' points='8.25 10.5 12 6 15.75 10.5' />
    <path
      stroke='none'
      d='M19.14,10.19a.49.49,0,0,0-.39-.19H5.25a.49.49,0,0,0-.39.19.48.48,0,0,0-.09.43l1.49,6a2.11,2.11,0,0,0,2,1.92h7.53a2.09,2.09,0,0,0,2-1.88l1.5-6A.48.48,0,0,0,19.14,10.19ZM12,16.25a2,2,0,1,1,2-2A2,2,0,0,1,12,16.25Z'
    />
    <circle stroke='none' cx='12' cy='14.25' r='1' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <polyline fill='none' points='8.25 10.5 12 6 15.75 10.5' />
    <path
      fillOpacity='.2'
      d='M18.75,10.5l-1.5,6a1.61,1.61,0,0,1-1.5,1.5H8.25a1.62,1.62,0,0,1-1.5-1.5l-1.5-6Z'
    />
    <circle fill='none' cx='12' cy='14.25' r='1.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill='none' points='8.25 10.5 12 6 15.75 10.5' />
    <path
      fill={secondaryColor}
      d='M18.75,10.5l-1.5,6a1.61,1.61,0,0,1-1.5,1.5H8.25a1.62,1.62,0,0,1-1.5-1.5l-1.5-6Z'
    />
    <circle fill='none' cx='12' cy='14.25' r='1.5' />
  </Fragment>
)

const Basket = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Basket
