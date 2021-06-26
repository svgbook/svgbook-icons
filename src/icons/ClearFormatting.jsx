import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M14.57,14.57,18,18m0-3.43L14.57,18' />
    <path fill='none' d='M6,6.86V6h9.43v.86' />
    <line x1='6' y1='18' x2='9.43' y2='18' />
    <line x1='11.14' y1='6' x2='7.71' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M14.57,14.57,18,18m0-3.43L14.57,18' />
    <path fill='none' d='M6,6.86V6h9.43v.86' />
    <line x1='6' y1='18' x2='9.43' y2='18' />
    <line x1='11.14' y1='6' x2='7.71' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M14.57,14.57,18,18m0-3.43L14.57,18' />
    <path fill='none' d='M6,6.86V6h9.43v.86' />
    <line x1='6' y1='18' x2='9.43' y2='18' />
    <line strokeOpacity='.2' x1='11.14' y1='6' x2='7.71' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M14.57,14.57,18,18m0-3.43L14.57,18'
    />
    <path fill='none' d='M6,6.86V6h9.43v.86' />
    <line x1='6' y1='18' x2='9.43' y2='18' />
    <line x1='11.14' y1='6' x2='7.71' y2='18' />
  </Fragment>
)

const ClearFormatting = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ClearFormatting
