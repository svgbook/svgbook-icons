import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,8,10.33,9.67,12,11.33l1.67-1.66Z' />
    <path fill='none' d='M12,12.67l-1.67,1.66L12,16l1.67-1.67Z' />
    <path fill='none' d='M16.67,8,15,9.67l1.67,1.66,1.67-1.66Z' />
    <path fill='none' d='M7.33,8,5.67,9.67l1.66,1.66L9,9.67Z' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,8,10.33,9.67,12,11.33l1.67-1.66Z' />
    <path d='M12,12.67l-1.67,1.66L12,16l1.67-1.67Z' />
    <path d='M16.67,8,15,9.67l1.67,1.66,1.67-1.66Z' />
    <path d='M7.33,8,5.67,9.67l1.66,1.66L9,9.67Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M12,8,10.33,9.67,12,11.33l1.67-1.66Z' />
    <path fillOpacity='.2' d='M12,12.67l-1.67,1.66L12,16l1.67-1.67Z' />
    <path fillOpacity='.2' d='M16.67,8,15,9.67l1.67,1.66,1.67-1.66Z' />
    <path fillOpacity='.2' d='M7.33,8,5.67,9.67l1.66,1.66L9,9.67Z' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M12,8,10.33,9.67,12,11.33l1.67-1.66Z' />
    <path fill={secondaryColor} d='M12,12.67l-1.67,1.66L12,16l1.67-1.67Z' />
    <path fill={secondaryColor} d='M16.67,8,15,9.67l1.67,1.66,1.67-1.66Z' />
    <path fill={secondaryColor} d='M7.33,8,5.67,9.67l1.66,1.66L9,9.67Z' />
  </Fragment>
)

const Tidal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Tidal
