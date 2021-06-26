import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,7.8C9.61,7.8,7.6,9.2,6,12c1.6,2.8,3.61,4.2,6,4.2s4.4-1.4,6-4.2C16.4,9.2,14.39,7.8,12,7.8Zm0,5.4A1.2,1.2,0,1,1,13.2,12,1.2,1.2,0,0,1,12,13.2Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,7.8C9.61,7.8,7.6,9.2,6,12c1.6,2.8,3.61,4.2,6,4.2s4.4-1.4,6-4.2C16.4,9.2,14.39,7.8,12,7.8Zm0,5.4A1.2,1.2,0,1,1,13.2,12,1.2,1.2,0,0,1,12,13.2Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12,7.8C9.61,7.8,7.6,9.2,6,12c1.6,2.8,3.61,4.2,6,4.2s4.4-1.4,6-4.2C16.4,9.2,14.39,7.8,12,7.8Zm0,5.4A1.2,1.2,0,1,1,13.2,12,1.2,1.2,0,0,1,12,13.2Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12,7.8C9.61,7.8,7.6,9.2,6,12c1.6,2.8,3.61,4.2,6,4.2s4.4-1.4,6-4.2C16.4,9.2,14.39,7.8,12,7.8Zm0,5.4A1.2,1.2,0,1,1,13.2,12,1.2,1.2,0,0,1,12,13.2Z'
    />
  </Fragment>
)

const Eye = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Eye
