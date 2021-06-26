import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15.33,12A1.34,1.34,0,0,1,18,12a2.48,2.48,0,0,1-.54,1.24L15.33,16H18'
    />
    <path fill='none' d='M6.67,8v8' />
    <path fill='none' d='M12,8v8' />
    <path fill='none' d='M11.33,16h1.34' />
    <path fill='none' d='M6,16H7.33' />
    <path fill='none' d='M6.67,12H12' />
    <path fill='none' d='M6,8H7.33' />
    <path fill='none' d='M11.33,8h1.34' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M15.33,12A1.34,1.34,0,0,1,18,12a2.48,2.48,0,0,1-.54,1.24L15.33,16H18'
    />
    <path fill='none' d='M6.67,8v8' />
    <path fill='none' d='M12,8v8' />
    <path fill='none' d='M11.33,16h1.34' />
    <path fill='none' d='M6,16H7.33' />
    <path fill='none' d='M6.67,12H12' />
    <path fill='none' d='M6,8H7.33' />
    <path fill='none' d='M11.33,8h1.34' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M15.33,12A1.34,1.34,0,0,1,18,12a2.48,2.48,0,0,1-.54,1.24L15.33,16H18'
    />
    <path fill='none' d='M6.67,8v8' />
    <path fill='none' d='M12,8v8' />
    <path fill='none' d='M11.33,16h1.34' />
    <path fill='none' d='M6,16H7.33' />
    <path fill='none' d='M6.67,12H12' />
    <path fill='none' d='M6,8H7.33' />
    <path fill='none' d='M11.33,8h1.34' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M15.33,12A1.34,1.34,0,0,1,18,12a2.48,2.48,0,0,1-.54,1.24L15.33,16H18'
    />
    <path fill='none' d='M6.67,8v8' />
    <path fill='none' d='M12,8v8' />
    <path fill='none' d='M11.33,16h1.34' />
    <path fill='none' d='M6,16H7.33' />
    <path fill='none' d='M6.67,12H12' />
    <path fill='none' d='M6,8H7.33' />
    <path fill='none' d='M11.33,8h1.34' />
  </Fragment>
)

const H2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default H2
