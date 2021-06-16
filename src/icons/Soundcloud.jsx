import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15.89,11.22h.78A2.44,2.44,0,0,1,19,13.56a2.42,2.42,0,0,1-2.33,2.33H12V8.11A3.54,3.54,0,0,1,15.89,11.22Z'
    />
    <line x1='9.67' y1='8.89' x2='9.67' y2='15.89' />
    <line x1='7.33' y1='15.89' x2='7.33' y2='10.44' />
    <line x1='5' y1='15.11' x2='5' y2='13.56' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M15.89,11.22h.78A2.44,2.44,0,0,1,19,13.56a2.42,2.42,0,0,1-2.33,2.33H12V8.11A3.54,3.54,0,0,1,15.89,11.22Z' />
    <line x1='9.67' y1='8.89' x2='9.67' y2='15.89' />
    <line x1='7.33' y1='15.89' x2='7.33' y2='10.44' />
    <line x1='5' y1='15.11' x2='5' y2='13.56' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M15.89,11.22h.78A2.44,2.44,0,0,1,19,13.56a2.42,2.42,0,0,1-2.33,2.33H12V8.11A3.54,3.54,0,0,1,15.89,11.22Z'
    />
    <line x1='9.67' y1='8.89' x2='9.67' y2='15.89' />
    <line x1='7.33' y1='15.89' x2='7.33' y2='10.44' />
    <line x1='5' y1='15.11' x2='5' y2='13.56' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M15.89,11.22h.78A2.44,2.44,0,0,1,19,13.56a2.42,2.42,0,0,1-2.33,2.33H12V8.11A3.54,3.54,0,0,1,15.89,11.22Z'
    />
    <line x1='9.67' y1='8.89' x2='9.67' y2='15.89' />
    <line x1='7.33' y1='15.89' x2='7.33' y2='10.44' />
    <line x1='5' y1='15.11' x2='5' y2='13.56' />
  </Fragment>
)

const Soundcloud = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Soundcloud
