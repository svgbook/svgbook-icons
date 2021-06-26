import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M13.33,18H16V15.33H13.33v-4H16V8.67H13.33V6H10.67v.67a2,2,0,0,1-2,2H8v2.66h2.67v4A2.66,2.66,0,0,0,13.33,18'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M13.33,18H16V15.33H13.33v-4H16V8.67H13.33V6H10.67v.67a2,2,0,0,1-2,2H8v2.66h2.67v4A2.66,2.66,0,0,0,13.33,18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M13.33,18H16V15.33H13.33v-4H16V8.67H13.33V6H10.67v.67a2,2,0,0,1-2,2H8v2.66h2.67v4A2.66,2.66,0,0,0,13.33,18'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M13.33,18H16V15.33H13.33v-4H16V8.67H13.33V6H10.67v.67a2,2,0,0,1-2,2H8v2.66h2.67v4A2.66,2.66,0,0,0,13.33,18'
    />
  </Fragment>
)

const Tumblr = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Tumblr
