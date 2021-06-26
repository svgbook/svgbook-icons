import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.67,8.67v8A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33v-8A1.34,1.34,0,0,1,8.67,7.33H10a1.34,1.34,0,0,0,1.33,1.34h1.34A1.33,1.33,0,0,0,14,7.33h1.33A1.34,1.34,0,0,1,16.67,8.67Z'
    />
    <path
      fill='none'
      d='M14,7.33a1.33,1.33,0,0,1-1.33,1.34H11.33a1.34,1.34,0,0,1,0-2.67h1.34A1.33,1.33,0,0,1,14,7.33Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M16.67,8.67v8A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33v-8A1.34,1.34,0,0,1,8.67,7.33H10a1.34,1.34,0,0,0,1.33,1.34h1.34A1.33,1.33,0,0,0,14,7.33h1.33A1.34,1.34,0,0,1,16.67,8.67Z' />
    <path
      fill='none'
      d='M14,7.33a1.33,1.33,0,0,1-1.33,1.34H11.33a1.34,1.34,0,0,1,0-2.67h1.34A1.33,1.33,0,0,1,14,7.33Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16.67,8.67v8A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33v-8A1.34,1.34,0,0,1,8.67,7.33H10a1.34,1.34,0,0,0,1.33,1.34h1.34A1.33,1.33,0,0,0,14,7.33h1.33A1.34,1.34,0,0,1,16.67,8.67Z'
    />
    <path
      fill='none'
      d='M14,7.33a1.33,1.33,0,0,1-1.33,1.34H11.33a1.34,1.34,0,0,1,0-2.67h1.34A1.33,1.33,0,0,1,14,7.33Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16.67,8.67v8A1.34,1.34,0,0,1,15.33,18H8.67a1.34,1.34,0,0,1-1.34-1.33v-8A1.34,1.34,0,0,1,8.67,7.33H10a1.34,1.34,0,0,0,1.33,1.34h1.34A1.33,1.33,0,0,0,14,7.33h1.33A1.34,1.34,0,0,1,16.67,8.67Z'
    />
    <path
      fill='none'
      d='M14,7.33a1.33,1.33,0,0,1-1.33,1.34H11.33a1.34,1.34,0,0,1,0-2.67h1.34A1.33,1.33,0,0,1,14,7.33Z'
    />
  </Fragment>
)

const Clipboard = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Clipboard
