import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <circle fill='none' cx='11.99' cy='12.02' r='2' />
    <line fill='none' x1='11.99' y1='18.01' x2='11.99' y2='18.02' />
    <line fill='none' x1='6' y1='10.02' x2='6' y2='10.03' />
    <line fill='none' x1='17.99' y1='10.02' x2='17.99' y2='10.03' />
    <path fill='none' d='M9.33,17.41A6,6,0,0,1,6,12.68' />
    <path fill='none' d='M14.66,17.41A6,6,0,0,0,18,12.68' />
    <path fill='none' d='M8.13,7.35a6,6,0,0,1,7.59,0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <circle cx='11.99' cy='12.02' r='2' />
    <line fill='none' x1='11.99' y1='18.01' x2='11.99' y2='18.02' />
    <line fill='none' x1='6' y1='10.02' x2='6' y2='10.03' />
    <line fill='none' x1='17.99' y1='10.02' x2='17.99' y2='10.03' />
    <path fill='none' d='M9.33,17.41A6,6,0,0,1,6,12.68' />
    <path fill='none' d='M14.66,17.41A6,6,0,0,0,18,12.68' />
    <path fill='none' d='M8.13,7.35a6,6,0,0,1,7.59,0' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <circle fillOpacity='.2' cx='11.99' cy='12.02' r='2' />
    <line fill='none' x1='11.99' y1='18.01' x2='11.99' y2='18.02' />
    <line fill='none' x1='6' y1='10.02' x2='6' y2='10.03' />
    <line fill='none' x1='17.99' y1='10.02' x2='17.99' y2='10.03' />
    <path fill='none' d='M9.33,17.41A6,6,0,0,1,6,12.68' />
    <path fill='none' d='M14.66,17.41A6,6,0,0,0,18,12.68' />
    <path fill='none' d='M8.13,7.35a6,6,0,0,1,7.59,0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <circle fill='none' stroke={secondaryColor} cx='11.99' cy='12.02' r='2' />
    <line
      fill='none'
      stroke={secondaryColor}
      x1='11.99'
      y1='18.01'
      x2='11.99'
      y2='18.02'
    />
    <line
      fill='none'
      stroke={secondaryColor}
      x1='6'
      y1='10.02'
      x2='6'
      y2='10.03'
    />
    <line
      fill='none'
      stroke={secondaryColor}
      x1='17.99'
      y1='10.02'
      x2='17.99'
      y2='10.03'
    />
    <path fill='none' d='M9.33,17.41A6,6,0,0,1,6,12.68' />
    <path fill='none' d='M14.66,17.41A6,6,0,0,0,18,12.68' />
    <path fill='none' d='M8.13,7.35a6,6,0,0,1,7.59,0' />
  </Fragment>
)

const Atom2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Atom2
