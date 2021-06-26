import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.24,13.77H7.76a4.3,4.3,0,0,1,.57-2.12L12,6l3.67,5.65A4.22,4.22,0,0,1,16.24,13.77Z'
    />
    <path
      fill='none'
      d='M16.24,13.77a4.25,4.25,0,0,1-5.47,4.05,4.09,4.09,0,0,1-.89-.39,4.21,4.21,0,0,1-2.12-3.66Z'
    />
    <path fill='none' d='M8.69,16.38l2.61-2.61' />
    <path fill='none' d='M10.77,17.82l4.06-4.05Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M16.24,13.77H7.76a4.3,4.3,0,0,1,.57-2.12L12,6l3.67,5.65A4.22,4.22,0,0,1,16.24,13.77Z' />
    <path
      fill='none'
      d='M16.24,13.77a4.25,4.25,0,0,1-5.47,4.05,4.09,4.09,0,0,1-.89-.39,4.21,4.21,0,0,1-2.12-3.66Z'
    />
    <path fill='none' d='M8.69,16.38l2.61-2.61' />
    <path fill='none' d='M10.77,17.82l4.06-4.05Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.24,13.77H7.76a4.3,4.3,0,0,1,.57-2.12L12,6l3.67,5.65A4.22,4.22,0,0,1,16.24,13.77Z'
    />
    <path
      fill='none'
      d='M16.24,13.77a4.25,4.25,0,0,1-5.47,4.05,4.09,4.09,0,0,1-.89-.39,4.21,4.21,0,0,1-2.12-3.66Z'
    />
    <path fill='none' d='M8.69,16.38l2.61-2.61' />
    <path fill='none' d='M10.77,17.82l4.06-4.05Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.24,13.77H7.76a4.3,4.3,0,0,1,.57-2.12L12,6l3.67,5.65A4.22,4.22,0,0,1,16.24,13.77Z'
    />
    <path
      fill='none'
      d='M16.24,13.77a4.25,4.25,0,0,1-5.47,4.05,4.09,4.09,0,0,1-.89-.39,4.21,4.21,0,0,1-2.12-3.66Z'
    />
    <path fill='none' d='M8.69,16.38l2.61-2.61' />
    <path fill='none' d='M10.77,17.82l4.06-4.05Z' />
  </Fragment>
)

const DropletFilled2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DropletFilled2
