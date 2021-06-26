import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.42,13.51a4.58,4.58,0,0,0,9.16,0,8.9,8.9,0,0,0-2.29-6.36,2.86,2.86,0,0,0-4.58,0,8.9,8.9,0,0,0-2.29,6.36'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M7.42,13.51a4.58,4.58,0,0,0,9.16,0,8.9,8.9,0,0,0-2.29-6.36,2.86,2.86,0,0,0-4.58,0,8.9,8.9,0,0,0-2.29,6.36' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.42,13.51a4.58,4.58,0,0,0,9.16,0,8.9,8.9,0,0,0-2.29-6.36,2.86,2.86,0,0,0-4.58,0,8.9,8.9,0,0,0-2.29,6.36'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.42,13.51a4.58,4.58,0,0,0,9.16,0,8.9,8.9,0,0,0-2.29-6.36,2.86,2.86,0,0,0-4.58,0,8.9,8.9,0,0,0-2.29,6.36'
    />
  </Fragment>
)

const Egg = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Egg
