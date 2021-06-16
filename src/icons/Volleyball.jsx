import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M12,12a5.34,5.34,0,0,0,5.33,2.67M9,13a8,8,0,0,0,5.67,4.33'
    />
    <path
      fill='none'
      d='M12,12a5.35,5.35,0,0,0-5,3.29M12.63,8.9a8,8,0,0,0-6.58,2.74'
    />
    <path
      fill='none'
      d='M12,12a5.32,5.32,0,0,0-.36-5.95m2.73,8.05A8,8,0,0,0,15.29,7'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M12,12a5.34,5.34,0,0,0,5.33,2.67M9,13a8,8,0,0,0,5.67,4.33'
    />
    <path
      fill='none'
      d='M12,12a5.35,5.35,0,0,0-5,3.29M12.63,8.9a8,8,0,0,0-6.58,2.74'
    />
    <path
      fill='none'
      d='M12,12a5.32,5.32,0,0,0-.36-5.95m2.73,8.05A8,8,0,0,0,15.29,7'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M12,12a5.34,5.34,0,0,0,5.33,2.67M9,13a8,8,0,0,0,5.67,4.33'
    />
    <path
      fill='none'
      d='M12,12a5.35,5.35,0,0,0-5,3.29M12.63,8.9a8,8,0,0,0-6.58,2.74'
    />
    <path
      fill='none'
      d='M12,12a5.32,5.32,0,0,0-.36-5.95m2.73,8.05A8,8,0,0,0,15.29,7'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M12,12a5.34,5.34,0,0,0,5.33,2.67M9,13a8,8,0,0,0,5.67,4.33'
    />
    <path
      fill='none'
      d='M12,12a5.35,5.35,0,0,0-5,3.29M12.63,8.9a8,8,0,0,0-6.58,2.74'
    />
    <path
      fill='none'
      d='M12,12a5.32,5.32,0,0,0-.36-5.95m2.73,8.05A8,8,0,0,0,15.29,7'
    />
  </Fragment>
)

const Volleyball = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Volleyball
