import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M8.67,6h6.66a.73.73,0,0,1,.65.89l-1.32,6.56A.67.67,0,0,1,14,14H12.5a.68.68,0,0,0-.53.26L9.21,17.74A.68.68,0,0,1,8,17.32V6.67A.66.66,0,0,1,8.67,6Z'
    />
    <line x1='12' y1='10' x2='15.33' y2='10' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M8.67,6h6.66a.73.73,0,0,1,.65.89l-1.32,6.56A.67.67,0,0,1,14,14H12.5a.68.68,0,0,0-.53.26L9.21,17.74A.68.68,0,0,1,8,17.32V6.67A.66.66,0,0,1,8.67,6Z'
    />
    <line x1='12' y1='10' x2='15.33' y2='10' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M8.67,6h6.66a.73.73,0,0,1,.65.89l-1.32,6.56A.67.67,0,0,1,14,14H12.5a.68.68,0,0,0-.53.26L9.21,17.74A.68.68,0,0,1,8,17.32V6.67A.66.66,0,0,1,8.67,6Z'
    />
    <line x1='12' y1='10' x2='15.33' y2='10' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M8.67,6h6.66a.73.73,0,0,1,.65.89l-1.32,6.56A.67.67,0,0,1,14,14H12.5a.68.68,0,0,0-.53.26L9.21,17.74A.68.68,0,0,1,8,17.32V6.67A.66.66,0,0,1,8.67,6Z'
    />
    <line x1='12' y1='10' x2='15.33' y2='10' />
  </Fragment>
)

const Foursquare = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Foursquare
