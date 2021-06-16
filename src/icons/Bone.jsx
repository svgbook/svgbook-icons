import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M14,6a2,2,0,0,1,2,2,2,2,0,0,1,0,4,2,2,0,0,1-1.41-.59l-3.18,3.18a2,2,0,1,1-2.82,2.82A2,2,0,0,1,8,16.12V16H7.88a2,2,0,0,1,.24-4,2,2,0,0,1,1.29.59l3.18-3.18a2,2,0,0,1,0-2.82A2,2,0,0,1,14,6Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M14,6a2,2,0,0,1,2,2,2,2,0,0,1,0,4,2,2,0,0,1-1.41-.59l-3.18,3.18a2,2,0,1,1-2.82,2.82A2,2,0,0,1,8,16.12V16H7.88a2,2,0,0,1,.24-4,2,2,0,0,1,1.29.59l3.18-3.18a2,2,0,0,1,0-2.82A2,2,0,0,1,14,6Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M14,6a2,2,0,0,1,2,2,2,2,0,0,1,0,4,2,2,0,0,1-1.41-.59l-3.18,3.18a2,2,0,1,1-2.82,2.82A2,2,0,0,1,8,16.12V16H7.88a2,2,0,0,1,.24-4,2,2,0,0,1,1.29.59l3.18-3.18a2,2,0,0,1,0-2.82A2,2,0,0,1,14,6Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M14,6a2,2,0,0,1,2,2,2,2,0,0,1,0,4,2,2,0,0,1-1.41-.59l-3.18,3.18a2,2,0,1,1-2.82,2.82A2,2,0,0,1,8,16.12V16H7.88a2,2,0,0,1,.24-4,2,2,0,0,1,1.29.59l3.18-3.18a2,2,0,0,1,0-2.82A2,2,0,0,1,14,6Z'
    />
  </Fragment>
)

const Bone = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bone
