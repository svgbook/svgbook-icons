import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.42,9.16v2.53H7.58V7.26A1.27,1.27,0,0,1,8.84,6h4.43V8.53a.63.63,0,0,0,.63.63Z'
    />
    <line x1='16.42' y1='9.16' x2='13.27' y2='6' />
    <line x1='6.32' y1='11.68' x2='17.69' y2='11.68' />
    <line x1='8.21' y1='14.21' x2='8.21' y2='15.47' />
    <line x1='10.74' y1='14.21' x2='10.74' y2='18' />
    <line x1='13.26' y1='14.21' x2='13.26' y2='15.47' />
    <line x1='15.79' y1='14.21' x2='15.79' y2='16.74' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M16.42,9.16v2.53H7.58V7.26A1.27,1.27,0,0,1,8.84,6h4.43V8.53a.63.63,0,0,0,.63.63Z' />
    <line x1='16.42' y1='9.16' x2='13.27' y2='6' />
    <line x1='6.32' y1='11.68' x2='17.69' y2='11.68' />
    <line x1='8.21' y1='14.21' x2='8.21' y2='15.47' />
    <line x1='10.74' y1='14.21' x2='10.74' y2='18' />
    <line x1='13.26' y1='14.21' x2='13.26' y2='15.47' />
    <line x1='15.79' y1='14.21' x2='15.79' y2='16.74' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.42,9.16v2.53H7.58V7.26A1.27,1.27,0,0,1,8.84,6h4.43V8.53a.63.63,0,0,0,.63.63Z'
    />
    <line x1='16.42' y1='9.16' x2='13.27' y2='6' />
    <line x1='6.32' y1='11.68' x2='17.69' y2='11.68' />
    <line x1='8.21' y1='14.21' x2='8.21' y2='15.47' />
    <line x1='10.74' y1='14.21' x2='10.74' y2='18' />
    <line x1='13.26' y1='14.21' x2='13.26' y2='15.47' />
    <line x1='15.79' y1='14.21' x2='15.79' y2='16.74' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M16.42,9.16v2.53H7.58V7.26A1.27,1.27,0,0,1,8.84,6h4.43V8.53a.63.63,0,0,0,.63.63Z'
    />
    <line x1='16.42' y1='9.16' x2='13.27' y2='6' />
    <line stroke={secondaryColor} x1='6.32' y1='11.68' x2='17.69' y2='11.68' />
    <line stroke={secondaryColor} x1='8.21' y1='14.21' x2='8.21' y2='15.47' />
    <line stroke={secondaryColor} x1='10.74' y1='14.21' x2='10.74' y2='18' />
    <line stroke={secondaryColor} x1='13.26' y1='14.21' x2='13.26' y2='15.47' />
    <line stroke={secondaryColor} x1='15.79' y1='14.21' x2='15.79' y2='16.74' />
  </Fragment>
)

const FileShredder = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileShredder
