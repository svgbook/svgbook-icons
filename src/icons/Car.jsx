import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10,15a1.34,1.34,0,1,1-1.33-1.33A1.34,1.34,0,0,1,10,15Z'
    />
    <circle fill='none' cx='15.33' cy='15' r='1.33' />
    <path fill='none' d='M12,11V7.67M16,11,13.33,7.67h-6L6,11' />
    <path
      fill='none'
      d='M18,12.33V15H16.67A1.34,1.34,0,0,0,14,15H10a1.34,1.34,0,0,0-2.67,0H6V11H16.67A1.34,1.34,0,0,1,18,12.33Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M10,15a1.34,1.34,0,1,1-1.33-1.33A1.34,1.34,0,0,1,10,15Z'
    />
    <circle fill='none' cx='15.33' cy='15' r='1.33' />
    <path fill='none' d='M12,11V7.67M16,11,13.33,7.67h-6L6,11' />
    <path d='M18,12.33V15H16.67A1.34,1.34,0,0,0,14,15H10a1.34,1.34,0,0,0-2.67,0H6V11H16.67A1.34,1.34,0,0,1,18,12.33Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M10,15a1.34,1.34,0,1,1-1.33-1.33A1.34,1.34,0,0,1,10,15Z'
    />
    <circle fillOpacity='.2' cx='15.33' cy='15' r='1.33' />
    <path fill='none' d='M12,11V7.67M16,11,13.33,7.67h-6L6,11' />
    <path
      fillOpacity='.2'
      d='M18,12.33V15H16.67A1.34,1.34,0,0,0,14,15H10a1.34,1.34,0,0,0-2.67,0H6V11H16.67A1.34,1.34,0,0,1,18,12.33Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M10,15a1.34,1.34,0,1,1-1.33-1.33A1.34,1.34,0,0,1,10,15Z'
    />
    <circle fill='none' cx='15.33' cy='15' r='1.33' />
    <path fill='none' d='M12,11V7.67M16,11,13.33,7.67h-6L6,11' />
    <path
      fill={secondaryColor}
      d='M18,12.33V15H16.67A1.34,1.34,0,0,0,14,15H10a1.34,1.34,0,0,0-2.67,0H6V11H16.67A1.34,1.34,0,0,1,18,12.33Z'
    />
  </Fragment>
)

const Car = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Car
