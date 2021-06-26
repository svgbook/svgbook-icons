import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,6.86V17.14' />
    <path
      fill='none'
      d='M11.14,17.14A5.21,5.21,0,0,0,6,12a5.21,5.21,0,0,0,5.14-5.14'
    />
    <path fill='none' d='M14.57,10.29v6.85' />
    <path fill='none' d='M18,10.29a3.43,3.43,0,0,0-3.43,3.42' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,6.86V17.14' />
    <path
      fill='none'
      d='M11.14,17.14A5.21,5.21,0,0,0,6,12a5.21,5.21,0,0,0,5.14-5.14'
    />
    <path fill='none' d='M14.57,10.29v6.85' />
    <path fill='none' d='M18,10.29a3.43,3.43,0,0,0-3.43,3.42' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,6.86V17.14' />
    <path
      fill='none'
      d='M11.14,17.14A5.21,5.21,0,0,0,6,12a5.21,5.21,0,0,0,5.14-5.14'
    />
    <path fill='none' d='M14.57,10.29v6.85' />
    <path fill='none' d='M18,10.29a3.43,3.43,0,0,0-3.43,3.42' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M6,6.86V17.14' />
    <path
      fill='none'
      d='M11.14,17.14A5.21,5.21,0,0,0,6,12a5.21,5.21,0,0,0,5.14-5.14'
    />
    <path fill='none' d='M14.57,10.29v6.85' />
    <path fill='none' d='M18,10.29a3.43,3.43,0,0,0-3.43,3.42' />
  </Fragment>
)

const KroneSwedish = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default KroneSwedish
