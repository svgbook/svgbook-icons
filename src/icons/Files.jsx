import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17,9.33V14a1.34,1.34,0,0,1-1.33,1.33H11A1.33,1.33,0,0,1,9.67,14V7.33A1.33,1.33,0,0,1,11,6h2.67V8.67a.66.66,0,0,0,.66.66Z'
    />
    <path fill='none' d='M17,9.33H14.33a.66.66,0,0,1-.66-.66V6Z' />
    <path
      fill='none'
      d='M14.33,15.33v1.34A1.34,1.34,0,0,1,13,18H8.33A1.34,1.34,0,0,1,7,16.67V10A1.33,1.33,0,0,1,8.33,8.67H9.67V14A1.33,1.33,0,0,0,11,15.33Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M17,9.33V14a1.34,1.34,0,0,1-1.33,1.33H11A1.33,1.33,0,0,1,9.67,14V7.33A1.33,1.33,0,0,1,11,6h2.67V8.67a.66.66,0,0,0,.66.66Z'
    />
    <path fill='none' d='M17,9.33H14.33a.66.66,0,0,1-.66-.66V6Z' />
    <path d='M14.33,15.33v1.34A1.34,1.34,0,0,1,13,18H8.33A1.34,1.34,0,0,1,7,16.67V10A1.33,1.33,0,0,1,8.33,8.67H9.67V14A1.33,1.33,0,0,0,11,15.33Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17,9.33V14a1.34,1.34,0,0,1-1.33,1.33H11A1.33,1.33,0,0,1,9.67,14V7.33A1.33,1.33,0,0,1,11,6h2.67V8.67a.66.66,0,0,0,.66.66Z'
    />
    <path fill='none' d='M17,9.33H14.33a.66.66,0,0,1-.66-.66V6Z' />
    <path
      fillOpacity='.2'
      d='M14.33,15.33v1.34A1.34,1.34,0,0,1,13,18H8.33A1.34,1.34,0,0,1,7,16.67V10A1.33,1.33,0,0,1,8.33,8.67H9.67V14A1.33,1.33,0,0,0,11,15.33Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M17,9.33V14a1.34,1.34,0,0,1-1.33,1.33H11A1.33,1.33,0,0,1,9.67,14V7.33A1.33,1.33,0,0,1,11,6h2.67V8.67a.66.66,0,0,0,.66.66Z'
    />
    <path fill='none' d='M17,9.33H14.33a.66.66,0,0,1-.66-.66V6Z' />
    <path
      fill={secondaryColor}
      d='M14.33,15.33v1.34A1.34,1.34,0,0,1,13,18H8.33A1.34,1.34,0,0,1,7,16.67V10A1.33,1.33,0,0,1,8.33,8.67H9.67V14A1.33,1.33,0,0,0,11,15.33Z'
    />
  </Fragment>
)

const Files = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Files
