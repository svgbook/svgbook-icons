import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='18.8' y1='8.22' x2='5.22' y2='8.22' />
    <line x1='5.22' y1='15.77' x2='18.8' y2='15.77' />
    <path fill='none' d='M16.54,10.48,18.8,8.22,16.54,6' />
    <path fill='none' d='M7.48,18,5.22,15.77,7.48,13.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='18.8' y1='8.22' x2='5.22' y2='8.22' />
    <line x1='5.22' y1='15.77' x2='18.8' y2='15.77' />
    <path fill='none' d='M16.54,10.48,18.8,8.22,16.54,6' />
    <path fill='none' d='M7.48,18,5.22,15.77,7.48,13.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='18.8' y1='8.22' x2='5.22' y2='8.22' />
    <line strokeOpacity='.2' x1='5.22' y1='15.77' x2='18.8' y2='15.77' />
    <path fill='none' d='M16.54,10.48,18.8,8.22,16.54,6' />
    <path fill='none' d='M7.48,18,5.22,15.77,7.48,13.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='18.8' y1='8.22' x2='5.22' y2='8.22' />
    <line stroke={secondaryColor} x1='5.22' y1='15.77' x2='18.8' y2='15.77' />
    <path fill='none' d='M16.54,10.48,18.8,8.22,16.54,6' />
    <path fill='none' d='M7.48,18,5.22,15.77,7.48,13.5' />
  </Fragment>
)

const ArrowsRightLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsRightLeft
