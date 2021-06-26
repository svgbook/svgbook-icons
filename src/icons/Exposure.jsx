import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='6.45' y1='17.55' x2='17.55' y2='6.45' />
    <path fill='none' d='M8.25,9.75h3m-1.5-1.5v3' />
    <line x1='12.75' y1='15' x2='15.75' y2='15' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.5,5.5h-9a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2v-9A2,2,0,0,0,16.5,5.5ZM8.25,9.25h1v-1a.5.5,0,0,1,1,0v1h1a.5.5,0,0,1,0,1h-1v1a.5.5,0,0,1-1,0v-1h-1a.5.5,0,0,1,0-1Zm7.5,6.25h-3a.5.5,0,0,1,0-1h3a.5.5,0,0,1,0,1Zm-8.51,2a1,1,0,0,1-.7-.7L16.76,6.54a1,1,0,0,1,.7.7Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='6.45' y1='17.55' x2='17.55' y2='6.45' />
    <path fill='none' d='M8.25,9.75h3m-1.5-1.5v3' />
    <line x1='12.75' y1='15' x2='15.75' y2='15' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='6.45' y1='17.55' x2='17.55' y2='6.45' />
    <path fill='none' d='M8.25,9.75h3m-1.5-1.5v3' />
    <line x1='12.75' y1='15' x2='15.75' y2='15' />
  </Fragment>
)

const Exposure = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Exposure
