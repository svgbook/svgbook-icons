import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6' width='12' height='12' rx='1.5' />
    <circle cx='9.38' cy='9.38' r='0.37' />
    <circle cx='14.63' cy='9.38' r='0.37' />
    <circle cx='14.63' cy='14.63' r='0.37' />
    <circle cx='9.38' cy='14.63' r='0.37' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.5,5.5h-9a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2v-9A2,2,0,0,0,16.5,5.5Zm-7.12,10a.88.88,0,1,1,.87-.88A.87.87,0,0,1,9.38,15.5Zm0-5.25a.88.88,0,1,1,.87-.87A.87.87,0,0,1,9.38,10.25Zm5.24,5.25a.88.88,0,1,1,.88-.88A.87.87,0,0,1,14.62,15.5Zm0-5.25a.88.88,0,1,1,.88-.87A.87.87,0,0,1,14.62,10.25Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6' width='12' height='12' rx='1.5' />
    <circle cx='9.38' cy='9.38' r='0.37' />
    <circle cx='14.63' cy='9.38' r='0.37' />
    <circle cx='14.63' cy='14.63' r='0.37' />
    <circle cx='9.38' cy='14.63' r='0.37' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x='6' y='6' width='12' height='12' rx='1.5' />
    <circle cx='9.38' cy='9.38' r='0.37' />
    <circle cx='14.63' cy='9.38' r='0.37' />
    <circle cx='14.63' cy='14.63' r='0.37' />
    <circle cx='9.38' cy='14.63' r='0.37' />
  </Fragment>
)

const Dice = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Dice
