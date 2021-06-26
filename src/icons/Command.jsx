import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.71,9.43A1.72,1.72,0,1,1,9.43,7.71v8.58a1.72,1.72,0,1,1-1.72-1.72h8.58a1.72,1.72,0,1,1-1.72,1.72V7.71a1.72,1.72,0,1,1,1.72,1.72H7.71'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M7.71,9.43A1.72,1.72,0,1,1,9.43,7.71v8.58a1.72,1.72,0,1,1-1.72-1.72h8.58a1.72,1.72,0,1,1-1.72,1.72V7.71a1.72,1.72,0,1,1,1.72,1.72H7.71' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.71,9.43A1.72,1.72,0,1,1,9.43,7.71v8.58a1.72,1.72,0,1,1-1.72-1.72h8.58a1.72,1.72,0,1,1-1.72,1.72V7.71a1.72,1.72,0,1,1,1.72,1.72H7.71'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.71,9.43A1.72,1.72,0,1,1,9.43,7.71v8.58a1.72,1.72,0,1,1-1.72-1.72h8.58a1.72,1.72,0,1,1-1.72,1.72V7.71a1.72,1.72,0,1,1,1.72,1.72H7.71'
    />
  </Fragment>
)

const Command = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Command
