import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='12' x2='8' y2='12' />
    <line x1='12' y1='6' x2='12' y2='8' />
    <line x1='9.2' y1='9.2' x2='7.73' y2='7.73' />
    <line x1='14.8' y1='9.2' x2='16.27' y2='7.73' />
    <line x1='9.2' y1='14.8' x2='7.73' y2='16.27' />
    <path fill='none' d='M12,12l6,2-2.67,1.33L14,18l-2-6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='12' x2='8' y2='12' />
    <line x1='12' y1='6' x2='12' y2='8' />
    <line x1='9.2' y1='9.2' x2='7.73' y2='7.73' />
    <line x1='14.8' y1='9.2' x2='16.27' y2='7.73' />
    <line x1='9.2' y1='14.8' x2='7.73' y2='16.27' />
    <path d='M12,12l6,2-2.67,1.33L14,18l-2-6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6' y1='12' x2='8' y2='12' />
    <line x1='12' y1='6' x2='12' y2='8' />
    <line x1='9.2' y1='9.2' x2='7.73' y2='7.73' />
    <line x1='14.8' y1='9.2' x2='16.27' y2='7.73' />
    <line x1='9.2' y1='14.8' x2='7.73' y2='16.27' />
    <path fillOpacity='.2' d='M12,12l6,2-2.67,1.33L14,18l-2-6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='6' y1='12' x2='8' y2='12' />
    <line stroke={secondaryColor} x1='12' y1='6' x2='12' y2='8' />
    <line stroke={secondaryColor} x1='9.2' y1='9.2' x2='7.73' y2='7.73' />
    <line stroke={secondaryColor} x1='14.8' y1='9.2' x2='16.27' y2='7.73' />
    <line stroke={secondaryColor} x1='9.2' y1='14.8' x2='7.73' y2='16.27' />
    <path fill={secondaryColor} d='M12,12l6,2-2.67,1.33L14,18l-2-6' />
  </Fragment>
)

const Click = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Click
