import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M13.9,6V8.53a.63.63,0,0,0,.63.63h2.52' />
    <path
      fill='none'
      d='M8.21,9.16V7.26A1.27,1.27,0,0,1,9.47,6H13.9l3.15,3.16v7a1.26,1.26,0,0,1-1.26,1.26H12.63'
    />
    <circle fill='none' cx='8.84' cy='12.95' r='1.89' />
    <path fill='none' d='M7.89,14.84,7,18l1.89-.95,1.9.95-1-3.16' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M13.9,6V8.53a.63.63,0,0,0,.63.63h2.52' />
    <path
      fill='none'
      d='M8.21,9.16V7.26A1.27,1.27,0,0,1,9.47,6H13.9l3.15,3.16v7a1.26,1.26,0,0,1-1.26,1.26H12.63'
    />
    <circle cx='8.84' cy='12.95' r='1.89' />
    <path d='M7.89,14.84,7,18l1.89-.95,1.9.95-1-3.16' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M13.9,6V8.53a.63.63,0,0,0,.63.63h2.52' />
    <path
      fill='none'
      d='M8.21,9.16V7.26A1.27,1.27,0,0,1,9.47,6H13.9l3.15,3.16v7a1.26,1.26,0,0,1-1.26,1.26H12.63'
    />
    <circle fillOpacity='.2' cx='8.84' cy='12.95' r='1.89' />
    <path fillOpacity='.2' d='M7.89,14.84,7,18l1.89-.95,1.9.95-1-3.16' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M13.9,6V8.53a.63.63,0,0,0,.63.63h2.52' />
    <path
      fill='none'
      d='M8.21,9.16V7.26A1.27,1.27,0,0,1,9.47,6H13.9l3.15,3.16v7a1.26,1.26,0,0,1-1.26,1.26H12.63'
    />
    <circle fill={secondaryColor} cx='8.84' cy='12.95' r='1.89' />
    <path fill={secondaryColor} d='M7.89,14.84,7,18l1.89-.95,1.9.95-1-3.16' />
  </Fragment>
)

const FileCertificate = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileCertificate
