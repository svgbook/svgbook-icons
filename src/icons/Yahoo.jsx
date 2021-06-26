import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='7.76' x2='9.53' y2='7.76' />
    <line x1='8.82' y1='16.23' x2='13.76' y2='16.23' />
    <path fill='none' d='M7.06,7.76l3.88,4.94v3.53' />
    <path fill='none' d='M10.94,12.7l4.24-3.53' />
    <line x1='12.71' y1='9.17' x2='16.24' y2='9.17' />
    <line x1='18' y1='11.29' x2='18' y2='14.11' />
    <line x1='18' y1='16.23' x2='18' y2='16.24' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='6' y1='7.76' x2='9.53' y2='7.76' />
    <line x1='8.82' y1='16.23' x2='13.76' y2='16.23' />
    <path fill='none' d='M7.06,7.76l3.88,4.94v3.53' />
    <path fill='none' d='M10.94,12.7l4.24-3.53' />
    <line x1='12.71' y1='9.17' x2='16.24' y2='9.17' />
    <line x1='18' y1='11.29' x2='18' y2='14.11' />
    <line x1='18' y1='16.23' x2='18' y2='16.24' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='6' y1='7.76' x2='9.53' y2='7.76' />
    <line x1='8.82' y1='16.23' x2='13.76' y2='16.23' />
    <path fill='none' d='M7.06,7.76l3.88,4.94v3.53' />
    <path fill='none' d='M10.94,12.7l4.24-3.53' />
    <line x1='12.71' y1='9.17' x2='16.24' y2='9.17' />
    <line x1='18' y1='11.29' x2='18' y2='14.11' />
    <line x1='18' y1='16.23' x2='18' y2='16.24' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='6' y1='7.76' x2='9.53' y2='7.76' />
    <line x1='8.82' y1='16.23' x2='13.76' y2='16.23' />
    <path fill='none' d='M7.06,7.76l3.88,4.94v3.53' />
    <path fill='none' d='M10.94,12.7l4.24-3.53' />
    <line x1='12.71' y1='9.17' x2='16.24' y2='9.17' />
    <line x1='18' y1='11.29' x2='18' y2='14.11' />
    <line x1='18' y1='16.23' x2='18' y2='16.24' />
  </Fragment>
)

const Yahoo = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Yahoo
