import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M12,14l5.59-5.61a1.41,1.41,0,0,0,0-2,1.39,1.39,0,0,0-2,0L10,12v2Z'
    />
    <path fill='none' d='M14.66,7.33l2,2' />
    <path fill='none' d='M10,8.71A4.67,4.67,0,1,0,15.28,14' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M12,14l5.59-5.61a1.41,1.41,0,0,0,0-2,1.39,1.39,0,0,0-2,0L10,12v2Z' />
    <path fill='none' d='M14.66,7.33l2,2' />
    <path fill='none' d='M10,8.71A4.67,4.67,0,1,0,15.28,14' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M12,14l5.59-5.61a1.41,1.41,0,0,0,0-2,1.39,1.39,0,0,0-2,0L10,12v2Z'
    />
    <path fill='none' d='M14.66,7.33l2,2' />
    <path fill='none' d='M10,8.71A4.67,4.67,0,1,0,15.28,14' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M12,14l5.59-5.61a1.41,1.41,0,0,0,0-2,1.39,1.39,0,0,0-2,0L10,12v2Z'
    />
    <path fill='none' d='M14.66,7.33l2,2' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M10,8.71A4.67,4.67,0,1,0,15.28,14'
    />
  </Fragment>
)

const EditCircle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default EditCircle
