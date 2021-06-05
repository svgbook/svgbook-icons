import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='18.77' y1='15.76' x2='5.23' y2='15.76' />
    <path fill='none' d='M16.52,6l2.25,2.26-2.25,2.25' />
    <path fill='none' d='M16.52,18l2.25-2.26-2.25-2.25' />
    <line x1='18.77' y1='8.24' x2='5.23' y2='8.24' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='18.77' y1='15.76' x2='5.23' y2='15.76' />
    <path fill='none' d='M16.52,6l2.25,2.26-2.25,2.25' />
    <path fill='none' d='M16.52,18l2.25-2.26-2.25-2.25' />
    <line x1='18.77' y1='8.24' x2='5.23' y2='8.24' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line strokeOpacity='.2' x1='18.77' y1='15.76' x2='5.23' y2='15.76' />
    <line strokeOpacity='.2' x1='18.77' y1='8.24' x2='5.23' y2='8.24' />
    <path fill='none' d='M16.52,6l2.25,2.26-2.25,2.25' />
    <path fill='none' d='M16.52,18l2.25-2.26-2.25-2.25' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='18.77' y1='15.76' x2='5.23' y2='15.76' />
    <line stroke={secondaryColor} x1='18.77' y1='8.24' x2='5.23' y2='8.24' />
    <path fill='none' d='M16.52,6l2.25,2.26-2.25,2.25' />
    <path fill='none' d='M16.52,18l2.25-2.26-2.25-2.25' />
  </Fragment>
)

const ArrowsRight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsRight
