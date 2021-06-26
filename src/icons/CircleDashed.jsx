import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.71,6.46a6,6,0,0,0-2,1.3' />
    <path fill='none' d='M6.46,9.71A6,6,0,0,0,6,12' />
    <path fill='none' d='M6.46,14.29a6,6,0,0,0,1.3,1.95' />
    <path fill='none' d='M9.71,17.54A6,6,0,0,0,12,18' />
    <path fill='none' d='M14.29,17.54a6,6,0,0,0,1.95-1.3' />
    <path fill='none' d='M17.54,14.29A6,6,0,0,0,18,12' />
    <path fill='none' d='M17.54,9.71a6,6,0,0,0-1.3-2' />
    <path fill='none' d='M14.29,6.46A6,6,0,0,0,12,6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M9.71,6.46a6,6,0,0,0-2,1.3' />
    <path fill='none' d='M6.46,9.71A6,6,0,0,0,6,12' />
    <path fill='none' d='M6.46,14.29a6,6,0,0,0,1.3,1.95' />
    <path fill='none' d='M9.71,17.54A6,6,0,0,0,12,18' />
    <path fill='none' d='M14.29,17.54a6,6,0,0,0,1.95-1.3' />
    <path fill='none' d='M17.54,14.29A6,6,0,0,0,18,12' />
    <path fill='none' d='M17.54,9.71a6,6,0,0,0-1.3-2' />
    <path fill='none' d='M14.29,6.46A6,6,0,0,0,12,6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.71,6.46a6,6,0,0,0-2,1.3' />
    <path fill='none' d='M6.46,9.71A6,6,0,0,0,6,12' />
    <path fill='none' d='M6.46,14.29a6,6,0,0,0,1.3,1.95' />
    <path fill='none' d='M9.71,17.54A6,6,0,0,0,12,18' />
    <path fill='none' d='M14.29,17.54a6,6,0,0,0,1.95-1.3' />
    <path fill='none' d='M17.54,14.29A6,6,0,0,0,18,12' />
    <path fill='none' d='M17.54,9.71a6,6,0,0,0-1.3-2' />
    <path fill='none' d='M14.29,6.46A6,6,0,0,0,12,6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M9.71,6.46a6,6,0,0,0-2,1.3' />
    <path fill='none' d='M6.46,9.71A6,6,0,0,0,6,12' />
    <path fill='none' d='M6.46,14.29a6,6,0,0,0,1.3,1.95' />
    <path fill='none' d='M9.71,17.54A6,6,0,0,0,12,18' />
    <path fill='none' d='M14.29,17.54a6,6,0,0,0,1.95-1.3' />
    <path fill='none' d='M17.54,14.29A6,6,0,0,0,18,12' />
    <path fill='none' d='M17.54,9.71a6,6,0,0,0-1.3-2' />
    <path fill='none' d='M14.29,6.46A6,6,0,0,0,12,6' />
  </Fragment>
)

const CircleDashed = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CircleDashed
