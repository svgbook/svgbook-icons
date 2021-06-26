import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='8.4' cy='15' r='1.2' />
    <circle fill='none' cx='15.6' cy='15' r='1.2' />
    <path
      fill='none'
      d='M7.21,15H6V8.4a.6.6,0,0,1,.6-.6H15c1.65,0,3,1.88,3,4.2v3h-1.2M14.4,15H9.6'
    />
    <polyline fill='none' points='14.4 7.8 15.3 12 17.99 12' />
    <line x1='6.01' y1='10.8' x2='15' y2='10.8' />
    <line x1='9' y1='7.8' x2='9' y2='10.8' />
    <line x1='12' y1='7.8' x2='12' y2='10.8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M8.4,16.45A1.45,1.45,0,1,1,9.85,15,1.45,1.45,0,0,1,8.4,16.45Z'
    />
    <path
      stroke='none'
      d='M15.6,16.45A1.45,1.45,0,1,1,17,15,1.45,1.45,0,0,1,15.6,16.45Z'
    />
    <path
      stroke='none'
      d='M15,7.3H6.61a1.1,1.1,0,0,0-1.1,1.1V15a.5.5,0,0,0,.5.5h.78a1.7,1.7,0,1,1,3.23,0h4a1.7,1.7,0,1,1,3.23,0H18a.5.5,0,0,0,.5-.5V12C18.49,9.41,16.92,7.3,15,7.3Zm-6.5,3h-2V8.4a.1.1,0,0,1,.1-.1H8.5Zm3,0h-2v-2h2Zm1,0v-2H14l.43,2Zm3.2,1.2L15,8.3c1.25,0,2.28,1.4,2.45,3.2Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M9.6,15a1.2,1.2,0,1,1-1.2-1.2A1.2,1.2,0,0,1,9.6,15Z'
    />
    <path
      fillOpacity='.2'
      d='M16.79,15a1.2,1.2,0,1,1-1.19-1.2A1.19,1.19,0,0,1,16.79,15Z'
    />
    <path
      fill='none'
      d='M18,12c0-2.32-1.34-4.2-3-4.2H6.61a.6.6,0,0,0-.6.6v2.4'
    />
    <path
      fillOpacity='.2'
      d='M18,12v3h-1.2a1.2,1.2,0,1,0-2.39,0H9.6a1.2,1.2,0,1,0-2.39,0H6V10.8h9L15.3,12Z'
    />
    <line x1='15.04' y1='10.8' x2='14.4' y2='7.8' />
    <line x1='9' y1='7.8' x2='9' y2='10.8' />
    <line x1='12' y1='7.8' x2='12' y2='10.8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M9.6,15a1.2,1.2,0,1,1-1.2-1.2A1.2,1.2,0,0,1,9.6,15Z'
    />
    <path
      fill={secondaryColor}
      d='M16.79,15a1.2,1.2,0,1,1-1.19-1.2A1.19,1.19,0,0,1,16.79,15Z'
    />
    <path
      fill='none'
      d='M18,12c0-2.32-1.34-4.2-3-4.2H6.61a.6.6,0,0,0-.6.6v2.4'
    />
    <path
      fill={secondaryColor}
      d='M18,12v3h-1.2a1.2,1.2,0,1,0-2.39,0H9.6a1.2,1.2,0,1,0-2.39,0H6V10.8h9L15.3,12Z'
    />
    <line x1='15.04' y1='10.8' x2='14.4' y2='7.8' />
    <line x1='9' y1='7.8' x2='9' y2='10.8' />
    <line x1='12' y1='7.8' x2='12' y2='10.8' />
  </Fragment>
)

const Bus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bus
