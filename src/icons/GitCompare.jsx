import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='8' cy='8' r='1.33' />
    <circle fill='none' cx='16' cy='16' r='1.33' />
    <path fill='none' d='M11.33,8h3.34A1.34,1.34,0,0,1,16,9.33v5.34' />
    <polyline fill='none' points='13.33 10 11.33 8 13.33 6' />
    <path fill='none' d='M12.67,16H9.33A1.34,1.34,0,0,1,8,14.67V9.33' />
    <polyline fill='none' points='10.67 14 12.67 16 10.67 18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='8' cy='8' r='1.33' />
    <circle cx='16' cy='16' r='1.33' />
    <path fill='none' d='M11.33,8h3.34A1.34,1.34,0,0,1,16,9.33v5.34' />
    <polyline fill='none' points='13.33 10 11.33 8 13.33 6' />
    <path fill='none' d='M12.67,16H9.33A1.34,1.34,0,0,1,8,14.67V9.33' />
    <polyline fill='none' points='10.67 14 12.67 16 10.67 18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' cx='8' cy='8' r='1.33' />
    <circle fill='none' cx='16' cy='16' r='1.33' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M11.33,8h3.34A1.34,1.34,0,0,1,16,9.33v5.34'
    />
    <polyline fill='none' points='13.33 10 11.33 8 13.33 6' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M12.67,16H9.33A1.34,1.34,0,0,1,8,14.67V9.33'
    />
    <polyline fill='none' points='10.67 14 12.67 16 10.67 18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.33,8h3.34A1.34,1.34,0,0,1,16,9.33v5.34'
    />
    <polyline fill='none' points='13.33 10 11.33 8 13.33 6' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M12.67,16H9.33A1.34,1.34,0,0,1,8,14.67V9.33'
    />
    <polyline fill='none' points='10.67 14 12.67 16 10.67 18' />
    <circle fill='none' cx='8' cy='8' r='1.33' />
    <circle fill='none' cx='16' cy='16' r='1.33' />
  </Fragment>
)

const GitCompare = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default GitCompare
