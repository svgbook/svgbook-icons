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
    <path fill='none' d='M18,6.86,16.29,8.57,14.57,6.86' />
    <path fill='none' d='M18,12H16.29a2.57,2.57,0,1,0,0,5.14H18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,6.86V17.14' />
    <path
      fill='none'
      d='M11.14,17.14A5.21,5.21,0,0,0,6,12a5.21,5.21,0,0,0,5.14-5.14'
    />
    <path fill='none' d='M18,6.86,16.29,8.57,14.57,6.86' />
    <path fill='none' d='M18,12H16.29a2.57,2.57,0,1,0,0,5.14H18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,6.86V17.14' />
    <path
      fill='none'
      d='M11.14,17.14A5.21,5.21,0,0,0,6,12a5.21,5.21,0,0,0,5.14-5.14'
    />
    <path fill='none' strokeOpacity='.2' d='M18,6.86,16.29,8.57,14.57,6.86' />
    <path fill='none' d='M18,12H16.29a2.57,2.57,0,1,0,0,5.14H18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M6,6.86V17.14' />
    <path
      fill='none'
      d='M11.14,17.14A5.21,5.21,0,0,0,6,12a5.21,5.21,0,0,0,5.14-5.14'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M18,6.86,16.29,8.57,14.57,6.86'
    />
    <path fill='none' d='M18,12H16.29a2.57,2.57,0,1,0,0,5.14H18' />
  </Fragment>
)

const KroneCzech = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default KroneCzech
