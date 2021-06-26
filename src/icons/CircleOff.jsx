import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.36,14.67a6,6,0,0,0-8-8M7.79,7.75a6,6,0,0,0,8.38,8.53l.07-.07'
    />
    <path fill='none' d='M6,6,18,18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M17.36,14.67a6,6,0,0,0-8-8ZM7.79,7.75a6,6,0,0,0,8.38,8.53l.07-.07' />
    <path d='M6,6,18,18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.36,14.67a6,6,0,0,0-8-8ZM7.79,7.75a6,6,0,0,0,8.38,8.53l.07-.07'
    />
    <path d='M6,6,18,18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M17.36,14.67a6,6,0,0,0-8-8ZM7.79,7.75a6,6,0,0,0,8.38,8.53l.07-.07'
    />
    <path d='M6,6,18,18' />
  </Fragment>
)

const CircleOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CircleOff
