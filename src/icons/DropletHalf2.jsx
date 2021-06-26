import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.24,13.76H7.76a4.16,4.16,0,0,1,.57-2.11L12,6l3.67,5.65A4.18,4.18,0,0,1,16.24,13.76Z'
    />
    <path fill='none' d='M16.24,13.76a4.24,4.24,0,0,1-8.48,0Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M16.24,13.76H7.76a4.16,4.16,0,0,1,.57-2.11L12,6l3.67,5.65A4.18,4.18,0,0,1,16.24,13.76Z' />
    <path fill='none' d='M16.24,13.76a4.24,4.24,0,0,1-8.48,0Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.24,13.76H7.76a4.16,4.16,0,0,1,.57-2.11L12,6l3.67,5.65A4.18,4.18,0,0,1,16.24,13.76Z'
    />
    <path fill='none' d='M16.24,13.76a4.24,4.24,0,0,1-8.48,0Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.24,13.76H7.76a4.16,4.16,0,0,1,.57-2.11L12,6l3.67,5.65A4.18,4.18,0,0,1,16.24,13.76Z'
    />
    <path fill='none' d='M16.24,13.76a4.24,4.24,0,0,1-8.48,0Z' />
  </Fragment>
)

const DropletHalf2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DropletHalf2
