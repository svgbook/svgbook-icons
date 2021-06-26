import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='15.91' cy='7.41' r='1.41' />
    <path fill='none' d='M10.27,10.94a3.53,3.53,0,1,0,2.78,5.61' />
    <path
      fill='none'
      d='M17.33,17.29,14.5,13.77H11.68l2.12-3.53L11,8.12l-2.82.7'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='15.91' cy='7.41' r='1.41' />
    <path fill='none' d='M10.27,10.94a3.53,3.53,0,1,0,2.78,5.61' />
    <path
      fill='none'
      d='M17.33,17.29,14.5,13.77H11.68l2.12-3.53L11,8.12l-2.82.7'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' cx='15.91' cy='7.41' r='1.41' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M10.27,10.94a3.53,3.53,0,1,0,2.78,5.61'
    />
    <path
      fill='none'
      d='M17.33,17.29,14.5,13.77H11.68l2.12-3.53L11,8.12l-2.82.7'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' cx='15.91' cy='7.41' r='1.41' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M10.27,10.94a3.53,3.53,0,1,0,2.78,5.61'
    />
    <path
      fill='none'
      d='M17.33,17.29,14.5,13.77H11.68l2.12-3.53L11,8.12l-2.82.7'
    />
  </Fragment>
)

const Disabled2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Disabled2
