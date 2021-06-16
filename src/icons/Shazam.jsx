import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M10.67,12,12,10.67a1.88,1.88,0,0,1,2.67,0h0a1.89,1.89,0,0,1,0,2.66h0l-2,2'
    />
    <path fill='none' d='M13.33,12,12,13.33a1.88,1.88,0,1,1-2.67-2.66l2-2' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M12,5.5A6.5,6.5,0,1,0,18.5,12,6.51,6.51,0,0,0,12,5.5Zm-1.33,8.88A2.38,2.38,0,0,1,9,10.31l2-2a.5.5,0,1,1,.71.71l-2,2a1.39,1.39,0,0,0,2,2L13,11.65a.5.5,0,0,1,.71,0,.5.5,0,0,1,0,.7l-1.34,1.34A2.37,2.37,0,0,1,10.67,14.38ZM15,13.69l-2,2a.52.52,0,0,1-.71,0,.51.51,0,0,1,0-.71l2-2a1.39,1.39,0,0,0-2-2L11,12.35a.5.5,0,0,1-.71,0,.5.5,0,0,1,0-.7l1.34-1.34A2.39,2.39,0,1,1,15,13.69Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M10.67,12,12,10.67a1.88,1.88,0,0,1,2.67,0h0a1.89,1.89,0,0,1,0,2.66h0l-2,2'
    />
    <path fill='none' d='M13.33,12,12,13.33a1.88,1.88,0,1,1-2.67-2.66l2-2' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx='12' cy='12' r='6' />
    <path
      fill='none'
      d='M10.67,12,12,10.67a1.88,1.88,0,0,1,2.67,0h0a1.89,1.89,0,0,1,0,2.66h0l-2,2'
    />
    <path fill='none' d='M13.33,12,12,13.33a1.88,1.88,0,1,1-2.67-2.66l2-2' />
  </Fragment>
)

const Shazam = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Shazam
