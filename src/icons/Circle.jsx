import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle class='cls-2' cx='12' cy='12' r='8.71' fill='none' stroke={color} />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle class='cls-2' cx='12.18' cy='12.03' r='8.71' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle
      class='cls-2'
      cx='12.18'
      cy='12.03'
      r='8.71'
      fill={color}
      fillOpacity='.2'
      stroke={color}
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle
      class='cls-2'
      cx='12.18'
      cy='12.03'
      r='8.71'
      fill={color}
      stroke={secondaryColor}
    />
  </Fragment>
)

const Circle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Circle
