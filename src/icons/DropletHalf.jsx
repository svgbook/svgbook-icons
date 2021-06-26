import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,6V18a4.13,4.13,0,0,1-2.11-.57,4.23,4.23,0,0,1-1.56-5.78L12,6Z'
    />
    <path
      fill='none'
      d='M15.67,15.88A4.25,4.25,0,0,1,12,18V6l3.67,5.64A4.26,4.26,0,0,1,15.67,15.88Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,6V18a4.13,4.13,0,0,1-2.11-.57,4.23,4.23,0,0,1-1.56-5.78L12,6Z' />
    <path
      fill='none'
      d='M15.67,15.88A4.25,4.25,0,0,1,12,18V6l3.67,5.64A4.26,4.26,0,0,1,15.67,15.88Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12,6V18a4.13,4.13,0,0,1-2.11-.57,4.23,4.23,0,0,1-1.56-5.78L12,6Z'
    />
    <path
      fill='none'
      d='M15.67,15.88A4.25,4.25,0,0,1,12,18V6l3.67,5.64A4.26,4.26,0,0,1,15.67,15.88Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M12,6V18a4.13,4.13,0,0,1-2.11-.57,4.23,4.23,0,0,1-1.56-5.78L12,6Z'
    />
    <path
      fill='none'
      d='M15.67,15.88A4.25,4.25,0,0,1,12,18V6l3.67,5.64A4.26,4.26,0,0,1,15.67,15.88Z'
    />
  </Fragment>
)

const DropletHalf = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DropletHalf
