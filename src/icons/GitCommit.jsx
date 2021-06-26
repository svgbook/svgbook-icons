import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='2' />
    <line x1='12' y1='6' x2='12' y2='10' />
    <line x1='12' y1='14' x2='12' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='12' r='2' />
    <line x1='12' y1='6' x2='12' y2='10' />
    <line x1='12' y1='14' x2='12' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='12' y1='6' x2='12' y2='10' />
    <line strokeOpacity='.2' x1='12' y1='14' x2='12' y2='18' />
    <circle fill='none' cx='12' cy='12' r='2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='2' />
    <line x1='12' y1='6' x2='12' y2='10' />
    <line x1='12' y1='14' x2='12' y2='18' />
  </Fragment>
)

const GitCommit = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GitCommit
