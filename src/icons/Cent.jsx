import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15.75,8.66A4.49,4.49,0,0,0,8.25,12h0a4.5,4.5,0,0,0,7.5,3.35'
    />
    <path d='M12.74,18V16.5' />
    <path d='M12.74,7.5V6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M15.75,8.66A4.49,4.49,0,0,0,8.25,12h0a4.5,4.5,0,0,0,7.5,3.35'
    />
    <path d='M12.74,18V16.5' />
    <path d='M12.74,7.5V6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path strokeOpacity='.2' d='M12.74,18V16.5' />
    <path strokeOpacity='.2' d='M12.74,7.5V6' />
    <path
      fill='none'
      d='M15.75,8.66A4.49,4.49,0,0,0,8.25,12h0a4.5,4.5,0,0,0,7.5,3.35'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path stroke={secondaryColor} d='M12.74,18V16.5' />
    <path stroke={secondaryColor} d='M12.74,7.5V6' />
    <path
      fill='none'
      d='M15.75,8.66A4.49,4.49,0,0,0,8.25,12h0a4.5,4.5,0,0,0,7.5,3.35'
    />
  </Fragment>
)

const Cent = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Cent
