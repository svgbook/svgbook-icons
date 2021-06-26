import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.05,13.05V11.68A.69.69,0,0,1,8.74,11h4.79' />
    <circle fill='none' cx='7.37' cy='14.42' r='1.37' />
    <circle fill='none' cx='13.53' cy='14.42' r='1.37' />
    <path fill='none' d='M17,11.68v4.11H19' />
    <line x1='13.53' y1='15.79' x2='7.37' y2='15.79' />
    <line x1='7.37' y1='13.05' x2='13.53' y2='13.05' />
    <path fill='none' d='M10.11,11V7.58h1.36a2.05,2.05,0,0,1,2.06,2.05v3.42' />
    <line x1='16.95' y1='14.42' x2='14.89' y2='14.42' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M8.05,13.05V11.68A.69.69,0,0,1,8.74,11h4.79' />
    <circle cx='7.37' cy='14.42' r='1.37' />
    <circle cx='13.53' cy='14.42' r='1.37' />
    <path fill='none' d='M17,11.68v4.11H19' />
    <line x1='13.53' y1='15.79' x2='7.37' y2='15.79' />
    <line x1='7.37' y1='13.05' x2='13.53' y2='13.05' />
    <path fill='none' d='M10.11,11V7.58h1.36a2.05,2.05,0,0,1,2.06,2.05v3.42' />
    <line fill='none' x1='16.95' y1='14.42' x2='14.89' y2='14.42' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.05,13.05V11.68A.69.69,0,0,1,8.74,11h4.79' />
    <circle fillOpacity='.2' cx='7.37' cy='14.42' r='1.37' />
    <circle fillOpacity='.2' cx='13.53' cy='14.42' r='1.37' />
    <path fill='none' d='M17,11.68v4.11H19' />
    <line x1='13.53' y1='15.79' x2='7.37' y2='15.79' />
    <line x1='7.37' y1='13.05' x2='13.53' y2='13.05' />
    <path fill='none' d='M10.11,11V7.58h1.36a2.05,2.05,0,0,1,2.06,2.05v3.42' />
    <line x1='16.95' y1='14.42' x2='14.89' y2='14.42' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M8.05,13.05V11.68A.69.69,0,0,1,8.74,11h4.79' />
    <circle fill={secondaryColor} cx='7.37' cy='14.42' r='1.37' />
    <circle fill={secondaryColor} cx='13.53' cy='14.42' r='1.37' />
    <line x1='13.53' y1='15.79' x2='7.37' y2='15.79' />
    <line x1='7.37' y1='13.05' x2='13.53' y2='13.05' />
    <path fill='none' d='M10.11,11V7.58h1.36a2.05,2.05,0,0,1,2.06,2.05v3.42' />
    <line x1='16.95' y1='14.42' x2='14.89' y2='14.42' />
    <path fill='none' stroke={secondaryColor} d='M17,11.68v4.11H19' />
  </Fragment>
)

const Bulldozer = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bulldozer
