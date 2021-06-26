import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='8.25' cy='16.5' r='1.5' />
    <circle fill='none' cx='8.25' cy='7.5' r='1.5' />
    <circle fill='none' cx='15.75' cy='12' r='1.5' />
    <line x1='8.25' y1='9' x2='8.25' y2='15' />
    <path fill='none' d='M8.25,9a3,3,0,0,0,3,3h3' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='8.25' cy='16.5' r='1.5' />
    <circle cx='8.25' cy='7.5' r='1.5' />
    <circle cx='15.75' cy='12' r='1.5' />
    <line x1='8.25' y1='9' x2='8.25' y2='15' />
    <path fill='none' d='M8.25,9a3,3,0,0,0,3,3h3' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='8.25' y1='9' x2='8.25' y2='15' />
    <path fill='none' strokeOpacity='.2' d='M8.25,9a3,3,0,0,0,3,3h3' />
    <circle fill='none' cx='8.25' cy='16.5' r='1.5' />
    <circle fill='none' cx='8.25' cy='7.5' r='1.5' />
    <circle fill='none' cx='15.75' cy='12' r='1.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='8.25' y1='9' x2='8.25' y2='15' />
    <path fill='none' stroke={secondaryColor} d='M8.25,9a3,3,0,0,0,3,3h3' />
    <circle fill='none' cx='8.25' cy='16.5' r='1.5' />
    <circle fill='none' cx='8.25' cy='7.5' r='1.5' />
    <circle fill='none' cx='15.75' cy='12' r='1.5' />
  </Fragment>
)

const GitMerge = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GitMerge
