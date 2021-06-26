import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.79,7.26h6.32l1.26,1.27L16.11,9.79H9.79a.63.63,0,0,1-.63-.63V7.89a.63.63,0,0,1,.63-.63'
    />
    <path
      fill='none'
      d='M12.32,12.32H7.89L6.63,13.58l1.26,1.26h4.43a.63.63,0,0,0,.63-.63V13a.63.63,0,0,0-.63-.63'
    />
    <line x1='11.68' y1='18' x2='11.68' y2='14.84' />
    <line x1='11.68' y1='12.32' x2='11.68' y2='9.79' />
    <line x1='11.68' y1='7.26' x2='11.68' y2='6' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M9.79,7.26h6.32l1.26,1.27L16.11,9.79H9.79a.63.63,0,0,1-.63-.63V7.89a.63.63,0,0,1,.63-.63' />
    <path d='M12.32,12.32H7.89L6.63,13.58l1.26,1.26h4.43a.63.63,0,0,0,.63-.63V13a.63.63,0,0,0-.63-.63' />
    <line x1='11.68' y1='18' x2='11.68' y2='14.84' />
    <line x1='11.68' y1='12.32' x2='11.68' y2='9.79' />
    <line x1='11.68' y1='7.26' x2='11.68' y2='6' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M9.79,7.26h6.32l1.26,1.27L16.11,9.79H9.79a.63.63,0,0,1-.63-.63V7.89a.63.63,0,0,1,.63-.63'
    />
    <path
      fillOpacity='.2'
      d='M12.32,12.32H7.89L6.63,13.58l1.26,1.26h4.43a.63.63,0,0,0,.63-.63V13a.63.63,0,0,0-.63-.63'
    />
    <line x1='11.68' y1='18' x2='11.68' y2='14.84' />
    <line x1='11.68' y1='12.32' x2='11.68' y2='9.79' />
    <line x1='11.68' y1='7.26' x2='11.68' y2='6' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line x1='11.68' y1='18' x2='11.68' y2='14.84' />
    <line x1='11.68' y1='12.32' x2='11.68' y2='9.79' />
    <line x1='11.68' y1='7.26' x2='11.68' y2='6' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M9.79,7.26h6.32l1.26,1.27L16.11,9.79H9.79a.63.63,0,0,1-.63-.63V7.89a.63.63,0,0,1,.63-.63'
    />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M12.32,12.32H7.89L6.63,13.58l1.26,1.26h4.43a.63.63,0,0,0,.63-.63V13a.63.63,0,0,0-.63-.63'
    />
  </Fragment>
)

const Directions = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Directions
