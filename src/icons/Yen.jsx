import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,18V12L7.71,6m8.58,0L12,12' />
    <line x1='8.57' y1='16.29' x2='15.43' y2='16.29' />
    <line x1='8.57' y1='12.86' x2='15.43' y2='12.86' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12,18V12L7.71,6m8.58,0L12,12' />
    <line x1='8.57' y1='16.29' x2='15.43' y2='16.29' />
    <line x1='8.57' y1='12.86' x2='15.43' y2='12.86' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,18V12L7.71,6m8.58,0L12,12' />
    <line strokeOpacity='.2' x1='8.57' y1='16.29' x2='15.43' y2='16.29' />
    <line strokeOpacity='.2' x1='8.57' y1='12.86' x2='15.43' y2='12.86' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M12,18V12L7.71,6m8.58,0L12,12' />
    <line stroke={secondaryColor} x1='8.57' y1='16.29' x2='15.43' y2='16.29' />
    <line stroke={secondaryColor} x1='8.57' y1='12.86' x2='15.43' y2='12.86' />
  </Fragment>
)

const Yen = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Yen
