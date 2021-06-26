import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle cx='15.64' cy='15' r='0.86' />
    <path
      fill='none'
      d='M7.5,7.71a1.72,1.72,0,0,1,3.43,0v7.72a2.57,2.57,0,0,0,5.14,0V15'
    />
    <path fill='none' d='M8.36,11.14H13.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='15.64' cy='15' r='0.86' />
    <path
      fill='none'
      d='M7.5,7.71a1.72,1.72,0,0,1,3.43,0v7.72a2.57,2.57,0,0,0,5.14,0V15'
    />
    <path fill='none' d='M8.36,11.14H13.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle cx='15.64' cy='15' r='0.86' />
    <path
      fill='none'
      d='M7.5,7.71a1.72,1.72,0,0,1,3.43,0v7.72a2.57,2.57,0,0,0,5.14,0V15'
    />
    <path fill='none' strokeOpacity='.2' d='M8.36,11.14H13.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle cx='15.64' cy='15' r='0.86' />
    <path
      fill='none'
      d='M7.5,7.71a1.72,1.72,0,0,1,3.43,0v7.72a2.57,2.57,0,0,0,5.14,0V15'
    />
    <path fill='none' stroke={secondaryColor} d='M8.36,11.14H13.5' />
  </Fragment>
)

const Taka = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Taka
