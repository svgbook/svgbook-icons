import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6.56,6.14H17.44A.83.83,0,0,1,18,7.21a.66.66,0,0,1-.09.19L13.67,12v5.86l-3.34-2.51V12L6.14,7.4a.83.83,0,0,1,.23-1.16l.19-.1'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M6.56,6.14H17.44A.83.83,0,0,1,18,7.21a.66.66,0,0,1-.09.19L13.67,12v5.86l-3.34-2.51V12L6.14,7.4a.83.83,0,0,1,.23-1.16l.19-.1' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M6.56,6.14H17.44A.83.83,0,0,1,18,7.21a.66.66,0,0,1-.09.19L13.67,12v5.86l-3.34-2.51V12L6.14,7.4a.83.83,0,0,1,.23-1.16l.19-.1'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M6.56,6.14H17.44A.83.83,0,0,1,18,7.21a.66.66,0,0,1-.09.19L13.67,12v5.86l-3.34-2.51V12L6.14,7.4a.83.83,0,0,1,.23-1.16l.19-.1'
    />
  </Fragment>
)

const Filter = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Filter
