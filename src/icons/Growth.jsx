import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M11.81,6V17.38' />
    <path
      fill='none'
      d='M8.71,8.32a3.31,3.31,0,0,1,3.1,3.49,3.48,3.48,0,0,1,3.48-3.49'
    />
    <path
      fill='none'
      d='M8.71,11.42a3.31,3.31,0,0,1,3.1,3.48,3.48,3.48,0,0,1,3.48-3.48'
    />
    <path
      fill='none'
      d='M8.71,14.52A3.31,3.31,0,0,1,11.81,18a3.48,3.48,0,0,1,3.48-3.48'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M11.81,6V17.38' />
    <path
      fill='none'
      d='M8.71,8.32a3.31,3.31,0,0,1,3.1,3.49,3.48,3.48,0,0,1,3.48-3.49'
    />
    <path
      fill='none'
      d='M8.71,11.42a3.31,3.31,0,0,1,3.1,3.48,3.48,3.48,0,0,1,3.48-3.48'
    />
    <path
      fill='none'
      d='M8.71,14.52A3.31,3.31,0,0,1,11.81,18a3.48,3.48,0,0,1,3.48-3.48'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M11.81,6V17.38' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M8.71,8.32a3.31,3.31,0,0,1,3.1,3.49,3.48,3.48,0,0,1,3.48-3.49'
    />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M8.71,11.42a3.31,3.31,0,0,1,3.1,3.48,3.48,3.48,0,0,1,3.48-3.48'
    />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M8.71,14.52A3.31,3.31,0,0,1,11.81,18a3.48,3.48,0,0,1,3.48-3.48'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M11.81,6V17.38' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M8.71,8.32a3.31,3.31,0,0,1,3.1,3.49,3.48,3.48,0,0,1,3.48-3.49'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M8.71,11.42a3.31,3.31,0,0,1,3.1,3.48,3.48,3.48,0,0,1,3.48-3.48'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M8.71,14.52A3.31,3.31,0,0,1,11.81,18a3.48,3.48,0,0,1,3.48-3.48'
    />
  </Fragment>
)

const Growth = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Growth
