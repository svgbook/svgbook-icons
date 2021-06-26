import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='6.86' r='0.86' />
    <circle fill='none' cx='12' cy='17.14' r='0.86' />
    <line x1='6' y1='12' x2='18' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='6.86' r='0.86' />
    <circle cx='12' cy='17.14' r='0.86' />
    <line x1='6' y1='12' x2='18' y2='12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='6.86' r='0.86' />
    <circle fill='none' cx='12' cy='17.14' r='0.86' />
    <line strokeOpacity='.2' x1='6' y1='12' x2='18' y2='12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' stroke={secondaryColor} cx='12' cy='6.86' r='0.86' />
    <circle fill='none' stroke={secondaryColor} cx='12' cy='17.14' r='0.86' />
    <line x1='6' y1='12' x2='18' y2='12' />
  </Fragment>
)

const Divide = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Divide
