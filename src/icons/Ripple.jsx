import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='8.25' cy='12' r='2.25' />
    <circle fill='none' cx='15.75' cy='8.25' r='2.25' />
    <circle fill='none' cx='15.75' cy='15.75' r='2.25' />
    <path fill='none' d='M10.5,12h2.25l1.5-1.87' />
    <path fill='none' d='M14.25,13.88,12.75,12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='8.25' cy='12' r='2.25' />
    <circle cx='15.75' cy='8.25' r='2.25' />
    <circle cx='15.75' cy='15.75' r='2.25' />
    <path fill='none' d='M10.5,12h2.25l1.5-1.87' />
    <path fill='none' d='M14.25,13.88,12.75,12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='8.25' cy='12' r='2.25' />
    <circle fillOpacity='.2' cx='15.75' cy='8.25' r='2.25' />
    <circle fillOpacity='.2' cx='15.75' cy='15.75' r='2.25' />
    <path fill='none' d='M10.5,12h2.25l1.5-1.87' />
    <path fill='none' d='M14.25,13.88,12.75,12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M10.5,12h2.25l1.5-1.87' />
    <path fill='none' d='M14.25,13.88,12.75,12' />
    <circle fill='none' stroke={secondaryColor} cx='8.25' cy='12' r='2.25' />
    <circle fill='none' stroke={secondaryColor} cx='15.75' cy='8.25' r='2.25' />
    <circle
      fill='none'
      stroke={secondaryColor}
      cx='15.75'
      cy='15.75'
      r='2.25'
    />
  </Fragment>
)

const Ripple = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Ripple
