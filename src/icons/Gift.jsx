import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M18,10v1.33a.67.67,0,0,1-.67.67H12V9.33h5.33A.67.67,0,0,1,18,10Z'
    />
    <path
      fill='none'
      d='M12,9.33V12H6.67A.67.67,0,0,1,6,11.33V10a.67.67,0,0,1,.67-.67Z'
    />
    <path fill='none' d='M16.67,12v4.67A1.34,1.34,0,0,1,15.33,18H12V12Z' />
    <path fill='none' d='M12,12v6H8.67a1.34,1.34,0,0,1-1.34-1.33V12Z' />
    <path
      fill='none'
      d='M12,9.33H9A1.67,1.67,0,1,1,9,6C10.32,6,11.51,7.3,12,9.33Z'
    />
    <path
      fill='none'
      d='M16.67,7.67A1.66,1.66,0,0,1,15,9.33H12C12.49,7.3,13.68,6,15,6A1.67,1.67,0,0,1,16.67,7.67Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M18,10v1.33a.67.67,0,0,1-.67.67H12V9.33h5.33A.67.67,0,0,1,18,10Z'
    />
    <path
      fill='none'
      d='M12,9.33V12H6.67A.67.67,0,0,1,6,11.33V10a.67.67,0,0,1,.67-.67Z'
    />
    <path d='M16.67,12v4.67A1.34,1.34,0,0,1,15.33,18H12V12Z' />
    <path d='M12,12v6H8.67a1.34,1.34,0,0,1-1.34-1.33V12Z' />
    <path
      fill='none'
      d='M12,9.33H9A1.67,1.67,0,1,1,9,6C10.32,6,11.51,7.3,12,9.33Z'
    />
    <path
      fill='none'
      d='M16.67,7.67A1.66,1.66,0,0,1,15,9.33H12C12.49,7.3,13.68,6,15,6A1.67,1.67,0,0,1,16.67,7.67Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M18,10v1.33a.67.67,0,0,1-.67.67H12V9.33h5.33A.67.67,0,0,1,18,10Z'
    />
    <path
      fillOpacity='.2'
      d='M12,9.33V12H6.67A.67.67,0,0,1,6,11.33V10a.67.67,0,0,1,.67-.67Z'
    />
    <path fillOpacity='.2' d='M16.67,12v4.67A1.34,1.34,0,0,1,15.33,18H12V12Z' />
    <path fillOpacity='.2' d='M12,12v6H8.67a1.34,1.34,0,0,1-1.34-1.33V12Z' />
    <path
      fill='none'
      d='M12,9.33H9A1.67,1.67,0,1,1,9,6C10.32,6,11.51,7.3,12,9.33Z'
    />
    <path
      fill='none'
      d='M16.67,7.67A1.66,1.66,0,0,1,15,9.33H12C12.49,7.3,13.68,6,15,6A1.67,1.67,0,0,1,16.67,7.67Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M18,10v1.33a.67.67,0,0,1-.67.67H12V9.33h5.33A.67.67,0,0,1,18,10Z'
    />
    <path
      fill={secondaryColor}
      d='M12,9.33V12H6.67A.67.67,0,0,1,6,11.33V10a.67.67,0,0,1,.67-.67Z'
    />
    <path
      fill={secondaryColor}
      d='M16.67,12v4.67A1.34,1.34,0,0,1,15.33,18H12V12Z'
    />
    <path
      fill={secondaryColor}
      d='M12,12v6H8.67a1.34,1.34,0,0,1-1.34-1.33V12Z'
    />
    <path
      fill='none'
      d='M12,9.33H9A1.67,1.67,0,1,1,9,6C10.32,6,11.51,7.3,12,9.33Z'
    />
    <path
      fill='none'
      d='M16.67,7.67A1.66,1.66,0,0,1,15,9.33H12C12.49,7.3,13.68,6,15,6A1.67,1.67,0,0,1,16.67,7.67Z'
    />
  </Fragment>
)

const Gift = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Gift
