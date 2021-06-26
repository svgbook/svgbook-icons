import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6.75,12.75h10.5L13.88,9.38,17.25,6H6.75V18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M6.75,12.75h10.5L13.88,9.38,17.25,6H6.75V18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M6.75,12.75h10.5L13.88,9.38,17.25,6H6.75V18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M6.75,12.75h10.5L13.88,9.38,17.25,6H6.75V18'
    />
  </Fragment>
)

const Flag2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Flag2
