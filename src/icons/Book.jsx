import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='8.07' x2='12' y2='16.74' />
    <path
      fill='none'
      d='M18,8.07v8.67a6,6,0,0,0-6,0,6,6,0,0,0-6,0V8.07a6,6,0,0,1,6,0A6,6,0,0,1,18,8.07Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='8.07' x2='12' y2='16.74' />
    <path d='M18,8.07v8.67a6,6,0,0,0-6,0,6,6,0,0,0-6,0V8.07a6,6,0,0,1,6,0A6,6,0,0,1,18,8.07Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='12' y1='8.07' x2='12' y2='16.74' />
    <path
      fillOpacity='.2'
      d='M18,8.07v8.67a6,6,0,0,0-6,0,6,6,0,0,0-6,0V8.07a6,6,0,0,1,6,0A6,6,0,0,1,18,8.07Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='12' y1='8.07' x2='12' y2='16.74' />
    <path
      fill={secondaryColor}
      d='M18,8.07v8.67a6,6,0,0,0-6,0,6,6,0,0,0-6,0V8.07a6,6,0,0,1,6,0A6,6,0,0,1,18,8.07Z'
    />
  </Fragment>
)

const Book = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Book
