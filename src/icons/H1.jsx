import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M18,16.5v-6L16.5,12' />
    <path fill='none' d='M6.75,7.5v9' />
    <path fill='none' d='M12.75,7.5v9' />
    <path fill='none' d='M12,16.5h1.5' />
    <path fill='none' d='M6,16.5H7.5' />
    <path fill='none' d='M6.75,12h6' />
    <path fill='none' d='M6,7.5H7.5' />
    <path fill='none' d='M12,7.5h1.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M18,16.5v-6L16.5,12' />
    <path fill='none' d='M6.75,7.5v9' />
    <path fill='none' d='M12.75,7.5v9' />
    <path fill='none' d='M12,16.5h1.5' />
    <path fill='none' d='M6,16.5H7.5' />
    <path fill='none' d='M6.75,12h6' />
    <path fill='none' d='M6,7.5H7.5' />
    <path fill='none' d='M12,7.5h1.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' strokeOpacity='.2' d='M18,16.5v-6L16.5,12' />
    <path fill='none' d='M6.75,7.5v9' />
    <path fill='none' d='M12.75,7.5v9' />
    <path fill='none' d='M12,16.5h1.5' />
    <path fill='none' d='M6,16.5H7.5' />
    <path fill='none' d='M6.75,12h6' />
    <path fill='none' d='M6,7.5H7.5' />
    <path fill='none' d='M12,7.5h1.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' stroke={secondaryColor} d='M18,16.5v-6L16.5,12' />
    <path fill='none' d='M6.75,7.5v9' />
    <path fill='none' d='M12.75,7.5v9' />
    <path fill='none' d='M12,16.5h1.5' />
    <path fill='none' d='M6,16.5H7.5' />
    <path fill='none' d='M6.75,12h6' />
    <path fill='none' d='M6,7.5H7.5' />
    <path fill='none' d='M12,7.5h1.5' />
  </Fragment>
)

const H1 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default H1
