import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,16V8H9a2,2,0,0,1,0,4,2,2,0,0,1,0,4H6' />
    <line x1='6' y1='11.99' x2='9' y2='11.99' />
    <path
      fill='none'
      d='M13.33,12.66H18a2.34,2.34,0,0,0-4.67,0V14a2.33,2.33,0,0,0,4.43.67'
    />
    <line x1='14.67' y1='7.99' x2='16.67' y2='7.99' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,16V8H9a2,2,0,0,1,0,4,2,2,0,0,1,0,4H6' />
    <line x1='6' y1='11.99' x2='9' y2='11.99' />
    <path
      fill='none'
      d='M13.33,12.66H18a2.34,2.34,0,0,0-4.67,0V14a2.33,2.33,0,0,0,4.43.67'
    />
    <line x1='14.67' y1='7.99' x2='16.67' y2='7.99' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,16V8H9a2,2,0,0,1,0,4,2,2,0,0,1,0,4H6' />
    <line x1='6' y1='11.99' x2='9' y2='11.99' />
    <path
      fill='none'
      d='M13.33,12.66H18a2.34,2.34,0,0,0-4.67,0V14a2.33,2.33,0,0,0,4.43.67'
    />
    <line x1='14.67' y1='7.99' x2='16.67' y2='7.99' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M6,16V8H9a2,2,0,0,1,0,4,2,2,0,0,1,0,4H6' />
    <line x1='6' y1='11.99' x2='9' y2='11.99' />
    <path
      fill='none'
      d='M13.33,12.66H18a2.34,2.34,0,0,0-4.67,0V14a2.33,2.33,0,0,0,4.43.67'
    />
    <line x1='14.67' y1='7.99' x2='16.67' y2='7.99' />
  </Fragment>
)

const Behance = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Behance
