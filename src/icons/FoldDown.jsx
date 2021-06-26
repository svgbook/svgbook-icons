import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,10.5v6l2.25-2.25m-4.5,0L12,16.5' />
    <line x1='9.75' y1='7.5' x2='10.5' y2='7.5' />
    <line x1='13.5' y1='7.5' x2='14.25' y2='7.5' />
    <line x1='17.25' y1='7.5' x2='18' y2='7.5' />
    <line x1='6' y1='7.5' x2='6.75' y2='7.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12,10.5v6l2.25-2.25m-4.5,0L12,16.5' />
    <line x1='9.75' y1='7.5' x2='10.5' y2='7.5' />
    <line x1='13.5' y1='7.5' x2='14.25' y2='7.5' />
    <line x1='17.25' y1='7.5' x2='18' y2='7.5' />
    <line x1='6' y1='7.5' x2='6.75' y2='7.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,10.5v6l2.25-2.25m-4.5,0L12,16.5' />
    <line strokeOpacity='.2' x1='9.75' y1='7.5' x2='10.5' y2='7.5' />
    <line strokeOpacity='.2' x1='13.5' y1='7.5' x2='14.25' y2='7.5' />
    <line strokeOpacity='.2' x1='17.25' y1='7.5' x2='18' y2='7.5' />
    <line strokeOpacity='.2' x1='6' y1='7.5' x2='6.75' y2='7.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M12,10.5v6l2.25-2.25m-4.5,0L12,16.5'
    />
    <line x1='9.75' y1='7.5' x2='10.5' y2='7.5' />
    <line x1='13.5' y1='7.5' x2='14.25' y2='7.5' />
    <line x1='17.25' y1='7.5' x2='18' y2='7.5' />
    <line x1='6' y1='7.5' x2='6.75' y2='7.5' />
  </Fragment>
)

const FoldDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FoldDown
