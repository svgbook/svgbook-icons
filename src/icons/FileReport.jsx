import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='15.33' cy='15.33' r='2.67' />
    <path fill='none' d='M15.33,12.67v2.66H18' />
    <path fill='none' d='M12,6V8.67a.67.67,0,0,0,.67.66h2.66' />
    <path
      fill='none'
      d='M11.67,18H7.33A1.34,1.34,0,0,1,6,16.67V7.33A1.34,1.34,0,0,1,7.33,6H12l3.33,3.33v1.34m0,2v2.66'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle fill='none' cx='15.33' cy='15.33' r='2.67' />
    <path fill='none' d='M15.33,12.67v2.66H18' />
    <path fill='none' d='M12,6V8.67a.67.67,0,0,0,.67.66h2.66' />
    <path
      fill='none'
      d='M11.67,18H7.33A1.34,1.34,0,0,1,6,16.67V7.33A1.34,1.34,0,0,1,7.33,6H12l3.33,3.33v1.34m0,2v2.66'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='15.33' cy='15.33' r='2.67' />
    <path fillOpacity='.2' d='M15.33,12.67v2.66H18' />
    <path fill='none' d='M12,6V8.67a.67.67,0,0,0,.67.66h2.66' />
    <path
      fill='none'
      d='M11.67,18H7.33A1.34,1.34,0,0,1,6,16.67V7.33A1.34,1.34,0,0,1,7.33,6H12l3.33,3.33v1.34m0,2v2.66'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='15.33' cy='15.33' r='2.67' />
    <path fill={secondaryColor} d='M15.33,12.67v2.66H18' />
    <path fill='none' d='M12,6V8.67a.67.67,0,0,0,.67.66h2.66' />
    <path
      fill='none'
      d='M11.67,18H7.33A1.34,1.34,0,0,1,6,16.67V7.33A1.34,1.34,0,0,1,7.33,6H12l3.33,3.33v1.34m0,2v2.66'
    />
  </Fragment>
)

const FileReport = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileReport
