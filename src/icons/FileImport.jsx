import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M14.21,6V8.53a.63.63,0,0,0,.63.63h2.53' />
    <path
      fill='none'
      d='M8.53,12.32V7.26A1.26,1.26,0,0,1,9.79,6h4.42l3.16,3.16v7a1.27,1.27,0,0,1-1.26,1.26H12.63'
    />
    <line x1='6.63' y1='16.11' x2='11.05' y2='16.11' />
    <polyline fill='none' points='9.16 14.21 11.05 16.11 9.16 18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M14.21,6V8.53a.63.63,0,0,0,.63.63h2.53' />
    <path
      fill='none'
      d='M8.53,12.32V7.26A1.26,1.26,0,0,1,9.79,6h4.42l3.16,3.16v7a1.27,1.27,0,0,1-1.26,1.26H12.63'
    />
    <line x1='6.63' y1='16.11' x2='11.05' y2='16.11' />
    <polyline fill='none' points='9.16 14.21 11.05 16.11 9.16 18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M14.21,6V8.53a.63.63,0,0,0,.63.63h2.53' />
    <path
      fill='none'
      d='M8.53,12.32V7.26A1.26,1.26,0,0,1,9.79,6h4.42l3.16,3.16v7a1.27,1.27,0,0,1-1.26,1.26H12.63'
    />
    <line strokeOpacity='.2' x1='6.63' y1='16.11' x2='11.05' y2='16.11' />
    <polyline
      fill='none'
      strokeOpacity='.2'
      points='9.16 14.21 11.05 16.11 9.16 18'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M14.21,6V8.53a.63.63,0,0,0,.63.63h2.53' />
    <path
      fill='none'
      d='M8.53,12.32V7.26A1.26,1.26,0,0,1,9.79,6h4.42l3.16,3.16v7a1.27,1.27,0,0,1-1.26,1.26H12.63'
    />
    <line stroke={secondaryColor} x1='6.63' y1='16.11' x2='11.05' y2='16.11' />
    <polyline
      fill='none'
      stroke={secondaryColor}
      points='9.16 14.21 11.05 16.11 9.16 18'
    />
  </Fragment>
)

const FileImport = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileImport
