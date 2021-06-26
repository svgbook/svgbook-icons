import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M11.56,17.37H7.26A1.27,1.27,0,0,1,6,16.11V8.53A1.27,1.27,0,0,1,7.26,7.26h7.58a1.27,1.27,0,0,1,1.27,1.27v2.52'
    />
    <circle fill='none' cx='15.47' cy='15.47' r='2.53' />
    <path fill='none' d='M13.58,6V8.53' />
    <path fill='none' d='M8.53,6V8.53' />
    <path fill='none' d='M6,11.05H16.11' />
    <path fill='none' d='M15.47,14.52v1l.64.64' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M11.56,17.37H7.26A1.27,1.27,0,0,1,6,16.11V8.53A1.27,1.27,0,0,1,7.26,7.26h7.58a1.27,1.27,0,0,1,1.27,1.27v2.52'
    />
    <path
      stroke='none'
      d='M15.47,12.45a3,3,0,1,0,3,3A3,3,0,0,0,15.47,12.45Zm1,4a.5.5,0,0,1-.35.15.51.51,0,0,1-.36-.15l-.63-.63a.53.53,0,0,1-.15-.36v-1a.51.51,0,0,1,.5-.5.5.5,0,0,1,.5.5v.75l.49.48A.51.51,0,0,1,16.46,16.46Z'
    />
    <path fill='none' d='M13.58,6V8.53' />
    <path fill='none' d='M8.53,6V8.53' />
    <path fill='none' d='M6,11.05H16.11' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M11.56,17.37H7.26A1.27,1.27,0,0,1,6,16.11V8.53A1.27,1.27,0,0,1,7.26,7.26h7.58a1.27,1.27,0,0,1,1.27,1.27v2.52'
    />
    <circle fillOpacity='.2' cx='15.47' cy='15.47' r='2.53' />
    <path fill='none' d='M13.58,6V8.53' />
    <path fill='none' d='M8.53,6V8.53' />
    <path fill='none' d='M6,11.05H16.11' />
    <path fill='none' d='M15.47,14.52v1l.64.64' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M11.56,17.37H7.26A1.27,1.27,0,0,1,6,16.11V8.53A1.27,1.27,0,0,1,7.26,7.26h7.58a1.27,1.27,0,0,1,1.27,1.27v2.52'
    />
    <circle
      fill='none'
      stroke={secondaryColor}
      cx='15.47'
      cy='15.47'
      r='2.53'
    />
    <path fill='none' d='M13.58,6V8.53' />
    <path fill='none' d='M8.53,6V8.53' />
    <path fill='none' d='M6,11.05H16.11' />
    <path fill='none' d='M15.47,14.52v1l.64.64' />
  </Fragment>
)

const CalendarTime = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CalendarTime
