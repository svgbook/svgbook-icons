import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15,9.75v.11A2.14,2.14,0,0,1,12.86,12H9V7.5h3.75A2.25,2.25,0,0,1,15,9.75Z'
    />
    <path
      fill='none'
      d='M15,14.25v.11a2.14,2.14,0,0,1-2.14,2.14H9V12h3.75A2.25,2.25,0,0,1,15,14.25Z'
    />
    <path fill='none' d='M11.25,6V7.5' />
    <path fill='none' d='M11.25,16.5V18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M15,9.75v.11A2.14,2.14,0,0,1,12.86,12H9V7.5h3.75A2.25,2.25,0,0,1,15,9.75Z' />
    <path d='M15,14.25v.11a2.14,2.14,0,0,1-2.14,2.14H9V12h3.75A2.25,2.25,0,0,1,15,14.25Z' />
    <path fill='none' d='M11.25,6V7.5' />
    <path fill='none' d='M11.25,16.5V18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M15,9.75v.11A2.14,2.14,0,0,1,12.86,12H9V7.5h3.75A2.25,2.25,0,0,1,15,9.75Z'
    />
    <path
      fillOpacity='.2'
      d='M15,14.25v.11a2.14,2.14,0,0,1-2.14,2.14H9V12h3.75A2.25,2.25,0,0,1,15,14.25Z'
    />
    <path fill='none' d='M11.25,6V7.5' />
    <path fill='none' d='M11.25,16.5V18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M15,9.75v.11A2.14,2.14,0,0,1,12.86,12H9V7.5h3.75A2.25,2.25,0,0,1,15,9.75Z'
    />
    <path
      fill={secondaryColor}
      d='M15,14.25v.11a2.14,2.14,0,0,1-2.14,2.14H9V12h3.75A2.25,2.25,0,0,1,15,14.25Z'
    />
    <path fill='none' d='M11.25,6V7.5' />
    <path fill='none' d='M11.25,16.5V18' />
  </Fragment>
)

const Bath = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bath
