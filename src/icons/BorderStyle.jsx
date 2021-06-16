import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,18V7.5A1.5,1.5,0,0,1,7.5,6H18' />
    <path d='M18,9h0' />
    <path d='M18,12h0' />
    <path d='M18,15h0' />
    <path d='M9,18H9' />
    <path d='M12,18h0' />
    <path d='M15,18h0' />
    <path d='M18,18h0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,18V7.5A1.5,1.5,0,0,1,7.5,6H18' />
    <path d='M18,9h0' />
    <path d='M18,12h0' />
    <path d='M18,15h0' />
    <path d='M9,18H9' />
    <path d='M12,18h0' />
    <path d='M15,18h0' />
    <path d='M18,18h0' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,18V7.5A1.5,1.5,0,0,1,7.5,6H18' />
    <path strokeOpacity='.2' d='M18,9h0' />
    <path strokeOpacity='.2' d='M18,12h0' />
    <path strokeOpacity='.2' d='M18,15h0' />
    <path strokeOpacity='.2' d='M9,18H9' />
    <path strokeOpacity='.2' d='M12,18h0' />
    <path strokeOpacity='.2' d='M15,18h0' />
    <path strokeOpacity='.2' d='M18,18h0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6,18V7.5A1.5,1.5,0,0,1,7.5,6H18'
    />
    <path d='M18,9h0' />
    <path d='M18,12h0' />
    <path d='M18,15h0' />
    <path d='M9,18H9' />
    <path d='M12,18h0' />
    <path d='M15,18h0' />
    <path d='M18,18h0' />
  </Fragment>
)

const BorderStyle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BorderStyle
