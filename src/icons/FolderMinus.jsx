import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.33,7H10l2,2h4.67A1.34,1.34,0,0,1,18,10.33v5.34A1.34,1.34,0,0,1,16.67,17H7.33A1.34,1.34,0,0,1,6,15.67V8.33A1.34,1.34,0,0,1,7.33,7'
    />
    <line x1='10' y1='13' x2='14' y2='13' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.67,8.5H12.21L10.35,6.65A.47.47,0,0,0,10,6.5H7.33A1.83,1.83,0,0,0,5.5,8.33v7.34A1.83,1.83,0,0,0,7.33,17.5h9.34a1.83,1.83,0,0,0,1.83-1.83V10.33A1.83,1.83,0,0,0,16.67,8.5ZM14,13.5H10a.5.5,0,0,1,0-1h4a.5.5,0,0,1,0,1Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.33,7H10l2,2h4.67A1.34,1.34,0,0,1,18,10.33v5.34A1.34,1.34,0,0,1,16.67,17H7.33A1.34,1.34,0,0,1,6,15.67V8.33A1.34,1.34,0,0,1,7.33,7'
    />
    <line x1='10' y1='13' x2='14' y2='13' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.33,7H10l2,2h4.67A1.34,1.34,0,0,1,18,10.33v5.34A1.34,1.34,0,0,1,16.67,17H7.33A1.34,1.34,0,0,1,6,15.67V8.33A1.34,1.34,0,0,1,7.33,7'
    />
    <line x1='10' y1='13' x2='14' y2='13' />
  </Fragment>
)

const FolderMinus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default FolderMinus
