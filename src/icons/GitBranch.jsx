import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='7.88' cy='16.5' r='1.5' />
    <circle fill='none' cx='7.88' cy='7.5' r='1.5' />
    <circle fill='none' cx='15.38' cy='7.5' r='1.5' />
    <line x1='7.88' y1='9' x2='7.88' y2='15' />
    <path fill='none' d='M9.38,16.5h4.5a1.5,1.5,0,0,0,1.5-1.5V11.25' />
    <polyline fill='none' points='13.13 13.5 15.38 11.25 17.63 13.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='7.88' cy='16.5' r='1.5' />
    <circle cx='7.88' cy='7.5' r='1.5' />
    <circle cx='15.38' cy='7.5' r='1.5' />
    <line x1='7.88' y1='9' x2='7.88' y2='15' />
    <path fill='none' d='M9.38,16.5h4.5a1.5,1.5,0,0,0,1.5-1.5V11.25' />
    <polyline fill='none' points='13.13 13.5 15.38 11.25 17.63 13.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' cx='7.88' cy='16.5' r='1.5' />
    <circle fill='none' cx='7.88' cy='7.5' r='1.5' />
    <circle fill='none' cx='15.38' cy='7.5' r='1.5' />
    <line x1='7.88' y1='9' x2='7.88' y2='15' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M9.38,16.5h4.5a1.5,1.5,0,0,0,1.5-1.5V11.25'
    />
    <polyline fill='none' points='13.13 13.5 15.38 11.25 17.63 13.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M9.38,16.5h4.5a1.5,1.5,0,0,0,1.5-1.5V11.25'
    />
    <circle fill='none' cx='7.88' cy='16.5' r='1.5' />
    <circle fill='none' cx='7.88' cy='7.5' r='1.5' />
    <circle fill='none' cx='15.38' cy='7.5' r='1.5' />
    <line x1='7.88' y1='9' x2='7.88' y2='15' />
    <polyline fill='none' points='13.13 13.5 15.38 11.25 17.63 13.5' />
  </Fragment>
)

const GitBranch = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GitBranch
