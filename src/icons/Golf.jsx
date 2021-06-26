import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M11,16V6l4.67,2.67L11,11.33' />
    <path
      fill='none'
      d='M9,15.78a1.13,1.13,0,0,0-.67.89C8.33,17.4,9.53,18,11,18s2.67-.6,2.67-1.33a1.13,1.13,0,0,0-.67-.89'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M11,16V6l4.67,2.67L11,11.33' />
    <path
      fill='none'
      d='M9,15.78a1.13,1.13,0,0,0-.67.89C8.33,17.4,9.53,18,11,18s2.67-.6,2.67-1.33a1.13,1.13,0,0,0-.67-.89'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M11,16V6l4.67,2.67L11,11.33' />
    <path
      fill='none'
      d='M9,15.78a1.13,1.13,0,0,0-.67.89C8.33,17.4,9.53,18,11,18s2.67-.6,2.67-1.33a1.13,1.13,0,0,0-.67-.89'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M11,16V6l4.67,2.67L11,11.33' />
    <path
      fill='none'
      d='M9,15.78a1.13,1.13,0,0,0-.67.89C8.33,17.4,9.53,18,11,18s2.67-.6,2.67-1.33a1.13,1.13,0,0,0-.67-.89'
    />
  </Fragment>
)

const Golf = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Golf
