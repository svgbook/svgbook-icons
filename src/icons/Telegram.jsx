import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M14.25,10.5l-3,3,4.5,4.5,3-12L5.25,11.25l3,1.5,1.5,4.5,2.25-3'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M14.25,10.5l-3,3,4.5,4.5,3-12L5.25,11.25l3,1.5,1.5,4.5,2.25-3' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M14.25,10.5l-3,3,4.5,4.5,3-12L5.25,11.25l3,1.5,1.5,4.5,2.25-3'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M14.25,10.5l-3,3,4.5,4.5,3-12L5.25,11.25l3,1.5,1.5,4.5,2.25-3'
    />
  </Fragment>
)

const Telegram = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Telegram
