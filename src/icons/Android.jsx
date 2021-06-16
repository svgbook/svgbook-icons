import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6.67' y1='10.67' x2='6.67' y2='14.67' />
    <line x1='17.33' y1='10.67' x2='17.33' y2='14.67' />
    <path
      fill='none'
      d='M8.67,10h6.66v5.33a.66.66,0,0,1-.66.67H9.33a.67.67,0,0,1-.66-.67V10a3.33,3.33,0,0,1,6.66,0'
    />
    <line x1='9.33' y1='6' x2='10' y2='7.33' />
    <line x1='14.67' y1='6' x2='14' y2='7.33' />
    <line x1='10' y1='16' x2='10' y2='18' />
    <line x1='14' y1='16' x2='14' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6.67' y1='10.67' x2='6.67' y2='14.67' />
    <line x1='17.33' y1='10.67' x2='17.33' y2='14.67' />
    <path d='M8.67,10h6.66v5.33a.66.66,0,0,1-.66.67H9.33a.67.67,0,0,1-.66-.67V10a3.33,3.33,0,0,1,6.66,0' />
    <line x1='9.33' y1='6' x2='10' y2='7.33' />
    <line x1='14.67' y1='6' x2='14' y2='7.33' />
    <line x1='10' y1='16' x2='10' y2='18' />
    <line x1='14' y1='16' x2='14' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6.67' y1='10.67' x2='6.67' y2='14.67' />
    <line x1='17.33' y1='10.67' x2='17.33' y2='14.67' />
    <path
      fillOpacity='.2'
      d='M8.67,10h6.66v5.33a.66.66,0,0,1-.66.67H9.33a.67.67,0,0,1-.66-.67V10a3.33,3.33,0,0,1,6.66,0'
    />
    <line x1='9.33' y1='6' x2='10' y2='7.33' />
    <line x1='14.67' y1='6' x2='14' y2='7.33' />
    <line x1='10' y1='16' x2='10' y2='18' />
    <line x1='14' y1='16' x2='14' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6.67' y1='10.67' x2='6.67' y2='14.67' />
    <line x1='17.33' y1='10.67' x2='17.33' y2='14.67' />
    <path
      fill={secondaryColor}
      d='M8.67,10h6.66v5.33a.66.66,0,0,1-.66.67H9.33a.67.67,0,0,1-.66-.67V10a3.33,3.33,0,0,1,6.66,0'
    />
    <line x1='9.33' y1='6' x2='10' y2='7.33' />
    <line x1='14.67' y1='6' x2='14' y2='7.33' />
    <line x1='10' y1='16' x2='10' y2='18' />
    <line x1='14' y1='16' x2='14' y2='18' />
  </Fragment>
)

const Android = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Android
