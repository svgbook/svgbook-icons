import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='7.2' cy='15' r='1.2' />
    <circle fill='none' cx='12.6' cy='15' r='1.2' />
    <line x1='12.6' y1='16.2' x2='7.2' y2='16.2' />
    <line x1='7.2' y1='13.8' x2='12.6' y2='13.8' />
    <path fill='none' d='M9.6,12V9h1.2a1.8,1.8,0,0,1,1.8,1.8v3' />
    <path fill='none' d='M7.8,13.8V12.6a.6.6,0,0,1,.6-.6h4.2' />
    <path fill='none' d='M17.47,10.73,15.6,7.8l-3,3' />
    <path fill='none' d='M17.47,10.73a1.8,1.8,0,1,1-2.54,2.54Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='7.2' cy='15' r='1.2' />
    <circle cx='12.6' cy='15' r='1.2' />
    <line x1='12.6' y1='16.2' x2='7.2' y2='16.2' />
    <line x1='7.2' y1='13.8' x2='12.6' y2='13.8' />
    <path fill='none' d='M9.6,12V9h1.2a1.8,1.8,0,0,1,1.8,1.8v3' />
    <path fill='none' d='M7.8,13.8V12.6a.6.6,0,0,1,.6-.6h4.2' />
    <path fill='none' d='M17.47,10.73,15.6,7.8l-3,3' />
    <path d='M17.47,10.73a1.8,1.8,0,1,1-2.54,2.54Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='7.2' cy='15' r='1.2' />
    <circle fillOpacity='.2' cx='12.6' cy='15' r='1.2' />
    <line x1='12.6' y1='16.2' x2='7.2' y2='16.2' />
    <line x1='7.2' y1='13.8' x2='12.6' y2='13.8' />
    <path fill='none' d='M9.6,12V9h1.2a1.8,1.8,0,0,1,1.8,1.8v3' />
    <path fill='none' d='M7.8,13.8V12.6a.6.6,0,0,1,.6-.6h4.2' />
    <path fill='none' d='M17.47,10.73,15.6,7.8l-3,3' />
    <path fillOpacity='.2' d='M17.47,10.73a1.8,1.8,0,1,1-2.54,2.54Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='7.2' cy='15' r='1.2' />
    <circle fill={secondaryColor} cx='12.6' cy='15' r='1.2' />
    <line x1='12.6' y1='16.2' x2='7.2' y2='16.2' />
    <line x1='7.2' y1='13.8' x2='12.6' y2='13.8' />
    <path fill='none' d='M9.6,12V9h1.2a1.8,1.8,0,0,1,1.8,1.8v3' />
    <path fill='none' d='M7.8,13.8V12.6a.6.6,0,0,1,.6-.6h4.2' />
    <path fill='none' d='M17.47,10.73,15.6,7.8l-3,3' />
    <path fill={secondaryColor} d='M17.47,10.73a1.8,1.8,0,1,1-2.54,2.54Z' />
  </Fragment>
)

const Backhoe = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Backhoe
