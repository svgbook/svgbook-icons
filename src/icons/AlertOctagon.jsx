import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.8,6h4.4a.63.63,0,0,1,.47.2L17.8,9.33a.63.63,0,0,1,.2.47v4.4a.63.63,0,0,1-.2.47L14.67,17.8a.63.63,0,0,1-.47.2H9.8a.63.63,0,0,1-.47-.2L6.2,14.67A.63.63,0,0,1,6,14.2V9.8a.63.63,0,0,1,.2-.47L9.33,6.2A.63.63,0,0,1,9.8,6Z'
    />
    <line x1='12' y1='9.33' x2='12' y2='12' />
    <line x1='12' y1='14.67' x2='12.01' y2='14.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.8,9.33,14.67,6.2A.63.63,0,0,0,14.2,6H9.8a.63.63,0,0,0-.47.2L6.2,9.33A.63.63,0,0,0,6,9.8v4.4a.63.63,0,0,0,.2.47L9.33,17.8a.63.63,0,0,0,.47.2h4.4a.63.63,0,0,0,.47-.2l3.13-3.13a.63.63,0,0,0,.2-.47V9.8A.63.63,0,0,0,17.8,9.33Zm-6.3,0a.5.5,0,1,1,1,0V12a.5.5,0,0,1-1,0ZM12,15.17a.51.51,0,0,1-.51-.5.5.5,0,0,1,.5-.5h0a.5.5,0,0,1,.5.5A.51.51,0,0,1,12,15.17Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M9.8,6h4.4a.63.63,0,0,1,.47.2L17.8,9.33a.63.63,0,0,1,.2.47v4.4a.63.63,0,0,1-.2.47L14.67,17.8a.63.63,0,0,1-.47.2H9.8a.63.63,0,0,1-.47-.2L6.2,14.67A.63.63,0,0,1,6,14.2V9.8a.63.63,0,0,1,.2-.47L9.33,6.2A.63.63,0,0,1,9.8,6Z'
    />
    <line x1='12' y1='9.33' x2='12' y2='12' />
    <line x1='12' y1='14.67' x2='12.01' y2='14.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M9.8,6h4.4a.63.63,0,0,1,.47.2L17.8,9.33a.63.63,0,0,1,.2.47v4.4a.63.63,0,0,1-.2.47L14.67,17.8a.63.63,0,0,1-.47.2H9.8a.63.63,0,0,1-.47-.2L6.2,14.67A.63.63,0,0,1,6,14.2V9.8a.63.63,0,0,1,.2-.47L9.33,6.2A.63.63,0,0,1,9.8,6Z'
    />
    <line x1='12' y1='9.33' x2='12' y2='12' />
    <line x1='12' y1='14.67' x2='12.01' y2='14.67' />
  </Fragment>
)

const AlertOctagon = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AlertOctagon
