import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='6' x2='18' y2='18' />
    <path fill='none' d='M13.89,10.11A2.67,2.67,0,0,1,14.67,12' />
    <path fill='none' d='M15.77,8.23a5.32,5.32,0,0,1,1.09,6' />
    <path fill='none' d='M10.11,13.89a2.68,2.68,0,0,1,0-3.78' />
    <path fill='none' d='M8.22,15.77a5.34,5.34,0,0,1,0-7.54h0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M13.89,10.11A2.67,2.67,0,0,1,14.67,12' />
    <path fill='none' d='M15.77,8.23a5.34,5.34,0,0,1,1.09,6' />
    <path fill='none' d='M10.11,13.89a2.68,2.68,0,0,1,0-3.78' />
    <path fill='none' d='M8.22,15.77a5.34,5.34,0,0,1,0-7.54h0' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' opacity='.2' d='M13.89,10.11A2.67,2.67,0,0,1,14.67,12' />
    <path fill='none' opacity='.2' d='M15.77,8.23a5.34,5.34,0,0,1,1.09,6' />
    <path fill='none' opacity='.2' d='M10.11,13.89a2.68,2.68,0,0,1,0-3.78' />
    <path fill='none' opacity='.2' d='M8.22,15.77a5.34,5.34,0,0,1,0-7.54h0' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M13.89,10.11A2.67,2.67,0,0,1,14.67,12'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M15.77,8.23a5.34,5.34,0,0,1,1.09,6'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M10.11,13.89a2.68,2.68,0,0,1,0-3.78'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M8.22,15.77a5.34,5.34,0,0,1,0-7.54h0'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const AccessPointOFF = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AccessPointOFF
