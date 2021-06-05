import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,10v8M6.67,12.67a5.33,5.33,0,0,0,10.66,0m.67,0H16.67m-9.34,0H6'
    />
    <circle fill='none' cx='12' cy='8' r='2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M12,10v8M6.67,12.67a5.33,5.33,0,0,0,10.66,0m.67,0H16.67m-9.34,0H6'
    />
    <circle cx='12' cy='8' r='2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,10v8M6.67,12.67a5.33,5.33,0,0,0,10.66,0m.67,0H16.67m-9.34,0H6'
    />
    <circle fillOpacity='.2' cx='12' cy='8' r='2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M12,10v8M6.67,12.67a5.33,5.33,0,0,0,10.66,0m.67,0H16.67m-9.34,0H6'
    />
    <circle fill={secondaryColor} cx='12' cy='8' r='2' />
  </Fragment>
)

const Anchor = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Anchor
