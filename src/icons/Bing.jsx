import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.33,6,10,7v8l4-1.67-1.33-.66L12,10l4.67,1.67v3L10,18,7.33,16.67Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M7.33,6,10,7v8l4-1.67-1.33-.66L12,10l4.67,1.67v3L10,18,7.33,16.67Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.33,6,10,7v8l4-1.67-1.33-.66L12,10l4.67,1.67v3L10,18,7.33,16.67Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.33,6,10,7v8l4-1.67-1.33-.66L12,10l4.67,1.67v3L10,18,7.33,16.67Z'
    />
  </Fragment>
)

const Bing = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bing
