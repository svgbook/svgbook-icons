import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <ellipse fill='none' cx='11.68' cy='7.89' rx='5.05' ry='1.89' />
    <path
      fill='none'
      d='M6.63,7.89v3.79c0,1.05,2.26,1.9,5.05,1.9a13.29,13.29,0,0,0,2.09-.17m3-1.73V7.89'
    />
    <path
      fill='none'
      d='M6.63,11.68v3.79c0,1,2.11,1.84,4.76,1.9M13,16.11h4.42m-1.9-1.9,1.9,1.9L15.47,18'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <ellipse cx='11.68' cy='7.89' rx='5.05' ry='1.89' />
    <path
      fill='none'
      d='M6.63,7.89v3.79c0,1.05,2.26,1.9,5.05,1.9a13.29,13.29,0,0,0,2.09-.17m3-1.73V7.89'
    />
    <path
      fill='none'
      d='M6.63,11.68v3.79c0,1,2.11,1.84,4.76,1.9M13,16.11h4.42m-1.9-1.9,1.9,1.9L15.47,18'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <ellipse fillOpacity='.2' cx='11.68' cy='7.89' rx='5.05' ry='1.89' />
    <path
      fill='none'
      d='M6.63,7.89v3.79c0,1.05,2.26,1.9,5.05,1.9a13.29,13.29,0,0,0,2.09-.17m3-1.73V7.89'
    />
    <path fill='none' d='M6.63,11.68v3.79c0,1,2.11,1.84,4.76,1.9' />
    <line strokeOpacity='.2' x1='12.95' y1='16.11' x2='17.37' y2='16.11' />
    <polyline
      fill='none'
      strokeOpacity='.2'
      points='15.47 14.21 17.37 16.11 15.47 18'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <ellipse fill={secondaryColor} cx='11.68' cy='7.89' rx='5.05' ry='1.89' />
    <path
      fill='none'
      d='M6.63,7.89v3.79c0,1.05,2.26,1.9,5.05,1.9a13.29,13.29,0,0,0,2.09-.17m3-1.73V7.89'
    />
    <path fill='none' d='M6.63,11.68v3.79c0,1,2.11,1.84,4.76,1.9' />
    <line stroke={secondaryColor} x1='12.95' y1='16.11' x2='17.37' y2='16.11' />
    <polyline
      fill='none'
      stroke={secondaryColor}
      points='15.47 14.21 17.37 16.11 15.47 18'
    />
  </Fragment>
)

const DatabaseExport = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DatabaseExport
