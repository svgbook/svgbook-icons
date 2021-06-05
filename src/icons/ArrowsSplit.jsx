import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.63,15.13H14.25a3.13,3.13,0,0,1-2.56-1.34l-.32-.46A3.13,3.13,0,0,0,8.81,12H6.37'
    />
    <path
      fill='none'
      d='M17.63,8.87H14.26a3.13,3.13,0,0,0-2.57,1.34l-.32.45A3.11,3.11,0,0,1,8.81,12H6.37'
    />
    <path fill='none' d='M15.75,10.75l1.88-1.88L15.75,7' />
    <path fill='none' d='M15.75,17l1.88-1.87-1.88-1.88' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M17.63,15.13H14.25a3.13,3.13,0,0,1-2.56-1.34l-.32-.46A3.13,3.13,0,0,0,8.81,12H6.37'
    />
    <path
      fill='none'
      d='M17.63,8.87H14.26a3.13,3.13,0,0,0-2.57,1.34l-.32.45A3.11,3.11,0,0,1,8.81,12H6.37'
    />
    <path fill='none' d='M15.75,10.75l1.88-1.88L15.75,7' />
    <path fill='none' d='M15.75,17l1.88-1.87-1.88-1.88' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M17.63,15.13H14.25a3.13,3.13,0,0,1-2.56-1.34l-.32-.46A3.13,3.13,0,0,0,8.81,12H6.37'
    />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M17.63,8.87H14.26a3.13,3.13,0,0,0-2.57,1.34l-.32.45A3.11,3.11,0,0,1,8.81,12H6.37'
    />
    <path fill='none' d='M15.75,10.75l1.88-1.88L15.75,7' />
    <path fill='none' d='M15.75,17l1.88-1.87-1.88-1.88' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M17.63,15.13H14.25a3.13,3.13,0,0,1-2.56-1.34l-.32-.46A3.13,3.13,0,0,0,8.81,12H6.37'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M17.63,8.87H14.26a3.13,3.13,0,0,0-2.57,1.34l-.32.45A3.11,3.11,0,0,1,8.81,12H6.37'
    />
    <path fill='none' d='M15.75,10.75l1.88-1.88L15.75,7' />
    <path fill='none' d='M15.75,17l1.88-1.87-1.88-1.88' />
  </Fragment>
)

const ArrowsSplit = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ArrowsSplit
