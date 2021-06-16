import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='6' y1='12' x2='18' y2='12' />
    <line x1='12' y1='6' x2='12' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.5,5.5h-9a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2v-9A2,2,0,0,0,16.5,5.5Zm-5,12h-4a1,1,0,0,1-1-1v-4h5Zm0-6h-5v-4a1,1,0,0,1,1-1h4Zm6,5a1,1,0,0,1-1,1h-4v-5h5Zm0-5h-5v-5h4a1,1,0,0,1,1,1Z'
    />
    <rect stroke='none' x='13.5' y='13.5' width='3' height='3' />
    <rect stroke='none' x='13.5' y='7.5' width='3' height='3' />
    <rect stroke='none' x='7.5' y='7.5' width='3' height='3' />
    <rect stroke='none' x='7.5' y='13.5' width='3' height='3' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='6' y1='12' x2='18' y2='12' />
    <line x1='12' y1='6' x2='12' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='6' y1='12' x2='18' y2='12' />
    <line x1='12' y1='6' x2='12' y2='18' />
  </Fragment>
)

const BorderAll = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BorderAll
