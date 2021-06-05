import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.2,13.6,6,10.4,9.2,7.2M6,10.4h8.8a3.2,3.2,0,0,1,0,6.4H14'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M9.2,13.6,6,10.4,9.2,7.2M6,10.4h8.8a3.2,3.2,0,0,1,0,6.4H14'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.2,13.6,6,10.4,9.2,7.2M6,10.4h8.8a3.2,3.2,0,0,1,0,6.4H14'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M9.2,13.6,6,10.4,9.2,7.2M6,10.4h8.8a3.2,3.2,0,0,1,0,6.4H14'
    />
  </Fragment>
)

const ArrowBackUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowBackUp
