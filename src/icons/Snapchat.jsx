import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15.25,9.25a3.25,3.25,0,0,0-6.5,0c0,2.85-.15,4.28-2.75,5.42,1.33.59,1.33.59,2,2,2,0,2.67,1.33,4,1.33s2-1.33,4-1.33c.67-1.41.67-1.41,2-2C15.4,13.53,15.25,12.1,15.25,9.25ZM6,14.67c2.67-1.41,2.67-2.75.67-4.75M18,14.67c-2.67-1.41-2.67-2.75-.67-4.75'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M18,14.67c-2.67-1.41-2.67-2.75-.67-4.75m-10.66,0c2,2,2,3.34-.67,4.75'
    />
    <path
      class='cls-2'
      d='M18,14.67c-1.33.58-1.33.58-2,2-2,0-2.67,1.33-4,1.33s-2-1.33-4-1.33c-.67-1.42-.67-1.42-2-2,2.6-1.14,2.75-2.57,2.75-5.42a3.25,3.25,0,0,1,6.5,0C15.25,12.1,15.4,13.53,18,14.67Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M18,14.67c-2.67-1.41-2.67-2.75-.67-4.75m-10.66,0c2,2,2,3.34-.67,4.75'
    />
    <path
      fillOpacity='.2'
      d='M18,14.67c-1.33.58-1.33.58-2,2-2,0-2.67,1.33-4,1.33s-2-1.33-4-1.33c-.67-1.42-.67-1.42-2-2,2.6-1.14,2.75-2.57,2.75-5.42a3.25,3.25,0,0,1,6.5,0C15.25,12.1,15.4,13.53,18,14.67Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M18,14.67c-2.67-1.41-2.67-2.75-.67-4.75m-10.66,0c2,2,2,3.34-.67,4.75'
    />
    <path
      fill={secondaryColor}
      d='M18,14.67c-1.33.58-1.33.58-2,2-2,0-2.67,1.33-4,1.33s-2-1.33-4-1.33c-.67-1.42-.67-1.42-2-2,2.6-1.14,2.75-2.57,2.75-5.42a3.25,3.25,0,0,1,6.5,0C15.25,12.1,15.4,13.53,18,14.67Z'
    />
  </Fragment>
)

const Snapchat = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Snapchat
