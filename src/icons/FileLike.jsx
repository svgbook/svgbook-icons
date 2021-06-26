import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6.67' y='14.67' width='2' height='3.33' rx='0.67' />
    <path
      fill='none'
      d='M8.67,17.33a.67.67,0,0,0,.66.67h2.51a.68.68,0,0,0,.64-.47l.8-2a.65.65,0,0,0,0-.58.74.74,0,0,0-.57-.27H11.33V13a.73.73,0,0,0-.73-.73.72.72,0,0,0-.61.33L8.67,14.67Z'
    />
    <path fill='none' d='M14,6V8.67a.67.67,0,0,0,.67.66h2.66' />
    <path
      fill='none'
      d='M8,12.07V7.33A1.34,1.34,0,0,1,9.33,6H14l3.33,3.33v7.34A1.33,1.33,0,0,1,16,18H14.47'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <rect fill='none' x='6.67' y='14.67' width='2' height='3.33' rx='0.67' />
    <path d='M8.67,17.33a.67.67,0,0,0,.66.67h2.51a.68.68,0,0,0,.64-.47l.8-2a.65.65,0,0,0,0-.58.74.74,0,0,0-.57-.27H11.33V13a.73.73,0,0,0-.73-.73.72.72,0,0,0-.61.33L8.67,14.67Z' />
    <path fill='none' d='M14,6V8.67a.67.67,0,0,0,.67.66h2.66' />
    <path
      fill='none'
      d='M8,12.07V7.33A1.34,1.34,0,0,1,9.33,6H14l3.33,3.33v7.34A1.33,1.33,0,0,1,16,18H14.47'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect
      fillOpacity='.2'
      x='6.67'
      y='14.67'
      width='2'
      height='3.33'
      rx='0.67'
    />
    <path
      fillOpacity='.2'
      d='M8.67,17.33a.67.67,0,0,0,.66.67h2.51a.68.68,0,0,0,.64-.47l.8-2a.65.65,0,0,0,0-.58.74.74,0,0,0-.57-.27H11.33V13a.73.73,0,0,0-.73-.73.72.72,0,0,0-.61.33L8.67,14.67Z'
    />
    <path fill='none' d='M14,6V8.67a.67.67,0,0,0,.67.66h2.66' />
    <path
      fill='none'
      d='M8,12.07V7.33A1.34,1.34,0,0,1,9.33,6H14l3.33,3.33v7.34A1.33,1.33,0,0,1,16,18H14.47'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6.67'
      y='14.67'
      width='2'
      height='3.33'
      rx='0.67'
    />
    <path
      fill={secondaryColor}
      d='M8.67,17.33a.67.67,0,0,0,.66.67h2.51a.68.68,0,0,0,.64-.47l.8-2a.65.65,0,0,0,0-.58.74.74,0,0,0-.57-.27H11.33V13a.73.73,0,0,0-.73-.73.72.72,0,0,0-.61.33L8.67,14.67Z'
    />
    <path fill='none' d='M14,6V8.67a.67.67,0,0,0,.67.66h2.66' />
    <path
      fill='none'
      d='M8,12.07V7.33A1.34,1.34,0,0,1,9.33,6H14l3.33,3.33v7.34A1.33,1.33,0,0,1,16,18H14.47'
    />
  </Fragment>
)

const FileLike = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FileLike
