import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='14' cy='12' r='2' />
    <path
      fill='none'
      d='M10,6h4a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H10A2,2,0,0,1,8,8H8A2,2,0,0,1,10,6Z'
    />
    <path fill='none' d='M10,10a2,2,0,0,0,0,4h2m-2,0a2,2,0,1,0,2,2V6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='14' cy='12' r='2' />
    <path d='M10,6h4a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H10A2,2,0,0,1,8,8H8A2,2,0,0,1,10,6Z' />
    <path d='M12,10H10a2,2,0,0,0,0,4h2m-2,0a2,2,0,1,0,2,2V6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='14' cy='12' r='2' />
    <path
      fillOpacity='.2'
      d='M10,6h4a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H10A2,2,0,0,1,8,8H8A2,2,0,0,1,10,6Z'
    />
    <path fillOpacity='.2' d='M12,10H10a2,2,0,0,0,0,4h2m-2,0a2,2,0,1,0,2,2V6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='14' cy='12' r='2' />
    <path
      fill={secondaryColor}
      d='M10,6h4a2,2,0,0,1,2,2h0a2,2,0,0,1-2,2H10A2,2,0,0,1,8,8H8A2,2,0,0,1,10,6Z'
    />
    <path
      fill={secondaryColor}
      d='M12,10H10a2,2,0,0,0,0,4h2m-2,0a2,2,0,1,0,2,2V6'
    />
  </Fragment>
)

const Figma = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Figma
