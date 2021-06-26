import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,6v4l2-2M10,8l2,2' />
    <path fill='none' d='M12,18V14l2,2m-4,0,2-2' />
    <line x1='6.67' y1='12' x2='7.33' y2='12' />
    <line x1='10' y1='12' x2='10.67' y2='12' />
    <line x1='13.33' y1='12' x2='14' y2='12' />
    <line x1='16.67' y1='12' x2='17.33' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12,6v4l2-2M10,8l2,2' />
    <path fill='none' d='M12,18V14l2,2m-4,0,2-2' />
    <line x1='6.67' y1='12' x2='7.33' y2='12' />
    <line x1='10' y1='12' x2='10.67' y2='12' />
    <line x1='13.33' y1='12' x2='14' y2='12' />
    <line x1='16.67' y1='12' x2='17.33' y2='12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,6v4l2-2M10,8l2,2' />
    <path fill='none' d='M12,18V14l2,2m-4,0,2-2' />
    <line strokeOpacity='.2' x1='6.67' y1='12' x2='7.33' y2='12' />
    <line strokeOpacity='.2' x1='10' y1='12' x2='10.67' y2='12' />
    <line strokeOpacity='.2' x1='13.33' y1='12' x2='14' y2='12' />
    <line strokeOpacity='.2' x1='16.67' y1='12' x2='17.33' y2='12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M12,6v4l2-2M10,8l2,2' />
    <path fill='none' stroke={secondaryColor} d='M12,18V14l2,2m-4,0,2-2' />
    <line x1='6.67' y1='12' x2='7.33' y2='12' />
    <line x1='10' y1='12' x2='10.67' y2='12' />
    <line x1='13.33' y1='12' x2='14' y2='12' />
    <line x1='16.67' y1='12' x2='17.33' y2='12' />
  </Fragment>
)

const Fold = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Fold
