import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10.38,11.5a3.25,3.25,0,1,0,3.25,3.25V5a4.06,4.06,0,0,0,4.06,4.06'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M10.38,11.5a3.25,3.25,0,1,0,3.25,3.25V5a4.06,4.06,0,0,0,4.06,4.06'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10.38,11.5a3.25,3.25,0,1,0,3.25,3.25V5a4.06,4.06,0,0,0,4.06,4.06'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M10.38,11.5a3.25,3.25,0,1,0,3.25,3.25V5a4.06,4.06,0,0,0,4.06,4.06'
    />
  </Fragment>
)

const Tiktok = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Tiktok
