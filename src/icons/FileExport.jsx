import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12.63,6V8.53a.63.63,0,0,0,.63.63h2.53' />
    <path
      fill='none'
      d='M11.05,17.37H8.21A1.26,1.26,0,0,1,7,16.11V7.26A1.26,1.26,0,0,1,8.21,6h4.42l3.16,3.16v3.16'
    />
    <line x1='12.63' y1='16.11' x2='17.05' y2='16.11' />
    <polyline fill='none' points='15.16 14.21 17.05 16.11 15.16 18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12.63,6V8.53a.63.63,0,0,0,.63.63h2.53' />
    <path
      fill='none'
      d='M11.05,17.37H8.21A1.26,1.26,0,0,1,7,16.11V7.26A1.26,1.26,0,0,1,8.21,6h4.42l3.16,3.16v3.16'
    />
    <line x1='12.63' y1='16.11' x2='17.05' y2='16.11' />
    <polyline fill='none' points='15.16 14.21 17.05 16.11 15.16 18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M12.63,6V8.53a.63.63,0,0,0,.63.63h2.53' />
    <path
      fill='none'
      d='M11.05,17.37H8.21A1.26,1.26,0,0,1,7,16.11V7.26A1.26,1.26,0,0,1,8.21,6h4.42l3.16,3.16v3.16'
    />
    <line strokeOpacity='.2' x1='12.63' y1='16.11' x2='17.05' y2='16.11' />
    <polyline
      fill='none'
      strokeOpacity='.2'
      points='15.16 14.21 17.05 16.11 15.16 18'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M12.63,6V8.53a.63.63,0,0,0,.63.63h2.53' />
    <path
      fill='none'
      d='M11.05,17.37H8.21A1.26,1.26,0,0,1,7,16.11V7.26A1.26,1.26,0,0,1,8.21,6h4.42l3.16,3.16v3.16'
    />
    <line stroke={secondaryColor} x1='12.63' y1='16.11' x2='17.05' y2='16.11' />
    <polyline
      fill='none'
      stroke={secondaryColor}
      points='15.16 14.21 17.05 16.11 15.16 18'
    />
  </Fragment>
)

const FileExport = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileExport
