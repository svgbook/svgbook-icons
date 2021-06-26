import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,18h4.67V16a1.33,1.33,0,0,1,2.66,0v2H18' />
    <line x1='8' y1='18' x2='8' y2='12' />
    <line x1='16' y1='18' x2='16' y2='12' />
    <path
      fill='none'
      d='M8,12h8a2,2,0,0,0,2-2,5.94,5.94,0,0,1-6-4,5.94,5.94,0,0,1-6,4,2,2,0,0,0,2,2'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M6,18h4.67V16a1.33,1.33,0,0,1,2.66,0v2H18' />
    <line x1='8' y1='18' x2='8' y2='12' />
    <line x1='16' y1='18' x2='16' y2='12' />
    <path d='M8,12h8a2,2,0,0,0,2-2,5.94,5.94,0,0,1-6-4,5.94,5.94,0,0,1-6,4,2,2,0,0,0,2,2' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,18h4.67V16a1.33,1.33,0,0,1,2.66,0v2H18' />
    <line x1='8' y1='18' x2='8' y2='12' />
    <line x1='16' y1='18' x2='16' y2='12' />
    <path
      fillOpacity='.2'
      d='M8,12h8a2,2,0,0,0,2-2,5.94,5.94,0,0,1-6-4,5.94,5.94,0,0,1-6,4,2,2,0,0,0,2,2'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill='none' d='M6,18h4.67V16a1.33,1.33,0,0,1,2.66,0v2H18' />
    <line x1='8' y1='18' x2='8' y2='12' />
    <line x1='16' y1='18' x2='16' y2='12' />
    <path
      fill={secondaryColor}
      d='M8,12h8a2,2,0,0,0,2-2,5.94,5.94,0,0,1-6-4,5.94,5.94,0,0,1-6,4,2,2,0,0,0,2,2'
    />
  </Fragment>
)

const Pavilon = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Pavilon
