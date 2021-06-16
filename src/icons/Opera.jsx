import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm0,10.33c-1.4,0-2.5-1.68-2.5-3.83S10.6,8.17,12,8.17,14.5,9.85,14.5,12,13.4,15.83,12,15.83Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm0,10.33c-1.4,0-2.5-1.68-2.5-3.83S10.6,8.17,12,8.17,14.5,9.85,14.5,12,13.4,15.83,12,15.83Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm0,10.33c-1.4,0-2.5-1.68-2.5-3.83S10.6,8.17,12,8.17,14.5,9.85,14.5,12,13.4,15.83,12,15.83Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm0,10.33c-1.4,0-2.5-1.68-2.5-3.83S10.6,8.17,12,8.17,14.5,9.85,14.5,12,13.4,15.83,12,15.83Z'
    />
  </Fragment>
)

const Opera = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Opera
