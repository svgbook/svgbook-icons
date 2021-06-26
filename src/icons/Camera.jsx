import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.33,8.67H8A1.33,1.33,0,0,0,9.33,7.33.67.67,0,0,1,10,6.67h4a.67.67,0,0,1,.67.66A1.33,1.33,0,0,0,16,8.67h.67A1.33,1.33,0,0,1,18,10v6a1.33,1.33,0,0,1-1.33,1.33H7.33A1.33,1.33,0,0,1,6,16V10A1.33,1.33,0,0,1,7.33,8.67'
    />
    <circle fill='none' cx='12' cy='12.67' r='2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M16.67,8.67H16a1.33,1.33,0,0,1-1.33-1.34A.67.67,0,0,0,14,6.67H10a.67.67,0,0,0-.67.66A1.33,1.33,0,0,1,8,8.67H7.33A1.33,1.33,0,0,0,6,10v6a1.33,1.33,0,0,0,1.33,1.33h9.34A1.33,1.33,0,0,0,18,16V10A1.33,1.33,0,0,0,16.67,8.67Zm-4.67,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.67Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.67,8.67H16a1.33,1.33,0,0,1-1.33-1.34A.67.67,0,0,0,14,6.67H10a.67.67,0,0,0-.67.66A1.33,1.33,0,0,1,8,8.67H7.33A1.33,1.33,0,0,0,6,10v6a1.33,1.33,0,0,0,1.33,1.33h9.34A1.33,1.33,0,0,0,18,16V10A1.33,1.33,0,0,0,16.67,8.67Zm-4.67,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.67Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.67,8.67H16a1.33,1.33,0,0,1-1.33-1.34A.67.67,0,0,0,14,6.67H10a.67.67,0,0,0-.67.66A1.33,1.33,0,0,1,8,8.67H7.33A1.33,1.33,0,0,0,6,10v6a1.33,1.33,0,0,0,1.33,1.33h9.34A1.33,1.33,0,0,0,18,16V10A1.33,1.33,0,0,0,16.67,8.67Zm-4.67,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14.67Z'
    />
  </Fragment>
)

const Camera = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Camera
