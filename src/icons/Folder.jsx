import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.33,7H10l2,2h4.67A1.34,1.34,0,0,1,18,10.33v5.34A1.34,1.34,0,0,1,16.67,17H7.33A1.34,1.34,0,0,1,6,15.67V8.33A1.34,1.34,0,0,1,7.33,7'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M7.33,7H10l2,2h4.67A1.34,1.34,0,0,1,18,10.33v5.34A1.34,1.34,0,0,1,16.67,17H7.33A1.34,1.34,0,0,1,6,15.67V8.33A1.34,1.34,0,0,1,7.33,7' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.33,7H10l2,2h4.67A1.34,1.34,0,0,1,18,10.33v5.34A1.34,1.34,0,0,1,16.67,17H7.33A1.34,1.34,0,0,1,6,15.67V8.33A1.34,1.34,0,0,1,7.33,7'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.33,7H10l2,2h4.67A1.34,1.34,0,0,1,18,10.33v5.34A1.34,1.34,0,0,1,16.67,17H7.33A1.34,1.34,0,0,1,6,15.67V8.33A1.34,1.34,0,0,1,7.33,7'
    />
  </Fragment>
)

const Folder = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Folder
