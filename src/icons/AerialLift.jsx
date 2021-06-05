import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6.35,7.41,17.65,6M12,6.71v7.05M8.4,9.53h7.27A7.32,7.32,0,0,1,15.53,18H8.4A7.32,7.32,0,0,1,8.4,9.53ZM7.06,13.76h9.88'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M6.35,7.41,17.65,6M12,6.71v7.05M8.4,9.53h7.27A7.32,7.32,0,0,1,15.53,18H8.4A7.32,7.32,0,0,1,8.4,9.53ZM7.06,13.76h9.88'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M6.35,7.41,17.65,6M12,6.71v7.05M8.4,9.53h7.27A7.32,7.32,0,0,1,15.53,18H8.4A7.32,7.32,0,0,1,8.4,9.53ZM7.06,13.76h9.88'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M6.35,7.41,17.65,6M12,6.71v7.05M8.4,9.53h7.27A7.32,7.32,0,0,1,15.53,18H8.4A7.32,7.32,0,0,1,8.4,9.53ZM7.06,13.76h9.88'
    />
  </Fragment>
)

const AerialLift = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default AerialLift
