import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.33,8.68A5.32,5.32,0,0,1,17.06,12v.66a4,4,0,0,0,.54,2'
    />
    <path
      fill='none'
      d='M9.07,11.34a2.67,2.67,0,0,1,5.33,0V12a6.67,6.67,0,0,0,1.33,4'
    />
    <path fill='none' d='M11.74,11.34v1.33A9.36,9.36,0,0,0,13.4,18' />
    <path fill='none' d='M9.07,14a12.12,12.12,0,0,0,1.2,4' />
    <path
      fill='none'
      d='M7,16.67A14.71,14.71,0,0,1,6.41,12v-.67a5.33,5.33,0,0,1,8-4.63'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M16.33,8.68A5.32,5.32,0,0,1,17.06,12v.66a4,4,0,0,0,.54,2'
    />
    <path
      fill='none'
      d='M9.07,11.34a2.67,2.67,0,0,1,5.33,0V12a6.67,6.67,0,0,0,1.33,4'
    />
    <path fill='none' d='M11.74,11.34v1.33A9.36,9.36,0,0,0,13.4,18' />
    <path fill='none' d='M9.07,14a12.12,12.12,0,0,0,1.2,4' />
    <path
      fill='none'
      d='M7,16.67A14.71,14.71,0,0,1,6.41,12v-.67a5.33,5.33,0,0,1,8-4.63'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.33,8.68A5.32,5.32,0,0,1,17.06,12v.66a4,4,0,0,0,.54,2'
    />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M9.07,11.34a2.67,2.67,0,0,1,5.33,0V12a6.67,6.67,0,0,0,1.33,4'
    />
    <path fill='none' d='M11.74,11.34v1.33A9.36,9.36,0,0,0,13.4,18' />
    <path fill='none' strokeOpacity='.2' d='M9.07,14a12.12,12.12,0,0,0,1.2,4' />
    <path
      fill='none'
      d='M7,16.67A14.71,14.71,0,0,1,6.41,12v-.67a5.33,5.33,0,0,1,8-4.63'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M16.33,8.68A5.32,5.32,0,0,1,17.06,12v.66a4,4,0,0,0,.54,2'
    />
    <path
      fill='none'
      d='M9.07,11.34a2.67,2.67,0,0,1,5.33,0V12a6.67,6.67,0,0,0,1.33,4'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.74,11.34v1.33A9.36,9.36,0,0,0,13.4,18'
    />
    <path fill='none' d='M9.07,14a12.12,12.12,0,0,0,1.2,4' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M7,16.67A14.71,14.71,0,0,1,6.41,12v-.67a5.33,5.33,0,0,1,8-4.63'
    />
  </Fragment>
)

const FingerPrint = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FingerPrint
