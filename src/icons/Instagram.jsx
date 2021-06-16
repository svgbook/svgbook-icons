import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='12' height='12' rx='3' />
    <circle fill='none' cx='12' cy='12' r='2.25' />
    <line x1='15.38' y1='8.63' x2='15.38' y2='8.63' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M15,5.5H9A3.5,3.5,0,0,0,5.5,9v6A3.5,3.5,0,0,0,9,18.5h6A3.5,3.5,0,0,0,18.5,15V9A3.5,3.5,0,0,0,15,5.5Zm-3,9.25A2.75,2.75,0,1,1,14.75,12,2.75,2.75,0,0,1,12,14.75ZM15.5,9a.5.5,0,1,1,.5-.5A.5.5,0,0,1,15.5,9Z'
    />
    <circle stroke='none' cx='12' cy='12' r='1.75' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6' width='12' height='12' rx='3' />
    <circle fill='none' cx='12' cy='12' r='2.25' />
    <line x1='15.38' y1='8.63' x2='15.38' y2='8.63' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='6' y='6' width='12' height='12' rx='3' />
    <circle fill='none' cx='12' cy='12' r='2.25' />
    <line x1='15.38' y1='8.63' x2='15.38' y2='8.63' />
  </Fragment>
)

const Instagram = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Instagram
