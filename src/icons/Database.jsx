import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <ellipse fill='none' cx='12' cy='8' rx='5.33' ry='2' />
    <path fill='none' d='M6.67,8v4c0,1.1,2.38,2,5.33,2s5.33-.9,5.33-2V8' />
    <path fill='none' d='M6.67,12v4c0,1.1,2.38,2,5.33,2s5.33-.9,5.33-2V12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <ellipse cx='12' cy='8' rx='5.33' ry='2' />
    <path fill='none' d='M6.67,8v4c0,1.1,2.38,2,5.33,2s5.33-.9,5.33-2V8' />
    <path fill='none' d='M6.67,12v4c0,1.1,2.38,2,5.33,2s5.33-.9,5.33-2V12' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <ellipse fillOpacity='.2' cx='12' cy='8' rx='5.33' ry='2' />
    <path fill='none' d='M6.67,8v4c0,1.1,2.38,2,5.33,2s5.33-.9,5.33-2V8' />
    <path fill='none' d='M6.67,12v4c0,1.1,2.38,2,5.33,2s5.33-.9,5.33-2V12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <ellipse fill={secondaryColor} cx='12' cy='8' rx='5.33' ry='2' />
    <path fill='none' d='M6.67,8v4c0,1.1,2.38,2,5.33,2s5.33-.9,5.33-2V8' />
    <path fill='none' d='M6.67,12v4c0,1.1,2.38,2,5.33,2s5.33-.9,5.33-2V12' />
  </Fragment>
)

const Database = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Database
