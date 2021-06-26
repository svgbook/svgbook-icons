import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12.67,15.33A1.34,1.34,0,1,1,11.33,14,1.34,1.34,0,0,1,12.67,15.33Z'
    />
    <line x1='18' y1='15.33' x2='16.67' y2='15.33' />
    <path
      fill='none'
      d='M14,7.33H7.33A1.34,1.34,0,0,0,6,8.67v6a.66.66,0,0,0,.67.66H10a1.34,1.34,0,0,1,2.67,0h4V10Zm-2,4a.67.67,0,0,1-.67.67H8.67A.67.67,0,0,1,8,11.33V10a.67.67,0,0,1,.67-.67h2.66A.67.67,0,0,1,12,10Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M12.67,15.33A1.34,1.34,0,1,1,11.33,14,1.34,1.34,0,0,1,12.67,15.33Z'
    />
    <line x1='18' y1='15.33' x2='16.67' y2='15.33' />
    <path d='M14,7.33H7.33A1.34,1.34,0,0,0,6,8.67v6a.66.66,0,0,0,.67.66H10a1.34,1.34,0,0,1,2.67,0h4V10Zm-2,4a.67.67,0,0,1-.67.67H8.67A.67.67,0,0,1,8,11.33V10a.67.67,0,0,1,.67-.67h2.66A.67.67,0,0,1,12,10Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12.67,15.33A1.34,1.34,0,1,1,11.33,14,1.34,1.34,0,0,1,12.67,15.33Z'
    />
    <line x1='18' y1='15.33' x2='16.67' y2='15.33' />
    <path
      fillOpacity='.2'
      d='M14,7.33H7.33A1.34,1.34,0,0,0,6,8.67v6a.66.66,0,0,0,.67.66H10a1.34,1.34,0,0,1,2.67,0h4V10Zm-2,4a.67.67,0,0,1-.67.67H8.67A.67.67,0,0,1,8,11.33V10a.67.67,0,0,1,.67-.67h2.66A.67.67,0,0,1,12,10Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M12.67,15.33A1.34,1.34,0,1,1,11.33,14,1.34,1.34,0,0,1,12.67,15.33Z'
    />
    <line x1='18' y1='15.33' x2='16.67' y2='15.33' />
    <path
      fill={secondaryColor}
      d='M14,7.33H7.33A1.34,1.34,0,0,0,6,8.67v6a.66.66,0,0,0,.67.66H10a1.34,1.34,0,0,1,2.67,0h4V10Zm-2,4a.67.67,0,0,1-.67.67H8.67A.67.67,0,0,1,8,11.33V10a.67.67,0,0,1,.67-.67h2.66A.67.67,0,0,1,12,10Z'
    />
  </Fragment>
)

const Caravan = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Caravan
