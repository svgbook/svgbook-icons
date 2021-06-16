import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.5,8.25h8.25a1.5,1.5,0,0,1,1.5,1.5v.38a.38.38,0,0,0,.37.37.38.38,0,0,1,.38.38v2.25a.38.38,0,0,1-.38.37.38.38,0,0,0-.37.38v.37a1.5,1.5,0,0,1-1.5,1.5H7.5A1.5,1.5,0,0,1,6,14.25V9.75a1.5,1.5,0,0,1,1.5-1.5'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M7.5,8.25h8.25a1.5,1.5,0,0,1,1.5,1.5v.38a.38.38,0,0,0,.37.37.38.38,0,0,1,.38.38v2.25a.38.38,0,0,1-.38.37.38.38,0,0,0-.37.38v.37a1.5,1.5,0,0,1-1.5,1.5H7.5A1.5,1.5,0,0,1,6,14.25V9.75a1.5,1.5,0,0,1,1.5-1.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.5,8.25h8.25a1.5,1.5,0,0,1,1.5,1.5v.38a.38.38,0,0,0,.37.37.38.38,0,0,1,.38.38v2.25a.38.38,0,0,1-.38.37.38.38,0,0,0-.37.38v.37a1.5,1.5,0,0,1-1.5,1.5H7.5A1.5,1.5,0,0,1,6,14.25V9.75a1.5,1.5,0,0,1,1.5-1.5'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.5,8.25h8.25a1.5,1.5,0,0,1,1.5,1.5v.38a.38.38,0,0,0,.37.37.38.38,0,0,1,.38.38v2.25a.38.38,0,0,1-.38.37.38.38,0,0,0-.37.38v.37a1.5,1.5,0,0,1-1.5,1.5H7.5A1.5,1.5,0,0,1,6,14.25V9.75a1.5,1.5,0,0,1,1.5-1.5'
    />
  </Fragment>
)

const Battery0 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Battery0
