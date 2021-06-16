import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='12' y1='12' x2='12' y2='12.01' />
    <path
      fill='none'
      d='M17.57,6.43c-1.23-1.23-4.72.27-7.8,3.34s-4.57,6.57-3.34,7.8,4.72-.27,7.8-3.34,4.57-6.57,3.34-7.8'
    />
    <path
      fill='none'
      d='M6.43,6.43c-1.23,1.23.27,4.72,3.34,7.8s6.57,4.57,7.8,3.34-.27-4.72-3.34-7.8S7.66,5.2,6.43,6.43'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='12' y1='12' x2='12' y2='12.01' />
    <path
      fill='none'
      d='M17.57,6.43c-1.23-1.23-4.72.27-7.8,3.34s-4.57,6.57-3.34,7.8,4.72-.27,7.8-3.34,4.57-6.57,3.34-7.8'
    />
    <path
      fill='none'
      d='M6.43,6.43c-1.23,1.23.27,4.72,3.34,7.8s6.57,4.57,7.8,3.34-.27-4.72-3.34-7.8S7.66,5.2,6.43,6.43'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <line x1='12' y1='12' x2='12' y2='12.01' />
    <path
      fillOpacity='.2'
      d='M17.57,6.43c-1.23-1.23-4.72.27-7.8,3.34s-4.57,6.57-3.34,7.8,4.72-.27,7.8-3.34,4.57-6.57,3.34-7.8'
    />
    <path
      fillOpacity='.2'
      d='M6.43,6.43c-1.23,1.23.27,4.72,3.34,7.8s6.57,4.57,7.8,3.34-.27-4.72-3.34-7.8S7.66,5.2,6.43,6.43'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='12' y1='12' x2='12' y2='12.01' />
    <path
      fill='none'
      d='M17.57,6.43c-1.23-1.23-4.72.27-7.8,3.34s-4.57,6.57-3.34,7.8,4.72-.27,7.8-3.34,4.57-6.57,3.34-7.8'
    />
    <path
      fill='none'
      d='M6.43,6.43c-1.23,1.23.27,4.72,3.34,7.8s6.57,4.57,7.8,3.34-.27-4.72-3.34-7.8S7.66,5.2,6.43,6.43'
    />
  </Fragment>
)

const Atom = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Atom
