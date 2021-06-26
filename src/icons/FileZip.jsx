import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.21,17.2a1.25,1.25,0,0,1-.63-1.09V7.26A1.26,1.26,0,0,1,8.84,6h4.42l3.16,3.16v7a1.26,1.26,0,0,1-1.26,1.26h-.63'
    />
    <path
      fill='none'
      d='M11.37,14.84a1.26,1.26,0,0,1,1.26,1.27v1.26A.63.63,0,0,1,12,18H10.74a.63.63,0,0,1-.63-.63V16.11A1.26,1.26,0,0,1,11.37,14.84Z'
    />
    <line x1='11.37' y1='7.26' x2='10.74' y2='7.26' />
    <line x1='12.63' y1='8.53' x2='12' y2='8.53' />
    <line x1='11.37' y1='9.79' x2='10.74' y2='9.79' />
    <line x1='12.63' y1='11.05' x2='12' y2='11.05' />
    <line x1='11.37' y1='12.32' x2='10.74' y2='12.32' />
    <line x1='12.63' y1='13.58' x2='12' y2='13.58' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M8.21,17.2a1.25,1.25,0,0,1-.63-1.09V7.26A1.26,1.26,0,0,1,8.84,6h4.42l3.16,3.16v7a1.26,1.26,0,0,1-1.26,1.26h-.63'
    />
    <path d='M11.37,14.84a1.26,1.26,0,0,1,1.26,1.27v1.26A.63.63,0,0,1,12,18H10.74a.63.63,0,0,1-.63-.63V16.11A1.26,1.26,0,0,1,11.37,14.84Z' />
    <line x1='11.37' y1='7.26' x2='10.74' y2='7.26' />
    <line x1='12.63' y1='8.53' x2='12' y2='8.53' />
    <line x1='11.37' y1='9.79' x2='10.74' y2='9.79' />
    <line x1='12.63' y1='11.05' x2='12' y2='11.05' />
    <line x1='11.37' y1='12.32' x2='10.74' y2='12.32' />
    <line x1='12.63' y1='13.58' x2='12' y2='13.58' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.21,17.2a1.25,1.25,0,0,1-.63-1.09V7.26A1.26,1.26,0,0,1,8.84,6h4.42l3.16,3.16v7a1.26,1.26,0,0,1-1.26,1.26h-.63'
    />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M11.37,14.84a1.26,1.26,0,0,1,1.26,1.27v1.26A.63.63,0,0,1,12,18H10.74a.63.63,0,0,1-.63-.63V16.11A1.26,1.26,0,0,1,11.37,14.84Z'
    />
    <line strokeOpacity='.2' x1='11.37' y1='7.26' x2='10.74' y2='7.26' />
    <line strokeOpacity='.2' x1='12.63' y1='8.53' x2='12' y2='8.53' />
    <line strokeOpacity='.2' x1='11.37' y1='9.79' x2='10.74' y2='9.79' />
    <line strokeOpacity='.2' x1='12.63' y1='11.05' x2='12' y2='11.05' />
    <line strokeOpacity='.2' x1='11.37' y1='12.32' x2='10.74' y2='12.32' />
    <line strokeOpacity='.2' x1='12.63' y1='13.58' x2='12' y2='13.58' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M8.21,17.2a1.25,1.25,0,0,1-.63-1.09V7.26A1.26,1.26,0,0,1,8.84,6h4.42l3.16,3.16v7a1.26,1.26,0,0,1-1.26,1.26h-.63'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.37,14.84a1.26,1.26,0,0,1,1.26,1.27v1.26A.63.63,0,0,1,12,18H10.74a.63.63,0,0,1-.63-.63V16.11A1.26,1.26,0,0,1,11.37,14.84Z'
    />
    <line stroke={secondaryColor} x1='11.37' y1='7.26' x2='10.74' y2='7.26' />
    <line stroke={secondaryColor} x1='12.63' y1='8.53' x2='12' y2='8.53' />
    <line stroke={secondaryColor} x1='11.37' y1='9.79' x2='10.74' y2='9.79' />
    <line stroke={secondaryColor} x1='12.63' y1='11.05' x2='12' y2='11.05' />
    <line stroke={secondaryColor} x1='11.37' y1='12.32' x2='10.74' y2='12.32' />
    <line stroke={secondaryColor} x1='12.63' y1='13.58' x2='12' y2='13.58' />
  </Fragment>
)

const FileZip = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileZip
