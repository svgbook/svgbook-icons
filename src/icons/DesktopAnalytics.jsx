import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6.67' width='12' height='8' rx='0.67' />
    <path fill='none' d='M8.67,17.33h6.66' />
    <path fill='none' d='M10,14.67v2.66' />
    <path fill='none' d='M14,14.67v2.66' />
    <path fill='none' d='M10,12V9.33' />
    <path fill='none' d='M14,12V10.67' />
    <path fill='none' d='M12,12v-.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.33,6.17H6.67A1.16,1.16,0,0,0,5.5,7.33V14a1.17,1.17,0,0,0,1.17,1.17H9.5v1.66H8.67a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h6.66a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H14.5V15.17h2.83A1.17,1.17,0,0,0,18.5,14V7.33A1.16,1.16,0,0,0,17.33,6.17ZM11.5,11.33a.5.5,0,1,1,1,0V12a.5.5,0,0,1-1,0ZM10,12.5a.5.5,0,0,1-.5-.5V9.33a.5.5,0,1,1,1,0V12A.5.5,0,0,1,10,12.5Zm3.5,4.33h-3V15.17h3Zm1-4.83a.5.5,0,0,1-1,0V10.67a.5.5,0,0,1,1,0Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6.67' width='12' height='8' rx='0.67' />
    <path fill='none' d='M8.67,17.33h6.66' />
    <path fill='none' d='M10,14.67v2.66' />
    <path fill='none' d='M14,14.67v2.66' />
    <path fill='none' d='M10,12V9.33' />
    <path fill='none' d='M14,12V10.67' />
    <path fill='none' d='M12,12v-.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6'
      y='6.67'
      width='12'
      height='8'
      rx='0.67'
    />
    <path fill='none' d='M8.67,17.33h6.66' />
    <path fill='none' d='M10,14.67v2.66' />
    <path fill='none' d='M14,14.67v2.66' />
    <path fill='none' d='M10,12V9.33' />
    <path fill='none' d='M14,12V10.67' />
    <path fill='none' d='M12,12v-.67' />
  </Fragment>
)

const DesktopAnalytics = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DesktopAnalytics
