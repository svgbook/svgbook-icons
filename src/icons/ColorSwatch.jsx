import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.67,6H14a1.33,1.33,0,0,0-1.33,1.33v8a2.67,2.67,0,1,0,5.33,0v-8A1.34,1.34,0,0,0,16.67,6'
    />
    <path
      fill='none'
      d='M12.67,8.9,11.33,7.57a1.33,1.33,0,0,0-1.88,0L7.56,9.45a1.34,1.34,0,0,0,0,1.89l6,6'
    />
    <path
      fill='none'
      d='M8.87,12.67H7.33A1.33,1.33,0,0,0,6,14v2.67A1.34,1.34,0,0,0,7.33,18h8'
    />
    <line x1='15.33' y1='15.33' x2='15.33' y2='15.34' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M16.67,6H14a1.33,1.33,0,0,0-1.33,1.33v8a2.67,2.67,0,1,0,5.33,0v-8A1.34,1.34,0,0,0,16.67,6' />
    <path
      fill='none'
      d='M12.67,8.9,11.33,7.57a1.33,1.33,0,0,0-1.88,0L7.56,9.45a1.34,1.34,0,0,0,0,1.89l6,6'
    />
    <path
      fill='none'
      d='M8.87,12.67H7.33A1.33,1.33,0,0,0,6,14v2.67A1.34,1.34,0,0,0,7.33,18h8'
    />
    <line x1='15.33' y1='15.33' x2='15.33' y2='15.34' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.67,6H14a1.33,1.33,0,0,0-1.33,1.33v8a2.67,2.67,0,1,0,5.33,0v-8A1.34,1.34,0,0,0,16.67,6'
    />
    <path
      fill='none'
      d='M12.67,8.9,11.33,7.57a1.33,1.33,0,0,0-1.88,0L7.56,9.45a1.34,1.34,0,0,0,0,1.89l6,6'
    />
    <path
      fillOpacity='.2'
      d='M8.87,12.67H7.33A1.33,1.33,0,0,0,6,14v2.67A1.34,1.34,0,0,0,7.33,18h8'
    />
    <line x1='15.33' y1='15.33' x2='15.33' y2='15.34' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.67,6H14a1.33,1.33,0,0,0-1.33,1.33v8a2.67,2.67,0,1,0,5.33,0v-8A1.34,1.34,0,0,0,16.67,6'
    />
    <path
      fill='none'
      d='M12.67,8.9,11.33,7.57a1.33,1.33,0,0,0-1.88,0L7.56,9.45a1.34,1.34,0,0,0,0,1.89l6,6'
    />
    <path
      fill='none'
      d='M8.87,12.67H7.33A1.33,1.33,0,0,0,6,14v2.67A1.34,1.34,0,0,0,7.33,18h8'
    />
    <line x1='15.33' y1='15.33' x2='15.33' y2='15.34' />
  </Fragment>
)

const ColorSwatch = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ColorSwatch
