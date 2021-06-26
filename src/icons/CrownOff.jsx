import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16,16H7.33L6.09,9.78a.16.16,0,0,1,.13-.19.17.17,0,0,1,.14,0l3,2.38,1.07-1.6m1.06-1.6L12,8l2.67,4,3-2.38a.16.16,0,0,1,.24,0,.14.14,0,0,1,0,.13L17,14.33'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M17.87,9.64a.16.16,0,0,0-.22,0l-3,2.38L17,14.32l.9-4.54A.15.15,0,0,0,17.87,9.64ZM11.46,8.8,14.67,12,12,8Z' />
    <path d='M16,16H7.33L6.09,9.78a.17.17,0,0,1,.14-.19.13.13,0,0,1,.12,0l3,2.38,1.07-1.6Z' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.87,9.64a.16.16,0,0,0-.22,0l-3,2.38L17,14.32l.9-4.54A.15.15,0,0,0,17.87,9.64ZM11.46,8.8,14.67,12,12,8Z'
    />
    <path
      fillOpacity='.2'
      d='M16,16H7.33L6.09,9.78a.17.17,0,0,1,.14-.19.13.13,0,0,1,.12,0l3,2.38,1.07-1.6Z'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M17.87,9.64a.16.16,0,0,0-.22,0l-3,2.38L17,14.32l.9-4.54A.15.15,0,0,0,17.87,9.64ZM11.46,8.8,14.67,12,12,8Z'
    />
    <path
      fill={secondaryColor}
      d='M16,16H7.33L6.09,9.78a.17.17,0,0,1,.14-.19.13.13,0,0,1,.12,0l3,2.38,1.07-1.6Z'
    />
    <line x1='6' y1='6' x2='18' y2='18' />
  </Fragment>
)

const CrownOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CrownOff
