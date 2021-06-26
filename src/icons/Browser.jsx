import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='12' height='12' rx='0.75' />
    <line x1='6' y1='9' x2='18' y2='9' />
    <line x1='9' y1='6' x2='9' y2='9' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect stroke='none' x='7.5' y='10.5' width='9' height='6' />
    <path
      stroke='none'
      d='M17.25,5.5H6.75A1.25,1.25,0,0,0,5.5,6.75v10.5A1.25,1.25,0,0,0,6.75,18.5h10.5a1.25,1.25,0,0,0,1.25-1.25V6.75A1.25,1.25,0,0,0,17.25,5.5ZM6.5,6.75a.25.25,0,0,1,.25-.25H8.5v2h-2Zm11,10.5a.25.25,0,0,1-.25.25H6.75a.25.25,0,0,1-.25-.25V9.5h11Zm0-8.75h-8v-2h7.75a.25.25,0,0,1,.25.25Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6' width='12' height='12' rx='0.75' />
    <line x1='6' y1='9' x2='18' y2='9' />
    <line x1='9' y1='6' x2='9' y2='9' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='6' y='6' width='12' height='12' rx='0.75' />
    <line x1='6' y1='9' x2='18' y2='9' />
    <line x1='9' y1='6' x2='9' y2='9' />
  </Fragment>
)

const Browser = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Browser
