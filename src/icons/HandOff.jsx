import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.61,12.9V9.6m.26-2.14a.9.9,0,0,1,1.27,0,.91.91,0,0,1,.27.64V9m0,2.41V12m0-3.9V6.9a.9.9,0,0,1,1.8,0v3.9m0-2.7a.9.9,0,0,1,1.8,0V12m0-2.7a.9.9,0,0,1,1.8,0v5.1a3.6,3.6,0,0,1-3.6,3.6H12a4.22,4.22,0,0,1-3-1.8L7.39,13.05A1,1,0,0,1,9,11.85H9l.54,1.05'
    />
    <line x1='6.6' y1='6.6' x2='17.4' y2='17.4' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M9.61,12.9V9.6m.26-2.14a.9.9,0,0,1,1.27,0,.91.91,0,0,1,.27.64V9m0,2.41V12m0-3.9V6.9a.9.9,0,0,1,1.8,0v3.9m0-2.7a.9.9,0,0,1,1.8,0V12m0-2.7a.9.9,0,0,1,1.8,0v5.1a3.6,3.6,0,0,1-3.6,3.6H12a4.22,4.22,0,0,1-3-1.8L7.39,13.05A1,1,0,0,1,9,11.85H9l.54,1.05'
    />
    <line x1='6.6' y1='6.6' x2='17.4' y2='17.4' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M9.61,12.9V9.6m.26-2.14a.9.9,0,0,1,1.27,0,.91.91,0,0,1,.27.64V9m0,2.41V12m0-3.9V6.9a.9.9,0,0,1,1.8,0v3.9m0-2.7a.9.9,0,0,1,1.8,0V12m0-2.7a.9.9,0,0,1,1.8,0v5.1a3.6,3.6,0,0,1-3.6,3.6H12a4.22,4.22,0,0,1-3-1.8L7.39,13.05A1,1,0,0,1,9,11.85H9l.54,1.05'
    />
    <line x1='6.6' y1='6.6' x2='17.4' y2='17.4' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M9.61,12.9V9.6m.26-2.14a.9.9,0,0,1,1.27,0,.91.91,0,0,1,.27.64V9m0,2.41V12m0-3.9V6.9a.9.9,0,0,1,1.8,0v3.9m0-2.7a.9.9,0,0,1,1.8,0V12m0-2.7a.9.9,0,0,1,1.8,0v5.1a3.6,3.6,0,0,1-3.6,3.6H12a4.22,4.22,0,0,1-3-1.8L7.39,13.05A1,1,0,0,1,9,11.85H9l.54,1.05'
    />
    <line x1='6.6' y1='6.6' x2='17.4' y2='17.4' />
  </Fragment>
)

const HandOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default HandOff
