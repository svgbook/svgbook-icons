import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M15.47,13v2.52H18' />
    <circle fill='none' cx='15.47' cy='15.47' r='2.53' />
    <path fill='none' d='M13.58,6V8.53' />
    <path fill='none' d='M8.53,6V8.53' />
    <path
      fill='none'
      d='M6,11.05H16.11V8.53a1.27,1.27,0,0,0-1.27-1.27H7.26A1.27,1.27,0,0,0,6,8.53v7.58a1.27,1.27,0,0,0,1.26,1.26h4.3'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M18,15.47A2.53,2.53,0,1,1,15.47,13v2.52Z' />
    <path fill='none' d='M18,15.47H15.47V13A2.52,2.52,0,0,1,18,15.47Z' />
    <path fill='none' d='M13.58,6V8.53' />
    <path fill='none' d='M8.53,6V8.53' />
    <path
      fill='none'
      d='M6,11.05H16.11V8.53a1.27,1.27,0,0,0-1.27-1.27H7.26A1.27,1.27,0,0,0,6,8.53v7.58a1.27,1.27,0,0,0,1.26,1.26h4.3'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M15.47,13v2.52H18' />
    <circle fillOpacity='.2' cx='15.47' cy='15.47' r='2.53' />
    <path fill='none' d='M13.58,6V8.53' />
    <path fill='none' d='M8.53,6V8.53' />
    <path
      fill='none'
      d='M6,11.05H16.11V8.53a1.27,1.27,0,0,0-1.27-1.27H7.26A1.27,1.27,0,0,0,6,8.53v7.58a1.27,1.27,0,0,0,1.26,1.26h4.3'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M15.47,13v2.52H18' />
    <circle
      fill='none'
      stroke={secondaryColor}
      cx='15.47'
      cy='15.47'
      r='2.53'
    />
    <path fill='none' d='M13.58,6V8.53' />
    <path fill='none' d='M8.53,6V8.53' />
    <path
      fill='none'
      d='M6,11.05H16.11V8.53a1.27,1.27,0,0,0-1.27-1.27H7.26A1.27,1.27,0,0,0,6,8.53v7.58a1.27,1.27,0,0,0,1.26,1.26h4.3'
    />
  </Fragment>
)

const CalendarStats = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CalendarStats
