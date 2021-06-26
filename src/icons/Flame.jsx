import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,11.65c1.41-2.09,0-4.94-.71-5.65a5.81,5.81,0,0,1-2.11,4.24,5.28,5.28,0,0,0-1.42,3.52,4.24,4.24,0,1,0,8.48,0,6.55,6.55,0,0,0-1.42-3.52C13.56,12.35,12.85,12.35,12,11.65Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,11.65c1.41-2.09,0-4.94-.71-5.65a5.81,5.81,0,0,1-2.11,4.24,5.28,5.28,0,0,0-1.42,3.52,4.24,4.24,0,1,0,8.48,0,6.55,6.55,0,0,0-1.42-3.52C13.56,12.35,12.85,12.35,12,11.65Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12,11.65c1.41-2.09,0-4.94-.71-5.65a5.81,5.81,0,0,1-2.11,4.24,5.28,5.28,0,0,0-1.42,3.52,4.24,4.24,0,1,0,8.48,0,6.55,6.55,0,0,0-1.42-3.52C13.56,12.35,12.85,12.35,12,11.65Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12,11.65c1.41-2.09,0-4.94-.71-5.65a5.81,5.81,0,0,1-2.11,4.24,5.28,5.28,0,0,0-1.42,3.52,4.24,4.24,0,1,0,8.48,0,6.55,6.55,0,0,0-1.42-3.52C13.56,12.35,12.85,12.35,12,11.65Z'
    />
  </Fragment>
)

const Flame = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Flame
