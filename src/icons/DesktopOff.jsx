import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M14.67,14.67h-8A.67.67,0,0,1,6,14V7.33a.67.67,0,0,1,.67-.66Z'
    />
    <line x1='8.67' y1='17.33' x2='15.33' y2='17.33' />
    <line x1='10' y1='14.67' x2='10' y2='17.33' />
    <line x1='14' y1='14.67' x2='14' y2='17.33' />
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fill='none'
      d='M9.33,6.67h8a.67.67,0,0,1,.67.66V14a.67.67,0,0,1-.67.67Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M14.67,14.67h-8A.67.67,0,0,1,6,14V7.33a.67.67,0,0,1,.67-.66Z' />
    <line x1='8.67' y1='17.33' x2='15.33' y2='17.33' />
    <line x1='10' y1='14.67' x2='10' y2='17.33' />
    <line x1='14' y1='14.67' x2='14' y2='17.33' />
    <line x1='6' y1='6' x2='18' y2='18' />
    <path d='M9.33,6.67h8a.67.67,0,0,1,.67.66V14a.67.67,0,0,1-.67.67Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M14.67,14.67h-8A.67.67,0,0,1,6,14V7.33a.67.67,0,0,1,.67-.66Z'
    />
    <line x1='8.67' y1='17.33' x2='15.33' y2='17.33' />
    <line x1='10' y1='14.67' x2='10' y2='17.33' />
    <line x1='14' y1='14.67' x2='14' y2='17.33' />
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fillOpacity='.2'
      d='M9.33,6.67h8a.67.67,0,0,1,.67.66V14a.67.67,0,0,1-.67.67Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M14.67,14.67h-8A.67.67,0,0,1,6,14V7.33a.67.67,0,0,1,.67-.66Z'
    />
    <line x1='8.67' y1='17.33' x2='15.33' y2='17.33' />
    <line x1='10' y1='14.67' x2='10' y2='17.33' />
    <line x1='14' y1='14.67' x2='14' y2='17.33' />
    <line x1='6' y1='6' x2='18' y2='18' />
    <path
      fill={secondaryColor}
      d='M9.33,6.67h8a.67.67,0,0,1,.67.66V14a.67.67,0,0,1-.67.67Z'
    />
  </Fragment>
)

const DesktopOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DesktopOff
