import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M10,9.67V9a2,2,0,0,1,4,0v.67' />
    <path
      fill='none'
      d='M9.33,9.67h5.34a4,4,0,0,1,.66,2v2a3.33,3.33,0,1,1-6.66,0v-2a4,4,0,0,1,.66-2'
    />
    <line x1='6' y1='12.33' x2='8.67' y2='12.33' />
    <line x1='15.33' y1='12.33' x2='18' y2='12.33' />
    <line x1='12' y1='17' x2='12' y2='13' />
    <line x1='6.67' y1='16.33' x2='8.9' y2='15' />
    <line x1='17.33' y1='16.33' x2='15.1' y2='15' />
    <line x1='6.67' y1='8.33' x2='9.17' y2='9.93' />
    <line x1='17.33' y1='8.33' x2='14.83' y2='9.93' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M10,9.67V9a2,2,0,0,1,4,0v.67' />
    <path d='M9.33,9.67h5.34a4,4,0,0,1,.66,2v2a3.33,3.33,0,1,1-6.66,0v-2a4,4,0,0,1,.66-2' />
    <line x1='6' y1='12.33' x2='8.67' y2='12.33' />
    <line x1='15.33' y1='12.33' x2='18' y2='12.33' />
    <line x1='12' y1='17' x2='12' y2='13' />
    <line x1='6.67' y1='16.33' x2='8.9' y2='15' />
    <line x1='17.33' y1='16.33' x2='15.1' y2='15' />
    <line x1='6.67' y1='8.33' x2='9.17' y2='9.93' />
    <line x1='17.33' y1='8.33' x2='14.83' y2='9.93' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M10,9.67V9a2,2,0,0,1,4,0v.67' />
    <path
      fillOpacity='.2'
      d='M9.33,9.67h5.34a4,4,0,0,1,.66,2v2a3.33,3.33,0,1,1-6.66,0v-2a4,4,0,0,1,.66-2'
    />
    <line x1='6' y1='12.33' x2='8.67' y2='12.33' />
    <line x1='15.33' y1='12.33' x2='18' y2='12.33' />
    <line x1='12' y1='17' x2='12' y2='13' />
    <line x1='6.67' y1='16.33' x2='8.9' y2='15' />
    <line x1='17.33' y1='16.33' x2='15.1' y2='15' />
    <line x1='6.67' y1='8.33' x2='9.17' y2='9.93' />
    <line x1='17.33' y1='8.33' x2='14.83' y2='9.93' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M10,9.67V9a2,2,0,0,1,4,0v.67' />
    <path
      fill={secondaryColor}
      d='M9.33,9.67h5.34a4,4,0,0,1,.66,2v2a3.33,3.33,0,1,1-6.66,0v-2a4,4,0,0,1,.66-2'
    />
    <line x1='6' y1='12.33' x2='8.67' y2='12.33' />
    <line x1='15.33' y1='12.33' x2='18' y2='12.33' />
    <line x1='12' y1='17' x2='12' y2='13' />
    <line x1='6.67' y1='16.33' x2='8.9' y2='15' />
    <line x1='17.33' y1='16.33' x2='15.1' y2='15' />
    <line x1='6.67' y1='8.33' x2='9.17' y2='9.93' />
    <line x1='17.33' y1='8.33' x2='14.83' y2='9.93' />
  </Fragment>
)

const Bug = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bug
