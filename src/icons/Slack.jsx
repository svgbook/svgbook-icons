import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,12V7.5a1.5,1.5,0,0,1,3,0V12m0-1.5A1.5,1.5,0,1,1,16.5,12H12'
    />
    <path
      fill='none'
      d='M12,12h4.5a1.5,1.5,0,0,1,0,3H12m1.5,0A1.5,1.5,0,1,1,12,16.5V12'
    />
    <path
      fill='none'
      d='M12,12v4.5a1.5,1.5,0,0,1-3,0V12m0,1.5A1.5,1.5,0,1,1,7.5,12H12'
    />
    <path
      fill='none'
      d='M12,12H7.5a1.5,1.5,0,0,1,0-3H12M10.5,9A1.5,1.5,0,1,1,12,7.5V12'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M12,12V7.5a1.5,1.5,0,0,1,3,0V12m0-1.5A1.5,1.5,0,1,1,16.5,12H12'
    />
    <path
      fill='none'
      d='M12,12h4.5a1.5,1.5,0,0,1,0,3H12m1.5,0A1.5,1.5,0,1,1,12,16.5V12'
    />
    <path
      fill='none'
      d='M12,12v4.5a1.5,1.5,0,0,1-3,0V12m0,1.5A1.5,1.5,0,1,1,7.5,12H12'
    />
    <path
      fill='none'
      d='M12,12H7.5a1.5,1.5,0,0,1,0-3H12M10.5,9A1.5,1.5,0,1,1,12,7.5V12'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12,12V7.5a1.5,1.5,0,0,1,3,0V12m0-1.5A1.5,1.5,0,1,1,16.5,12H12'
    />
    <path
      fillOpacity='.2'
      d='M12,12h4.5a1.5,1.5,0,0,1,0,3H12m1.5,0A1.5,1.5,0,1,1,12,16.5V12'
    />
    <path
      fillOpacity='.2'
      d='M12,12v4.5a1.5,1.5,0,0,1-3,0V12m0,1.5A1.5,1.5,0,1,1,7.5,12H12'
    />
    <path
      fillOpacity='.2'
      d='M12,12H7.5a1.5,1.5,0,0,1,0-3H12M10.5,9A1.5,1.5,0,1,1,12,7.5V12'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12,12V7.5a1.5,1.5,0,0,1,3,0V12m0-1.5A1.5,1.5,0,1,1,16.5,12H12'
    />
    <path
      fill={secondaryColor}
      d='M12,12h4.5a1.5,1.5,0,0,1,0,3H12m1.5,0A1.5,1.5,0,1,1,12,16.5V12'
    />
    <path
      fill={secondaryColor}
      d='M12,12v4.5a1.5,1.5,0,0,1-3,0V12m0,1.5A1.5,1.5,0,1,1,7.5,12H12'
    />
    <path
      fill={secondaryColor}
      d='M12,12H7.5a1.5,1.5,0,0,1,0-3H12M10.5,9A1.5,1.5,0,1,1,12,7.5V12'
    />
  </Fragment>
)

const Slack = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Slack
