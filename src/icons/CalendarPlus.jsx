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
    <line x1='10.67' y1='14.67' x2='13.33' y2='14.67' />
    <line x1='12' y1='13.33' x2='12' y2='16' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16,6.83h-.83V6a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5v.83H9.83V6a.5.5,0,0,0-.5-.5.5.5,0,0,0-.5.5v.83H8A1.84,1.84,0,0,0,6.17,8.67v8A1.83,1.83,0,0,0,8,18.5h8a1.83,1.83,0,0,0,1.83-1.83v-8A1.84,1.84,0,0,0,16,6.83Zm-2.67,8.34H12.5V16a.5.5,0,0,1-1,0v-.83h-.83a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h.83v-.84a.5.5,0,1,1,1,0v.84h.83a.5.5,0,0,1,.5.5A.5.5,0,0,1,13.33,15.17Zm3.5-4.34H7.17V8.67A.84.84,0,0,1,8,7.83h.83v.84a.51.51,0,0,0,.5.5.5.5,0,0,0,.5-.5V7.83h4.34v.84a.5.5,0,0,0,.5.5.51.51,0,0,0,.5-.5V7.83H16a.84.84,0,0,1,.83.84Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect
      fillOpacity='.2'
      x='6.67'
      y='7.33'
      width='10.67'
      height='10.67'
      rx='1.33'
    />
    <line x1='14.67' y1='6' x2='14.67' y2='8.67' />
    <line x1='9.33' y1='6' x2='9.33' y2='8.67' />
    <line x1='6.67' y1='11.33' x2='17.33' y2='11.33' />
    <line x1='10.67' y1='14.67' x2='13.33' y2='14.67' />
    <line x1='12' y1='13.33' x2='12' y2='16' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6.67'
      y='7.33'
      width='10.67'
      height='10.67'
      rx='1.33'
    />
    <line x1='14.67' y1='6' x2='14.67' y2='8.67' />
    <line x1='9.33' y1='6' x2='9.33' y2='8.67' />
    <line x1='6.67' y1='11.33' x2='17.33' y2='11.33' />
    <line x1='10.67' y1='14.67' x2='13.33' y2='14.67' />
    <line x1='12' y1='13.33' x2='12' y2='16' />
  </Fragment>
)

const CalendarPlus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CalendarPlus
