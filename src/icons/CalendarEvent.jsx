import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect
      fill='none'
      x='6.67'
      y='7.33'
      width='10.67'
      height='10.67'
      rx='1.33'
    />
    <line x1='14.67' y1='6' x2='14.67' y2='8.67' />
    <line x1='9.33' y1='6' x2='9.33' y2='8.67' />
    <line x1='6.67' y1='11.33' x2='17.33' y2='11.33' />
    <rect fill='none' x='9.33' y='14' width='1.33' height='1.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect
      fill='none'
      x='6.67'
      y='7.33'
      width='10.67'
      height='10.67'
      rx='1.33'
    />
    <line x1='14.67' y1='6' x2='14.67' y2='8.67' />
    <line x1='9.33' y1='6' x2='9.33' y2='8.67' />
    <line x1='6.67' y1='11.33' x2='17.33' y2='11.33' />
    <rect x='9.33' y='14' width='1.33' height='1.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect
      fill='none'
      x='6.67'
      y='7.33'
      width='10.67'
      height='10.67'
      rx='1.33'
    />
    <line x1='14.67' y1='6' x2='14.67' y2='8.67' />
    <line x1='9.33' y1='6' x2='9.33' y2='8.67' />
    <line x1='6.67' y1='11.33' x2='17.33' y2='11.33' />
    <rect
      fillOpacity='.2'
      strokeOpacity='.2'
      x='9.33'
      y='14'
      width='1.33'
      height='1.33'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill='none'
      x='6.67'
      y='7.33'
      width='10.67'
      height='10.67'
      rx='1.33'
    />
    <line x1='14.67' y1='6' x2='14.67' y2='8.67' />
    <line x1='9.33' y1='6' x2='9.33' y2='8.67' />
    <line x1='6.67' y1='11.33' x2='17.33' y2='11.33' />
    <rect
      fill={secondaryColor}
      stroke={secondaryColor}
      x='9.33'
      y='14'
      width='1.33'
      height='1.33'
    />
  </Fragment>
)

const CalendarEvent = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CalendarEvent
