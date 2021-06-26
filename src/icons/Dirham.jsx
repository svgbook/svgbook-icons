import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.52,16a1.2,1.2,0,1,0-.88,2h-2' />
    <path fill='none' d='M8.24,6v7.2' />
    <path
      fill='none'
      d='M14.64,13.2h1.52a1.2,1.2,0,0,0,1.2-1.2,1.16,1.16,0,0,0-.17-.6l-1.75-3'
    />
    <path fill='none' d='M11.44,13.21h0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M9.52,16a1.2,1.2,0,1,0-.88,2h-2' />
    <path fill='none' d='M8.24,6v7.2' />
    <path
      fill='none'
      d='M14.64,13.2h1.52a1.2,1.2,0,0,0,1.2-1.2,1.16,1.16,0,0,0-.17-.6l-1.75-3'
    />
    <path fill='none' d='M11.44,13.21h0' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M9.52,16a1.2,1.2,0,1,0-.88,2h-2' />
    <path fill='none' d='M8.24,6v7.2' />
    <path
      fill='none'
      d='M14.64,13.2h1.52a1.2,1.2,0,0,0,1.2-1.2,1.16,1.16,0,0,0-.17-.6l-1.75-3'
    />
    <path fill='none' strokeOpacity='.2' d='M11.44,13.21h0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M9.52,16a1.2,1.2,0,1,0-.88,2h-2'
    />
    <path fill='none' d='M8.24,6v7.2' />
    <path
      fill='none'
      d='M14.64,13.2h1.52a1.2,1.2,0,0,0,1.2-1.2,1.16,1.16,0,0,0-.17-.6l-1.75-3'
    />
    <path fill='none' stroke={secondaryColor} d='M11.44,13.21h0' />
  </Fragment>
)

const Dirham = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Dirham
