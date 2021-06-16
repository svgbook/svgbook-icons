import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4'
    />
    <path fill='none' d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <line x1='10.67' y1='11.33' x2='13.33' y2='11.33' />
    <line x1='12' y1='10' x2='12' y2='12.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.58,14.9a2.17,2.17,0,0,1-1.08-1.57v-2A5.17,5.17,0,0,0,13.81,7,1.85,1.85,0,0,0,12,5.5,1.83,1.83,0,0,0,10.2,7a5.16,5.16,0,0,0-2.7,4.32v1.94A2.17,2.17,0,0,1,6.42,14.9a.5.5,0,0,0,.25.93H9.5V16a2.5,2.5,0,0,0,5,0v-.17h2.83a.5.5,0,0,0,.49-.37A.49.49,0,0,0,17.58,14.9Zm-4.25-3.07H12.5v.84a.5.5,0,1,1-1,0v-.84h-.83a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h.83V10a.5.5,0,0,1,1,0v.83h.83a.5.5,0,0,1,.5.5A.5.5,0,0,1,13.33,11.83Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4'
    />
    <path fillOpacity='.2' d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <line x1='10.67' y1='11.33' x2='13.33' y2='11.33' />
    <line x1='12' y1='10' x2='12' y2='12.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M10,15.33V16a2,2,0,0,0,4,0v-.67' />
    <path
      fill={secondaryColor}
      d='M10.67,7.33a1.33,1.33,0,1,1,2.66,0,4.68,4.68,0,0,1,2.67,4v2a2.66,2.66,0,0,0,1.33,2H6.67a2.66,2.66,0,0,0,1.33-2v-2a4.68,4.68,0,0,1,2.67-4'
    />
    <line x1='10.67' y1='11.33' x2='13.33' y2='11.33' />
    <line x1='12' y1='10' x2='12' y2='12.67' />
  </Fragment>
)

const BellPlus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default BellPlus
