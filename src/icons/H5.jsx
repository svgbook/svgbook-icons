import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15.33,16h1.34a1.34,1.34,0,0,0,0-2.67H15.33V10.67H18'
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
      d='M15.33,16h1.34a1.34,1.34,0,0,0,0-2.67H15.33V10.67H18'
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
      d='M15.33,16h1.34a1.34,1.34,0,0,0,0-2.67H15.33V10.67H18'
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
      d='M15.33,16h1.34a1.34,1.34,0,0,0,0-2.67H15.33V10.67H18'
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

const H5 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default H5
