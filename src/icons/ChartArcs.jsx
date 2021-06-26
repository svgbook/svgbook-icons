import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='0.67' />
    <path fill='none' d='M15.28,11.42a3.33,3.33,0,1,0-2.7,3.86h0' />
    <path fill='none' d='M6,12a6,6,0,1,0,6-6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='12' cy='12' r='0.67' />
    <path fill='none' d='M15.28,11.42a3.33,3.33,0,1,0-2.7,3.86h0' />
    <path fill='none' d='M6,12a6,6,0,1,0,6-6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='0.67' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M15.28,11.42a3.33,3.33,0,1,0-2.7,3.86h0'
    />
    <path fill='none' d='M6,12a6,6,0,1,0,6-6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='0.67' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M15.28,11.42a3.33,3.33,0,1,0-2.7,3.86h0'
    />
    <path fill='none' d='M6,12a6,6,0,1,0,6-6' />
  </Fragment>
)

const ChartArcs = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartArcs
