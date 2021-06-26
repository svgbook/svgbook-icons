import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M11.65,6.35a5.65,5.65,0,0,0,0,11.3' />
    <path fill='none' d='M18,6.35a5.65,5.65,0,0,0,0,11.3' />
    <line x1='12.35' y1='12' x2='18' y2='12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M11.65,6.35a5.65,5.65,0,0,0,0,11.3' />
    <path fill='none' d='M18,6.35a5.65,5.65,0,0,0,0,11.3' />
    <line x1='12.35' y1='12' x2='18' y2='12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M11.65,6.35a5.65,5.65,0,0,0,0,11.3' />
    <path fill='none' d='M18,6.35a5.65,5.65,0,0,0,0,11.3' />
    <line x1='12.35' y1='12' x2='18' y2='12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M11.65,6.35a5.65,5.65,0,0,0,0,11.3' />
    <path fill='none' d='M18,6.35a5.65,5.65,0,0,0,0,11.3' />
    <line x1='12.35' y1='12' x2='18' y2='12' />
  </Fragment>
)

const CE = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CE
