import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M17.82,6,16.36,16.55,12,18,7.64,16.55,6.18,6Z' />
    <path
      fill='none'
      d='M9.45,8.91h5.1l-3.28,2.91h2.91l-.36,2.54L12,14.91l-1.82-.55L10.11,14'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18.2,5.67a.52.52,0,0,0-.38-.17H6.18a.48.48,0,0,0-.37.17.49.49,0,0,0-.12.4L7.14,16.61a.51.51,0,0,0,.34.41l4.36,1.45a.44.44,0,0,0,.32,0L16.52,17a.51.51,0,0,0,.34-.41L18.31,6.07A.52.52,0,0,0,18.2,5.67ZM14.88,9.28l-2.29,2h1.59a.5.5,0,0,1,.38.17.53.53,0,0,1,.12.4l-.37,2.54a.47.47,0,0,1-.35.41l-1.82.55-.14,0-.14,0L10,14.84a.5.5,0,0,1-.35-.38l-.07-.36a.5.5,0,1,1,1-.2V14l1.39.42L13.37,14l.24-1.66H11.27a.5.5,0,0,1-.46-.32.51.51,0,0,1,.13-.56l2.29-2H9.45a.5.5,0,0,1,0-1h5.1a.5.5,0,0,1,.33.87Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M17.82,6,16.36,16.55,12,18,7.64,16.55,6.18,6Z' />
    <path
      fill='none'
      d='M9.45,8.91h5.1l-3.28,2.91h2.91l-.36,2.54L12,14.91l-1.82-.55L10.11,14'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M17.82,6,16.36,16.55,12,18,7.64,16.55,6.18,6Z' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M9.45,8.91h5.1l-3.28,2.91h2.91l-.36,2.54L12,14.91l-1.82-.55L10.11,14'
    />
  </Fragment>
)

const CSS3 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CSS3
