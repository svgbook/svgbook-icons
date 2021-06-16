import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='13.34' y1='12' x2='13.34' y2='12.01' />
    <line x1='10.66' y1='12' x2='10.66' y2='12.01' />
    <line x1='12' y1='10.66' x2='12' y2='10.67' />
    <line x1='12' y1='13.34' x2='12' y2='13.35' />
    <path
      fill='none'
      d='M7,12.34,12.34,7A3.32,3.32,0,0,1,17,11.66L11.67,17A3.32,3.32,0,0,1,7,12.34'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.38,6.62a3.82,3.82,0,0,0-5.4,0L6.62,12a3.82,3.82,0,0,0,0,5.4,3.81,3.81,0,0,0,5.4,0L17.38,12A3.82,3.82,0,0,0,17.38,6.62ZM11.16,12a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm1.34,1.34a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm0-2.68a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5ZM13.84,12a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7,12.34,12.34,7A3.32,3.32,0,0,1,17,11.66L11.67,17A3.32,3.32,0,0,1,7,12.34'
    />
    <line x1='13.34' y1='12' x2='13.34' y2='12.01' />
    <line x1='10.66' y1='12' x2='10.66' y2='12.01' />
    <line x1='12' y1='10.66' x2='12' y2='10.67' />
    <line x1='12' y1='13.34' x2='12' y2='13.35' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7,12.34,12.34,7A3.32,3.32,0,0,1,17,11.66L11.67,17A3.32,3.32,0,0,1,7,12.34'
    />
    <line x1='13.34' y1='12' x2='13.34' y2='12.01' />
    <line x1='10.66' y1='12' x2='10.66' y2='12.01' />
    <line x1='12' y1='10.66' x2='12' y2='10.67' />
    <line x1='12' y1='13.34' x2='12' y2='13.35' />
  </Fragment>
)

const Bandage = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bandage
