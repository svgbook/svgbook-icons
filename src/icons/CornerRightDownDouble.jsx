import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6.8,6h4.8A2.39,2.39,0,0,1,14,8.4V14' />
    <path fill='none' d='M10.8,10.8,14,14l3.2-3.2m-6.4,4L14,18l3.2-3.2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6.8,6h4.8A2.39,2.39,0,0,1,14,8.4V14' />
    <path fill='none' d='M10.8,10.8,14,14l3.2-3.2m-6.4,4L14,18l3.2-3.2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M6.8,6h4.8A2.39,2.39,0,0,1,14,8.4V14'
    />
    <path fill='none' d='M10.8,10.8,14,14l3.2-3.2m-6.4,4L14,18l3.2-3.2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6.8,6h4.8A2.39,2.39,0,0,1,14,8.4V14'
    />
    <path fill='none' d='M10.8,10.8,14,14l3.2-3.2m-6.4,4L14,18l3.2-3.2' />
  </Fragment>
)

const CornerRightDownDouble = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CornerRightDownDouble
