import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M13.33,17.34h0' />
    <path
      fill='none'
      d='M8,12.66l1.59-.6a.66.66,0,0,0-.06-1.26l-1-.27a.67.67,0,0,1-.07-1.27L10,8.66'
    />
    <path
      fill='none'
      d='M6,13.33V14a2,2,0,0,0,2,2h2.77a2,2,0,0,0,2-2,1.62,1.62,0,0,0,0-.22L12,6.66'
    />
    <path
      fill='none'
      d='M14.67,15.33l.66.67h1.34a1.34,1.34,0,0,0,1.1-2.09L16,11.33'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M13.33,17.34h0' />
    <path
      fill='none'
      d='M8,12.66l1.59-.6a.66.66,0,0,0-.06-1.26l-1-.27a.67.67,0,0,1-.07-1.27L10,8.66'
    />
    <path
      fill='none'
      d='M6,13.33V14a2,2,0,0,0,2,2h2.77a2,2,0,0,0,2-2,1.62,1.62,0,0,0,0-.22L12,6.66'
    />
    <path
      fill='none'
      d='M14.67,15.33l.66.67h1.34a1.34,1.34,0,0,0,1.1-2.09L16,11.33'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M13.33,17.34h0' />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M8,12.66l1.59-.6a.66.66,0,0,0-.06-1.26l-1-.27a.67.67,0,0,1-.07-1.27L10,8.66'
    />
    <path
      fill='none'
      d='M6,13.33V14a2,2,0,0,0,2,2h2.77a2,2,0,0,0,2-2,1.62,1.62,0,0,0,0-.22L12,6.66'
    />
    <path
      fill='none'
      d='M14.67,15.33l.66.67h1.34a1.34,1.34,0,0,0,1.1-2.09L16,11.33'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M13.33,17.34h0' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M8,12.66l1.59-.6a.66.66,0,0,0-.06-1.26l-1-.27a.67.67,0,0,1-.07-1.27L10,8.66'
    />
    <path
      fill='none'
      d='M6,13.33V14a2,2,0,0,0,2,2h2.77a2,2,0,0,0,2-2,1.62,1.62,0,0,0,0-.22L12,6.66'
    />
    <path
      fill='none'
      d='M14.67,15.33l.66.67h1.34a1.34,1.34,0,0,0,1.1-2.09L16,11.33'
    />
  </Fragment>
)

const Dinar = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Dinar
