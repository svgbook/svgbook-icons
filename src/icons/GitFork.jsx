import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='16.5' r='1.5' />
    <circle fill='none' cx='8.25' cy='7.5' r='1.5' />
    <circle fill='none' cx='15.75' cy='7.5' r='1.5' />
    <path
      fill='none'
      d='M8.25,9v1.5A1.5,1.5,0,0,0,9.75,12h4.5a1.5,1.5,0,0,0,1.5-1.5V9'
    />
    <line x1='12' y1='12' x2='12' y2='15' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='16.5' r='1.5' />
    <circle cx='8.25' cy='7.5' r='1.5' />
    <circle cx='15.75' cy='7.5' r='1.5' />
    <path
      fill='none'
      d='M8.25,9v1.5A1.5,1.5,0,0,0,9.75,12h4.5a1.5,1.5,0,0,0,1.5-1.5V9'
    />
    <line x1='12' y1='12' x2='12' y2='15' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M8.25,9v1.5A1.5,1.5,0,0,0,9.75,12h4.5a1.5,1.5,0,0,0,1.5-1.5V9'
    />
    <line strokeOpacity='.2' x1='12' y1='12' x2='12' y2='15' />
    <circle fill='none' cx='12' cy='16.5' r='1.5' />
    <circle fill='none' cx='8.25' cy='7.5' r='1.5' />
    <circle fill='none' cx='15.75' cy='7.5' r='1.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M8.25,9v1.5A1.5,1.5,0,0,0,9.75,12h4.5a1.5,1.5,0,0,0,1.5-1.5V9'
    />
    <line stroke={secondaryColor} x1='12' y1='12' x2='12' y2='15' />
    <circle fill='none' cx='12' cy='16.5' r='1.5' />
    <circle fill='none' cx='8.25' cy='7.5' r='1.5' />
    <circle fill='none' cx='15.75' cy='7.5' r='1.5' />
  </Fragment>
)

const GitFork = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GitFork
