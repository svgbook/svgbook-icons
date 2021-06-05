import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M8.67,6,6,8.67l2.67,2.66' />
    <path fill='none' d='M6,8.67h7.33a2,2,0,0,1,2,2V18' />
    <path fill='none' d='M12.67,15.33,15.33,18,18,15.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M8.67,6,6,8.67l2.67,2.66' />
    <path fill='none' d='M6,8.67h7.33a2,2,0,0,1,2,2V18' />
    <path fill='none' d='M12.67,15.33,15.33,18,18,15.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M6,8.67h7.33a2,2,0,0,1,2,2V18' />
    <path fill='none' d='M8.67,6,6,8.67l2.67,2.66' />
    <path fill='none' d='M12.67,15.33,15.33,18,18,15.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6,8.67h7.33a2,2,0,0,1,2,2V18'
    />
    <path fill='none' d='M8.67,6,6,8.67l2.67,2.66' />
    <path fill='none' d='M12.67,15.33,15.33,18,18,15.33' />
  </Fragment>
)

const ArrowsLeftDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsLeftDown
