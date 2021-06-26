import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M17.2,6H12.4A2.39,2.39,0,0,0,10,8.4V14' />
    <path fill='none' d='M13.2,10.8,10,14,6.8,10.8m6.4,4L10,18,6.8,14.8' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M17.2,6H12.4A2.39,2.39,0,0,0,10,8.4V14' />
    <path fill='none' d='M13.2,10.8,10,14,6.8,10.8m6.4,4L10,18,6.8,14.8' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M17.2,6H12.4A2.39,2.39,0,0,0,10,8.4V14'
    />
    <path fill='none' d='M13.2,10.8,10,14,6.8,10.8m6.4,4L10,18,6.8,14.8' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M17.2,6H12.4A2.39,2.39,0,0,0,10,8.4V14'
    />
    <path fill='none' d='M13.2,10.8,10,14,6.8,10.8m6.4,4L10,18,6.8,14.8' />
  </Fragment>
)

const CornerLeftDownDouble = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerLeftDownDouble
