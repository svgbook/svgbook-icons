import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='7.76' cy='16.59' r='1.41' />
    <circle fill='none' cx='7.76' cy='8.12' r='1.41' />
    <circle fill='none' cx='16.24' cy='16.59' r='1.41' />
    <line x1='7.76' y1='9.53' x2='7.76' y2='15.18' />
    <path fill='none' d='M11.29,8.12h3.53a1.42,1.42,0,0,1,1.42,1.41v5.65' />
    <polyline fill='none' points='13.41 10.23 11.29 8.12 13.41 6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='7.76' cy='16.59' r='1.41' />
    <circle cx='7.76' cy='8.12' r='1.41' />
    <circle cx='16.24' cy='16.59' r='1.41' />
    <line x1='7.76' y1='9.53' x2='7.76' y2='15.18' />
    <path fill='none' d='M11.29,8.12h3.53a1.42,1.42,0,0,1,1.42,1.41v5.65' />
    <polyline fill='none' points='13.41 10.23 11.29 8.12 13.41 6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' cx='7.76' cy='16.59' r='1.41' />
    <circle fill='none' cx='7.76' cy='8.12' r='1.41' />
    <circle fill='none' cx='16.24' cy='16.59' r='1.41' />
    <line x1='7.76' y1='9.53' x2='7.76' y2='15.18' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M11.29,8.12h3.53a1.42,1.42,0,0,1,1.42,1.41v5.65'
    />
    <polyline fill='none' points='13.41 10.23 11.29 8.12 13.41 6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.29,8.12h3.53a1.42,1.42,0,0,1,1.42,1.41v5.65'
    />
    <polyline fill='none' points='13.41 10.23 11.29 8.12 13.41 6' />
    <circle fill='none' cx='7.76' cy='16.59' r='1.41' />
    <circle fill='none' cx='7.76' cy='8.12' r='1.41' />
    <circle fill='none' cx='16.24' cy='16.59' r='1.41' />
    <line x1='7.76' y1='9.53' x2='7.76' y2='15.18' />
  </Fragment>
)

const GitPullRequest = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GitPullRequest
