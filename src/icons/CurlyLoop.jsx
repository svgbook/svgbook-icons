import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M18,9.33c-2.67,0-4.67,1.34-4.67,3.34a2,2,0,0,0,4,0c0-2-1.66-3.34-5.33-3.34s-5.33,1.34-5.33,3.34a2,2,0,0,0,4,0c0-2-2-3.34-4.67-3.34'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M18,9.33c-2.67,0-4.67,1.34-4.67,3.34a2,2,0,0,0,4,0c0-2-1.66-3.34-5.33-3.34s-5.33,1.34-5.33,3.34a2,2,0,0,0,4,0c0-2-2-3.34-4.67-3.34'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M18,9.33c-2.67,0-4.67,1.34-4.67,3.34a2,2,0,0,0,4,0c0-2-1.66-3.34-5.33-3.34s-5.33,1.34-5.33,3.34a2,2,0,0,0,4,0c0-2-2-3.34-4.67-3.34'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M18,9.33c-2.67,0-4.67,1.34-4.67,3.34a2,2,0,0,0,4,0c0-2-1.66-3.34-5.33-3.34s-5.33,1.34-5.33,3.34a2,2,0,0,0,4,0c0-2-2-3.34-4.67-3.34'
    />
  </Fragment>
)

const CurlyLoop = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CurlyLoop
