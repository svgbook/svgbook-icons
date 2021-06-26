import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='18' x2='18' y2='18' />
    <path fill='none' d='M6.67,18V10.67l1.66-3L12,6l3.67,1.67,1.66,3V18' />
    <circle fill='none' cx='12' cy='10' r='1.33' />
    <path
      fill='none'
      d='M10,18V14.67a.67.67,0,0,1,.67-.67h2.66a.67.67,0,0,1,.67.67V18'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='18' y1='18' x2='17.33' y2='18' />
    <line x1='14' y1='18' x2='10' y2='18' />
    <line x1='6.67' y1='18' x2='6' y2='18' />
    <path d='M15.67,7.67,12,6,8.33,7.67l-1.66,3V18H10V14.67a.67.67,0,0,1,.67-.67h2.66a.67.67,0,0,1,.67.67V18h3.33V10.67ZM12,11.33A1.33,1.33,0,1,1,13.33,10,1.32,1.32,0,0,1,12,11.33Z' />
    <path
      fill='none'
      d='M13.33,10A1.33,1.33,0,1,1,12,8.67,1.32,1.32,0,0,1,13.33,10Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='18' y1='18' x2='17.33' y2='18' />
    <line x1='14' y1='18' x2='10' y2='18' />
    <line x1='6.67' y1='18' x2='6' y2='18' />
    <path
      fillOpacity='.2'
      d='M15.67,7.67,12,6,8.33,7.67l-1.66,3V18H10V14.67a.67.67,0,0,1,.67-.67h2.66a.67.67,0,0,1,.67.67V18h3.33V10.67ZM12,11.33A1.33,1.33,0,1,1,13.33,10,1.32,1.32,0,0,1,12,11.33Z'
    />
    <path
      fill='none'
      d='M13.33,10A1.33,1.33,0,1,1,12,8.67,1.32,1.32,0,0,1,13.33,10Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='18' y1='18' x2='17.33' y2='18' />
    <line x1='14' y1='18' x2='10' y2='18' />
    <line x1='6.67' y1='18' x2='6' y2='18' />
    <path
      fill={secondaryColor}
      d='M15.67,7.67,12,6,8.33,7.67l-1.66,3V18H10V14.67a.67.67,0,0,1,.67-.67h2.66a.67.67,0,0,1,.67.67V18h3.33V10.67ZM12,11.33A1.33,1.33,0,1,1,13.33,10,1.32,1.32,0,0,1,12,11.33Z'
    />
    <path
      fill='none'
      d='M13.33,10A1.33,1.33,0,1,1,12,8.67,1.32,1.32,0,0,1,13.33,10Z'
    />
  </Fragment>
)

const Cottage = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Cottage
