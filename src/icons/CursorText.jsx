import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.75,6A2.25,2.25,0,0,1,12,8.25v7.5A2.25,2.25,0,0,1,9.75,18'
    />
    <path
      fill='none'
      d='M14.25,6A2.25,2.25,0,0,0,12,8.25v7.5A2.25,2.25,0,0,0,14.25,18'
    />
    <path fill='none' d='M10.5,12h3' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M9.75,6A2.25,2.25,0,0,1,12,8.25v7.5A2.25,2.25,0,0,1,9.75,18'
    />
    <path
      fill='none'
      d='M14.25,6A2.25,2.25,0,0,0,12,8.25v7.5A2.25,2.25,0,0,0,14.25,18'
    />
    <path fill='none' d='M10.5,12h3' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.75,6A2.25,2.25,0,0,1,12,8.25v7.5A2.25,2.25,0,0,1,9.75,18'
    />
    <path
      fill='none'
      d='M14.25,6A2.25,2.25,0,0,0,12,8.25v7.5A2.25,2.25,0,0,0,14.25,18'
    />
    <path fill='none' strokeOpacity='.2' d='M10.5,12h3' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M9.75,6A2.25,2.25,0,0,1,12,8.25v7.5A2.25,2.25,0,0,1,9.75,18'
    />
    <path
      fill='none'
      d='M14.25,6A2.25,2.25,0,0,0,12,8.25v7.5A2.25,2.25,0,0,0,14.25,18'
    />
    <path fill='none' stroke={secondaryColor} d='M10.5,12h3' />
  </Fragment>
)

const CursorText = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CursorText
