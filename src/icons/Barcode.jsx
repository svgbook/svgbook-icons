import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,8.25V7.5A1.5,1.5,0,0,1,7.5,6H9' />
    <path fill='none' d='M6,15.75v.75A1.5,1.5,0,0,0,7.5,18H9' />
    <path fill='none' d='M15,6h1.5A1.5,1.5,0,0,1,18,7.5v.75' />
    <path fill='none' d='M15,18h1.5A1.5,1.5,0,0,0,18,16.5v-.75' />
    <rect x='6.75' y='11.25' width='0.75' height='1.5' />
    <line x1='10.5' y1='11.25' x2='10.5' y2='12.75' />
    <rect x='13.5' y='11.25' width='0.75' height='1.5' />
    <line x1='17.25' y1='11.25' x2='17.25' y2='12.75' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,8.25V7.5A1.5,1.5,0,0,1,7.5,6H9' />
    <path fill='none' d='M6,15.75v.75A1.5,1.5,0,0,0,7.5,18H9' />
    <path fill='none' d='M15,6h1.5A1.5,1.5,0,0,1,18,7.5v.75' />
    <path fill='none' d='M15,18h1.5A1.5,1.5,0,0,0,18,16.5v-.75' />
    <rect x='6.75' y='11.25' width='0.75' height='1.5' />
    <line x1='10.5' y1='11.25' x2='10.5' y2='12.75' />
    <rect x='13.5' y='11.25' width='0.75' height='1.5' />
    <line x1='17.25' y1='11.25' x2='17.25' y2='12.75' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M6,8.25V7.5A1.5,1.5,0,0,1,7.5,6H9'
    />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M6,15.75v.75A1.5,1.5,0,0,0,7.5,18H9'
    />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M15,6h1.5A1.5,1.5,0,0,1,18,7.5v.75'
    />
    <path
      fill='none'
      strokeOpacity='.2'
      d='M15,18h1.5A1.5,1.5,0,0,0,18,16.5v-.75'
    />
    <rect x='6.75' y='11.25' width='0.75' height='1.5' />
    <line x1='10.5' y1='11.25' x2='10.5' y2='12.75' />
    <rect x='13.5' y='11.25' width='0.75' height='1.5' />
    <line x1='17.25' y1='11.25' x2='17.25' y2='12.75' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6,8.25V7.5A1.5,1.5,0,0,1,7.5,6H9'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M6,15.75v.75A1.5,1.5,0,0,0,7.5,18H9'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M15,6h1.5A1.5,1.5,0,0,1,18,7.5v.75'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M15,18h1.5A1.5,1.5,0,0,0,18,16.5v-.75'
    />
    <rect x='6.75' y='11.25' width='0.75' height='1.5' />
    <line x1='10.5' y1='11.25' x2='10.5' y2='12.75' />
    <rect x='13.5' y='11.25' width='0.75' height='1.5' />
    <line x1='17.25' y1='11.25' x2='17.25' y2='12.75' />
  </Fragment>
)

const Barcode = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Barcode
