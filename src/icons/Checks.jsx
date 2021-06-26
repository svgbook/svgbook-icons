import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.75,11.75,12.5,14.5,18,9' />
    <path fill='none' d='M7,11.75,9.75,14.5m2.75-2.75L15.25,9' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M9.75,11.75,12.5,14.5,18,9' />
    <path fill='none' d='M7,11.75,9.75,14.5m2.75-2.75L15.25,9' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.75,11.75,12.5,14.5,18,9' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M7,11.75,9.75,14.5m2.75-2.75L15.25,9'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M9.75,11.75,12.5,14.5,18,9' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M7,11.75,9.75,14.5m2.75-2.75L15.25,9'
    />
  </Fragment>
)

const Checks = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Checks
