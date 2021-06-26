import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.5,8.89H7.4A1.4,1.4,0,0,0,6,10.29V16.6A1.4,1.4,0,0,0,7.4,18h6.31a1.4,1.4,0,0,0,1.4-1.4V14.5'
    />
    <path
      fill='none'
      d='M17.56,8.54l-1,1.05-2.1-2.1,1.05-1a1.48,1.48,0,0,1,2.1,2.1Z'
    />
    <polyline
      fill='none'
      points='14.41 7.49 9.5 12.39 9.5 14.5 11.61 14.5 16.51 9.59'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M9.5,8.89H7.4A1.4,1.4,0,0,0,6,10.29V16.6A1.4,1.4,0,0,0,7.4,18h6.31a1.4,1.4,0,0,0,1.4-1.4V14.5'
    />
    <path d='M17.56,8.54l-1,1.05-2.1-2.1,1.05-1a1.48,1.48,0,0,1,2.1,2.1Z' />
    <polyline points='14.41 7.49 9.5 12.39 9.5 14.5 11.61 14.5 16.51 9.59' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.5,8.89H7.4A1.4,1.4,0,0,0,6,10.29V16.6A1.4,1.4,0,0,0,7.4,18h6.31a1.4,1.4,0,0,0,1.4-1.4V14.5'
    />
    <path
      fillOpacity='.2'
      d='M17.56,8.54l-1,1.05-2.1-2.1,1.05-1a1.48,1.48,0,0,1,2.1,2.1Z'
    />
    <polyline
      fillOpacity='.2'
      points='14.41 7.49 9.5 12.39 9.5 14.5 11.61 14.5 16.51 9.59'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M9.5,8.89H7.4A1.4,1.4,0,0,0,6,10.29V16.6A1.4,1.4,0,0,0,7.4,18h6.31a1.4,1.4,0,0,0,1.4-1.4V14.5'
    />
    <path
      fill='none'
      d='M17.56,8.54l-1,1.05-2.1-2.1,1.05-1a1.48,1.48,0,0,1,2.1,2.1Z'
    />
    <polyline
      fill='none'
      points='14.41 7.49 9.5 12.39 9.5 14.5 11.61 14.5 16.51 9.59'
    />
  </Fragment>
)

const Edit = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Edit
