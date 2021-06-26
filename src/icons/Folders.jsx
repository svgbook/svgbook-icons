import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M18,9v4.67A1.33,1.33,0,0,1,16.67,15H10a1.34,1.34,0,0,1-1.33-1.35v-6A1.34,1.34,0,0,1,10,6.33h2l1.33,1.33h3.34A1.33,1.33,0,0,1,18,9Z'
    />
    <path
      fill='none'
      d='M15.34,15v1.33A1.33,1.33,0,0,1,14,17.67H7.33A1.32,1.32,0,0,1,6,16.34v-6A1.33,1.33,0,0,1,7.33,9H8.66v4.67A1.34,1.34,0,0,0,10,15Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M18,9v4.67A1.33,1.33,0,0,1,16.67,15H10a1.34,1.34,0,0,1-1.33-1.35v-6A1.34,1.34,0,0,1,10,6.33h2l1.33,1.33h3.34A1.33,1.33,0,0,1,18,9Z'
    />
    <path d='M15.34,15v1.33A1.33,1.33,0,0,1,14,17.67H7.33A1.32,1.32,0,0,1,6,16.34v-6A1.33,1.33,0,0,1,7.33,9H8.66v4.67A1.34,1.34,0,0,0,10,15Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M18,9v4.67A1.33,1.33,0,0,1,16.67,15H10a1.34,1.34,0,0,1-1.33-1.35v-6A1.34,1.34,0,0,1,10,6.33h2l1.33,1.33h3.34A1.33,1.33,0,0,1,18,9Z'
    />
    <path
      fillOpacity='.2'
      d='M15.34,15v1.33A1.33,1.33,0,0,1,14,17.67H7.33A1.32,1.32,0,0,1,6,16.34v-6A1.33,1.33,0,0,1,7.33,9H8.66v4.67A1.34,1.34,0,0,0,10,15Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M18,9v4.67A1.33,1.33,0,0,1,16.67,15H10a1.34,1.34,0,0,1-1.33-1.35v-6A1.34,1.34,0,0,1,10,6.33h2l1.33,1.33h3.34A1.33,1.33,0,0,1,18,9Z'
    />
    <path
      fill={secondaryColor}
      d='M15.34,15v1.33A1.33,1.33,0,0,1,14,17.67H7.33A1.32,1.32,0,0,1,6,16.34v-6A1.33,1.33,0,0,1,7.33,9H8.66v4.67A1.34,1.34,0,0,0,10,15Z'
    />
  </Fragment>
)

const Folders = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Folders
