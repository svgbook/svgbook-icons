import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M9.64,9.64l-1.11,1.7a4,4,0,0,0,6.88,4.08' />
    <path fill='none' d='M16,13.33a3.93,3.93,0,0,0-.54-2L12,6,10.69,8' />
    <path fill='none' d='M6,6,18,18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M16,13.33a3.93,3.93,0,0,0-.54-2L12,6,10.69,8Z' />
    <path d='M6,6,18,18' />
    <path d='M15.41,15.42a4,4,0,0,1-6.88-4.08l1.11-1.7Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M16,13.33a3.93,3.93,0,0,0-.54-2L12,6,10.69,8Z' />
    <path fill='none' d='M6,6,18,18' />
    <path fillOpacity='.2' d='M15.41,15.42a4,4,0,0,1-6.88-4.08l1.11-1.7Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16,13.33a3.93,3.93,0,0,0-.54-2L12,6,10.69,8Z'
    />
    <path fill='none' d='M6,6,18,18' />
    <path
      fill={secondaryColor}
      d='M15.41,15.42a4,4,0,0,1-6.88-4.08l1.11-1.7Z'
    />
  </Fragment>
)

const DropletOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DropletOff
