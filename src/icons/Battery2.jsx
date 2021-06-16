import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.5,8.25h8.25a1.5,1.5,0,0,1,1.5,1.5v.38a.38.38,0,0,0,.37.37.38.38,0,0,1,.38.38v2.25a.38.38,0,0,1-.38.37.38.38,0,0,0-.37.38v.37a1.5,1.5,0,0,1-1.5,1.5H7.5A1.5,1.5,0,0,1,6,14.25V9.75a1.5,1.5,0,0,1,1.5-1.5'
    />
    <line x1='8.25' y1='10.5' x2='8.25' y2='13.5' />
    <line x1='10.5' y1='10.5' x2='10.5' y2='13.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.75,10V9.75a2,2,0,0,0-2-2H7.5a2,2,0,0,0-2,2v4.5a2,2,0,0,0,2,2h8.25a2,2,0,0,0,2-2V14a.88.88,0,0,0,.75-.87V10.88A.88.88,0,0,0,17.75,10Zm-9,3.49a.5.5,0,0,1-1,0v-3a.5.5,0,0,1,1,0Zm2.25,0a.5.5,0,0,1-1,0v-3a.5.5,0,0,1,1,0Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.5,8.25h8.25a1.5,1.5,0,0,1,1.5,1.5v.38a.38.38,0,0,0,.37.37.38.38,0,0,1,.38.38v2.25a.38.38,0,0,1-.38.37.38.38,0,0,0-.37.38v.37a1.5,1.5,0,0,1-1.5,1.5H7.5A1.5,1.5,0,0,1,6,14.25V9.75a1.5,1.5,0,0,1,1.5-1.5'
    />
    <line x1='8.25' y1='10.5' x2='8.25' y2='13.5' />
    <line x1='10.5' y1='10.5' x2='10.5' y2='13.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.5,8.25h8.25a1.5,1.5,0,0,1,1.5,1.5v.38a.38.38,0,0,0,.37.37.38.38,0,0,1,.38.38v2.25a.38.38,0,0,1-.38.37.38.38,0,0,0-.37.38v.37a1.5,1.5,0,0,1-1.5,1.5H7.5A1.5,1.5,0,0,1,6,14.25V9.75a1.5,1.5,0,0,1,1.5-1.5'
    />
    <line x1='8.25' y1='10.5' x2='8.25' y2='13.5' />
    <line x1='10.5' y1='10.5' x2='10.5' y2='13.5' />
  </Fragment>
)

const Battery2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Battery2
