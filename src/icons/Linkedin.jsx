import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='9' y1='11.25' x2='9' y2='15' />
    <line x1='9' y1='9' x2='9' y2='9.01' />
    <line x1='12' y1='15' x2='12' y2='11.25' />
    <path fill='none' d='M15,15V12.75a1.5,1.5,0,0,0-3,0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.5,5.5h-9a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2v-9A2,2,0,0,0,16.5,5.5ZM9.5,15a.5.5,0,0,1-1,0V11.25a.5.5,0,0,1,1,0Zm0-6A.5.5,0,1,1,9,8.5a.5.5,0,0,1,.5.5Zm6,6a.5.5,0,0,1-1,0V12.75a1,1,0,0,0-2,0V15a.5.5,0,0,1-1,0V11.25a.5.5,0,0,1,.5-.5.48.48,0,0,1,.46.3,2,2,0,0,1,1-.3,2,2,0,0,1,2,2Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='9' y1='11.25' x2='9' y2='15' />
    <line x1='9' y1='9' x2='9' y2='9.01' />
    <line x1='12' y1='15' x2='12' y2='11.25' />
    <path fill='none' d='M15,15V12.75a1.5,1.5,0,0,0-3,0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='6' y='6' width='12' height='12' rx='1.5' />
    <line x1='9' y1='11.25' x2='9' y2='15' />
    <line x1='9' y1='9' x2='9' y2='9.01' />
    <line x1='12' y1='15' x2='12' y2='11.25' />
    <path fill='none' d='M15,15V12.75a1.5,1.5,0,0,0-3,0' />
  </Fragment>
)

const Linkedin = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Linkedin
