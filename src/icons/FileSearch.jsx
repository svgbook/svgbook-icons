import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12.63,6V8.53a.63.63,0,0,0,.63.63h2.53' />
    <path
      fill='none'
      d='M11.37,17.37H8.21A1.26,1.26,0,0,1,7,16.11V7.26A1.26,1.26,0,0,1,8.21,6h4.42l3.16,3.16V12'
    />
    <circle fill='none' cx='14.21' cy='15.16' r='1.58' />
    <line x1='15.47' y1='16.42' x2='17.05' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12.63,6V8.53a.63.63,0,0,0,.63.63h2.53' />
    <path
      fill='none'
      d='M11.37,17.37H8.21A1.26,1.26,0,0,1,7,16.11V7.26A1.26,1.26,0,0,1,8.21,6h4.42l3.16,3.16V12'
    />
    <circle cx='14.21' cy='15.16' r='1.58' />
    <line x1='15.47' y1='16.42' x2='17.05' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M12.63,6V8.53a.63.63,0,0,0,.63.63h2.53' />
    <path
      fill='none'
      d='M11.37,17.37H8.21A1.26,1.26,0,0,1,7,16.11V7.26A1.26,1.26,0,0,1,8.21,6h4.42l3.16,3.16V12'
    />
    <circle fill='none' strokeOpacity='.2' cx='14.21' cy='15.16' r='1.58' />
    <line strokeOpacity='.2' x1='15.47' y1='16.42' x2='17.05' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M12.63,6V8.53a.63.63,0,0,0,.63.63h2.53' />
    <path
      fill='none'
      d='M11.37,17.37H8.21A1.26,1.26,0,0,1,7,16.11V7.26A1.26,1.26,0,0,1,8.21,6h4.42l3.16,3.16V12'
    />
    <circle
      fill='none'
      stroke={secondaryColor}
      cx='14.21'
      cy='15.16'
      r='1.58'
    />
    <line stroke={secondaryColor} x1='15.47' y1='16.42' x2='17.05' y2='18' />
  </Fragment>
)

const FileSearch = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileSearch
