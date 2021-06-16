import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path stroke='none' d='M12.9,12A4,4,0,1,1,9,8a4,4,0,0,1,4,4' />
    <path
      stroke='none'
      d='M17.23,12c0,2.07-.89,3.74-2,3.74s-2-1.67-2-3.74.88-3.74,2-3.74,2,1.67,2,3.74'
    />
    <path
      stroke='none'
      d='M19,12c0,1.85-.31,3.35-.69,3.35s-.7-1.5-.7-3.35.31-3.35.7-3.35S19,10.15,19,12'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path stroke='none' d='M12.9,12A4,4,0,1,1,9,8a4,4,0,0,1,4,4' />
    <path
      stroke='none'
      d='M17.23,12c0,2.07-.89,3.74-2,3.74s-2-1.67-2-3.74.88-3.74,2-3.74,2,1.67,2,3.74'
    />
    <path
      stroke='none'
      d='M19,12c0,1.85-.31,3.35-.69,3.35s-.7-1.5-.7-3.35.31-3.35.7-3.35S19,10.15,19,12'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path stroke='none' d='M12.9,12A4,4,0,1,1,9,8a4,4,0,0,1,4,4' />
    <path
      stroke='none'
      d='M17.23,12c0,2.07-.89,3.74-2,3.74s-2-1.67-2-3.74.88-3.74,2-3.74,2,1.67,2,3.74'
    />
    <path
      stroke='none'
      d='M19,12c0,1.85-.31,3.35-.69,3.35s-.7-1.5-.7-3.35.31-3.35.7-3.35S19,10.15,19,12'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path stroke='none' d='M12.9,12A4,4,0,1,1,9,8a4,4,0,0,1,4,4' />
    <path
      stroke='none'
      d='M17.23,12c0,2.07-.89,3.74-2,3.74s-2-1.67-2-3.74.88-3.74,2-3.74,2,1.67,2,3.74'
    />
    <path
      stroke='none'
      d='M19,12c0,1.85-.31,3.35-.69,3.35s-.7-1.5-.7-3.35.31-3.35.7-3.35S19,10.15,19,12'
    />
  </Fragment>
)

const Medium = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Medium
