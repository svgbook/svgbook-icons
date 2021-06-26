import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='15.76' y1='12.75' x2='15.01' y2='12' />
    <line x1='12' y1='9' x2='11.25' y2='8.25' />
    <polygon fill='none' points='15.01 12 9 18 6 18 6 15 12 9 15.01 12' />
    <path
      fill='none'
      d='M17.78,9.22,15,12,12,9l2.79-2.79a.77.77,0,0,1,1,0l2,2A.74.74,0,0,1,17.78,9.22Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='15.76' y1='12.75' x2='15.01' y2='12' />
    <line x1='12' y1='9' x2='11.25' y2='8.25' />
    <polygon fill='none' points='15.01 12 9 18 6 18 6 15 12 9 15.01 12' />
    <path d='M17.78,9.22,15,12,12,9l2.79-2.79a.77.77,0,0,1,1,0l2,2A.74.74,0,0,1,17.78,9.22Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='15.76' y1='12.75' x2='15.01' y2='12' />
    <line x1='12' y1='9' x2='11.25' y2='8.25' />
    <polygon fillOpacity='.2' points='15.01 12 9 18 6 18 6 15 12 9 15.01 12' />
    <path
      fillOpacity='.2'
      d='M17.78,9.22,15,12,12,9l2.79-2.79a.77.77,0,0,1,1,0l2,2A.74.74,0,0,1,17.78,9.22Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='15.76' y1='12.75' x2='15.01' y2='12' />
    <line x1='12' y1='9' x2='11.25' y2='8.25' />
    <polygon fill='none' points='15.01 12 9 18 6 18 6 15 12 9 15.01 12' />
    <path
      fill={secondaryColor}
      d='M17.78,9.22,15,12,12,9l2.79-2.79a.77.77,0,0,1,1,0l2,2A.74.74,0,0,1,17.78,9.22Z'
    />
  </Fragment>
)

const Colorpicker = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Colorpicker
