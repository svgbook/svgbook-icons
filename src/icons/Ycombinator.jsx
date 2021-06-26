import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='12' height='12' rx='1.5' />
    <path fill='none' d='M9,8.25l3,4.5,3-4.5' />
    <line x1='12' y1='15.75' x2='12' y2='12.75' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.5,5.5h-9a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2v-9A2,2,0,0,0,16.5,5.5Zm-1.08,3L12.5,12.91v2.84a.5.5,0,0,1-1,0V12.91L8.58,8.53A.5.5,0,0,1,9.42,8L12,11.85,14.58,8a.5.5,0,0,1,.84.56Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6' width='12' height='12' rx='1.5' />
    <path fill='none' d='M9,8.25l3,4.5,3-4.5' />
    <line x1='12' y1='15.75' x2='12' y2='12.75' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='6' y='6' width='12' height='12' rx='1.5' />
    <path fill='none' d='M9,8.25l3,4.5,3-4.5' />
    <line x1='12' y1='15.75' x2='12' y2='12.75' />
  </Fragment>
)

const Ycombinator = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Ycombinator
