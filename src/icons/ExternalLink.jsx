import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M11.25,8.25H7.5A1.5,1.5,0,0,0,6,9.75V16.5A1.5,1.5,0,0,0,7.5,18h6.75a1.5,1.5,0,0,0,1.5-1.5V12.75'
    />
    <line x1='10.5' y1='13.5' x2='18' y2='6' />
    <polyline fill='none' points='14.25 6 18 6 18 9.75' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M11.25,8.25H7.5A1.5,1.5,0,0,0,6,9.75V16.5A1.5,1.5,0,0,0,7.5,18h6.75a1.5,1.5,0,0,0,1.5-1.5V12.75'
    />
    <line x1='10.5' y1='13.5' x2='18' y2='6' />
    <polyline fill='none' points='14.25 6 18 6 18 9.75' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M11.25,8.25H7.5A1.5,1.5,0,0,0,6,9.75V16.5A1.5,1.5,0,0,0,7.5,18h6.75a1.5,1.5,0,0,0,1.5-1.5V12.75'
    />
    <line x1='10.5' y1='13.5' x2='18' y2='6' />
    <polyline fill='none' points='14.25 6 18 6 18 9.75' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.25,8.25H7.5A1.5,1.5,0,0,0,6,9.75V16.5A1.5,1.5,0,0,0,7.5,18h6.75a1.5,1.5,0,0,0,1.5-1.5V12.75'
    />
    <line stroke={secondaryColor} x1='10.5' y1='13.5' x2='18' y2='6' />
    <polyline fill='none' points='14.25 6 18 6 18 9.75' />
  </Fragment>
)

const ExternalLink = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ExternalLink
