import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10.94,18l.71-3.53-.71-2.82L8.82,8.82h2.83l2.11-2.11'
    />
    <path fill='none' d='M7.41,14.47l-.7-2.82L8.82,8.82' />
    <circle fill='none' cx='7.41' cy='6.71' r='0.71' />
    <path fill='none' d='M12.71,11.65h1.76l2.82,1.41' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M10.94,18l.71-3.53-.71-2.82L8.82,8.82h2.83l2.11-2.11'
    />
    <path fill='none' d='M7.41,14.47l-.7-2.82L8.82,8.82' />
    <circle cx='7.41' cy='6.71' r='0.71' />
    <path fill='none' d='M12.71,11.65h1.76l2.82,1.41' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10.94,18l.71-3.53-.71-2.82L8.82,8.82h2.83l2.11-2.11'
    />
    <path fill='none' d='M7.41,14.47l-.7-2.82L8.82,8.82' />
    <circle fill='none' strokeOpacity='.2' cx='7.41' cy='6.71' r='0.71' />
    <path fill='none' d='M12.71,11.65h1.76l2.82,1.41' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M10.94,18l.71-3.53-.71-2.82L8.82,8.82h2.83l2.11-2.11'
    />
    <path fill='none' d='M7.41,14.47l-.7-2.82L8.82,8.82' />
    <circle fill='none' stroke={secondaryColor} cx='7.41' cy='6.71' r='0.71' />
    <path fill='none' d='M12.71,11.65h1.76l2.82,1.41' />
  </Fragment>
)

const Fall = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Fall
