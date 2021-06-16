import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.31,7.86a.69.69,0,0,1,.69.69v6.9a.69.69,0,0,1-.69.69H9.72L6.26,12.69a1,1,0,0,1,0-1.38L9.72,7.86Z'
    />
    <path fill='none' d='M11.79,10.62l2.76,2.76m0-2.76-2.76,2.76' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.31,7.36H9.72a.52.52,0,0,0-.36.14L5.89,11a1.53,1.53,0,0,0,0,2.06L9.36,16.5a.52.52,0,0,0,.36.14h7.59a1.19,1.19,0,0,0,1.19-1.19V8.55A1.19,1.19,0,0,0,17.31,7.36ZM14.9,13a.5.5,0,0,1-.35.85.51.51,0,0,1-.36-.15l-1-1-1,1a.5.5,0,0,1-.71,0,.5.5,0,0,1,0-.7l1-1-1-1a.5.5,0,0,1,0-.7.5.5,0,0,1,.71,0l1,1,1-1a.5.5,0,0,1,.71,0,.48.48,0,0,1,0,.7l-1,1Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.31,7.86a.69.69,0,0,1,.69.69v6.9a.69.69,0,0,1-.69.69H9.72L6.26,12.69a1,1,0,0,1,0-1.38L9.72,7.86Z'
    />
    <path fill='none' d='M11.79,10.62l2.76,2.76m0-2.76-2.76,2.76' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M17.31,7.86a.69.69,0,0,1,.69.69v6.9a.69.69,0,0,1-.69.69H9.72L6.26,12.69a1,1,0,0,1,0-1.38L9.72,7.86Z'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M11.79,10.62l2.76,2.76m0-2.76-2.76,2.76'
    />
  </Fragment>
)

const Backspace = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Backspace
