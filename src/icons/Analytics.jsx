import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6' y='6.67' width='12' height='8' rx='0.67' />
    <line x1='8.67' y1='17.33' x2='15.33' y2='17.33' />
    <line x1='10' y1='14.67' x2='10' y2='17.33' />
    <line x1='14' y1='14.67' x2='14' y2='17.33' />
    <path fill='none' d='M9.33,12l2-2,1.34,1.33,2-2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.33,6.17H6.67A1.16,1.16,0,0,0,5.5,7.33V14a1.17,1.17,0,0,0,1.17,1.17H9.5v1.66H8.67a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h6.66a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H14.5V15.17h2.83A1.17,1.17,0,0,0,18.5,14V7.33A1.16,1.16,0,0,0,17.33,6.17ZM13.5,16.83h-3V15.17h3ZM15,9.69l-2,2a.5.5,0,0,1-.35.14.52.52,0,0,1-.36-.14l-1-1L9.69,12.35a.51.51,0,0,1-.36.15A.5.5,0,0,1,9,12.35a.48.48,0,0,1,0-.7l2-2a.47.47,0,0,1,.35-.15.49.49,0,0,1,.36.15l1,1L14.31,9a.5.5,0,0,1,.71.71Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6' y='6.67' width='12' height='8' rx='0.67' />
    <line x1='8.67' y1='17.33' x2='15.33' y2='17.33' />
    <line x1='10' y1='14.67' x2='10' y2='17.33' />
    <line x1='14' y1='14.67' x2='14' y2='17.33' />
    <path fill='none' d='M9.33,12l2-2,1.34,1.33,2-2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6'
      y='6.67'
      width='12'
      height='8'
      rx='0.67'
    />
    <line x1='8.67' y1='17.33' x2='15.33' y2='17.33' />
    <line x1='10' y1='14.67' x2='10' y2='17.33' />
    <line x1='14' y1='14.67' x2='14' y2='17.33' />
    <path fill='none' d='M9.33,12l2-2,1.34,1.33,2-2' />
  </Fragment>
)

const Analytics = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Analytics
