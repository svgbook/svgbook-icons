import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4'
    />
    <path fill='none' d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4' />
    <path d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <path
      fillOpacity='.2'
      d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <path
      fill={secondaryColor}
      d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4'
    />
  </Fragment>
)

const Bell = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bell
