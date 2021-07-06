import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M14,9a2,2,0,1,0-2,2v1.33m0,0L6.25,16a.55.55,0,0,0,.3,1h10.9a.55.55,0,0,0,.55-.55.56.56,0,0,0-.25-.46Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M14,9a2,2,0,1,0-2,2v1.33m0,0L6.25,16a.55.55,0,0,0,.3,1h10.9a.55.55,0,0,0,.55-.55.56.56,0,0,0-.25-.46Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M14,9a2,2,0,1,0-2,2v1.33m0,0L6.25,16a.55.55,0,0,0,.3,1h10.9a.55.55,0,0,0,.55-.55.56.56,0,0,0-.25-.46Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M14,9a2,2,0,1,0-2,2v1.33m0,0L6.25,16a.55.55,0,0,0,.3,1h10.9a.55.55,0,0,0,.55-.55.56.56,0,0,0-.25-.46Z'
    />
  </Fragment>
)

const Hanger = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Hanger
