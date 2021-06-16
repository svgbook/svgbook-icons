import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,6a6.26,6.26,0,0,1,2.52,12L13,14.1a2.09,2.09,0,1,0-2.83-.84,2.15,2.15,0,0,0,.85.84L9.48,18A6.26,6.26,0,0,1,12,6Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,6a6.26,6.26,0,0,1,2.52,12L13,14.1a2.09,2.09,0,1,0-2.83-.84,2.15,2.15,0,0,0,.85.84L9.48,18A6.26,6.26,0,0,1,12,6Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12,6a6.26,6.26,0,0,1,2.52,12L13,14.1a2.09,2.09,0,1,0-2.83-.84,2.15,2.15,0,0,0,.85.84L9.48,18A6.26,6.26,0,0,1,12,6Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12,6a6.26,6.26,0,0,1,2.52,12L13,14.1a2.09,2.09,0,1,0-2.83-.84,2.15,2.15,0,0,0,.85.84L9.48,18A6.26,6.26,0,0,1,12,6Z'
    />
  </Fragment>
)

const OpenSource = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default OpenSource
