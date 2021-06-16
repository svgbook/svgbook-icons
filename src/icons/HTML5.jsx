import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M17.82,6,16.36,16.55,12,18,7.64,16.55,6.18,6Z' />
    <path
      fill='none'
      d='M14.55,8.91H9.45l.37,2.91h4.36l-.36,2.54L12,14.91l-1.82-.55L10.11,14'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18.2,5.67a.52.52,0,0,0-.38-.17H6.18a.52.52,0,0,0-.38.17.52.52,0,0,0-.11.4L7.14,16.61a.51.51,0,0,0,.34.41l4.36,1.45a.44.44,0,0,0,.32,0L16.52,17a.51.51,0,0,0,.34-.41L18.31,6.07A.52.52,0,0,0,18.2,5.67ZM14.55,9.41H10l.24,1.91h3.92a.5.5,0,0,1,.38.17.53.53,0,0,1,.12.4l-.37,2.54a.47.47,0,0,1-.35.41l-1.82.55-.14,0-.14,0L10,14.84a.5.5,0,0,1-.35-.38l-.07-.36a.5.5,0,1,1,1-.2V14l1.39.42L13.37,14l.23-1.66H9.82a.51.51,0,0,1-.5-.44L9,9a.47.47,0,0,1,.12-.39.48.48,0,0,1,.37-.17h5.1a.5.5,0,0,1,0,1Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M17.82,6,16.36,16.55,12,18,7.64,16.55,6.18,6Z' />
    <path
      fill='none'
      d='M14.55,8.91H9.45l.37,2.91h4.36l-.36,2.54L12,14.91l-1.82-.55L10.11,14'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M17.82,6,16.36,16.55,12,18,7.64,16.55,6.18,6Z'
    />
    <path
      fill='none'
      d='M14.55,8.91H9.45l.37,2.91h4.36l-.36,2.54L12,14.91l-1.82-.55L10.11,14'
    />
  </Fragment>
)

const HTML5 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default HTML5
