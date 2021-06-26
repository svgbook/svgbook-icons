import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,6V18a4.24,4.24,0,0,1-3.67-6.35Z' />
    <path
      fill='none'
      d='M15.67,15.88A4.25,4.25,0,0,1,12,18V6l2.5,3.85,1.17,1.8a3.6,3.6,0,0,1,.26.52A4.25,4.25,0,0,1,15.67,15.88Z'
    />
    <path fill='none' d='M12,12.35l2.5-2.5' />
    <path fill='none' d='M12,16.1l3.93-3.93' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,6V18a4.24,4.24,0,0,1-3.67-6.35Z' />
    <path
      fill='none'
      d='M15.67,15.88A4.25,4.25,0,0,1,12,18V6l2.5,3.85,1.17,1.8a3.6,3.6,0,0,1,.26.52A4.25,4.25,0,0,1,15.67,15.88Z'
    />
    <path fill='none' d='M12,12.35l2.5-2.5' />
    <path fill='none' d='M12,16.1l3.93-3.93' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M12,6V18a4.24,4.24,0,0,1-3.67-6.35Z' />
    <path
      fill='none'
      d='M15.67,15.88A4.25,4.25,0,0,1,12,18V6l2.5,3.85,1.17,1.8a3.6,3.6,0,0,1,.26.52A4.25,4.25,0,0,1,15.67,15.88Z'
    />
    <path fill='none' d='M12,12.35l2.5-2.5' />
    <path fill='none' d='M12,16.1l3.93-3.93' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M12,6V18a4.24,4.24,0,0,1-3.67-6.35Z' />
    <path
      fill='none'
      d='M15.67,15.88A4.25,4.25,0,0,1,12,18V6l2.5,3.85,1.17,1.8a3.6,3.6,0,0,1,.26.52A4.25,4.25,0,0,1,15.67,15.88Z'
    />
    <path fill='none' d='M12,12.35l2.5-2.5' />
    <path fill='none' d='M12,16.1l3.93-3.93' />
  </Fragment>
)

const DropletFilled = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DropletFilled
