import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='8.25' cy='12' r='2.25' />
    <circle fill='none' cx='15.75' cy='12' r='2.25' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='8.25' cy='12' r='2.25' />
    <circle cx='15.75' cy='12' r='2.25' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='8.25' cy='12' r='2.25' />
    <circle fillOpacity='.2' cx='15.75' cy='12' r='2.25' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='8.25' cy='12' r='2.25' />
    <circle fill={secondaryColor} cx='15.75' cy='12' r='2.25' />
  </Fragment>
)

const Flickr = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Flickr
