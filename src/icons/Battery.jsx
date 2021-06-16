import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='5.25' y='7.5' width='13.5' height='10.5' rx='1.5' />
    <path d='M7.5,7.5V6' />
    <line x1='17.25' y1='6' x2='17.25' y2='7.5' />
    <line x1='7.88' y1='12.75' x2='10.13' y2='12.75' />
    <line x1='13.88' y1='12.75' x2='16.13' y2='12.75' />
    <line x1='15' y1='11.63' x2='15' y2='13.88' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.25,7H6.75a2,2,0,0,0-2,2v7.5a2,2,0,0,0,2,2h10.5a2,2,0,0,0,2-2V9A2,2,0,0,0,17.25,7Zm-7.13,6.25H7.88a.5.5,0,1,1,0-1h2.24a.5.5,0,0,1,0,1Zm6,0H15.5v.63a.5.5,0,1,1-1,0v-.63h-.62a.5.5,0,0,1,0-1h.62v-.63a.5.5,0,1,1,1,0v.63h.62a.5.5,0,0,1,0,1Z'
    />
    <path d='M7.5,7.5V6' />
    <line x1='17.25' y1='6' x2='17.25' y2='7.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect
      fillOpacity='.2'
      x='5.25'
      y='7.5'
      width='13.5'
      height='10.5'
      rx='1.5'
    />
    <path d='M7.5,7.5V6' />
    <line x1='17.25' y1='6' x2='17.25' y2='7.5' />
    <line x1='7.88' y1='12.75' x2='10.13' y2='12.75' />
    <line x1='13.88' y1='12.75' x2='16.13' y2='12.75' />
    <line x1='15' y1='11.63' x2='15' y2='13.88' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='5.25'
      y='7.5'
      width='13.5'
      height='10.5'
      rx='1.5'
    />
    <path d='M7.5,7.5V6' />
    <line x1='17.25' y1='6' x2='17.25' y2='7.5' />
    <line x1='7.88' y1='12.75' x2='10.13' y2='12.75' />
    <line x1='13.88' y1='12.75' x2='16.13' y2='12.75' />
    <line x1='15' y1='11.63' x2='15' y2='13.88' />
  </Fragment>
)

const Battery = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Battery
