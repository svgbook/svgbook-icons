import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.49,11v3a4,4,0,0,1-4,4H12.3A4,4,0,0,1,9,16.2L8.82,16c-.2-.32-.93-1.59-2.18-3.82A1,1,0,0,1,7,10.83,1.24,1.24,0,0,1,8.51,11l1,1V10.33a1,1,0,0,1,2,0V9.67a1,1,0,0,1,2,0V7a1,1,0,0,1,2,0v4a1,1,0,1,1,2,0Z'
    />
    <line x1='11.49' y1='11' x2='11.49' y2='10.33' />
    <line x1='15.49' y1='11.33' x2='15.49' y2='11' />
    <line x1='13.49' y1='11.33' x2='13.49' y2='9.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M17.49,11v3a4,4,0,0,1-4,4H12.3A4,4,0,0,1,9,16.2L8.82,16c-.2-.32-.93-1.59-2.18-3.82A1,1,0,0,1,7,10.83,1.24,1.24,0,0,1,8.51,11l1,1V10.33a1,1,0,0,1,2,0V9.67a1,1,0,0,1,2,0V7a1,1,0,0,1,2,0v4a1,1,0,1,1,2,0Z' />
    <line x1='11.49' y1='11' x2='11.49' y2='10.33' />
    <line x1='15.49' y1='11.33' x2='15.49' y2='11' />
    <line x1='13.49' y1='11.33' x2='13.49' y2='9.67' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.49,11v3a4,4,0,0,1-4,4H12.3A4,4,0,0,1,9,16.2L8.82,16c-.2-.32-.93-1.59-2.18-3.82A1,1,0,0,1,7,10.83,1.24,1.24,0,0,1,8.51,11l1,1V10.33a1,1,0,0,1,2,0V9.67a1,1,0,0,1,2,0V7a1,1,0,0,1,2,0v4a1,1,0,1,1,2,0Z'
    />
    <line x1='11.49' y1='11' x2='11.49' y2='10.33' />
    <line x1='15.49' y1='11.33' x2='15.49' y2='11' />
    <line x1='13.49' y1='11.33' x2='13.49' y2='9.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M17.49,11v3a4,4,0,0,1-4,4H12.3A4,4,0,0,1,9,16.2L8.82,16c-.2-.32-.93-1.59-2.18-3.82A1,1,0,0,1,7,10.83,1.24,1.24,0,0,1,8.51,11l1,1V10.33a1,1,0,0,1,2,0V9.67a1,1,0,0,1,2,0V7a1,1,0,0,1,2,0v4a1,1,0,1,1,2,0Z'
    />
    <line x1='11.49' y1='11' x2='11.49' y2='10.33' />
    <line x1='15.49' y1='11.33' x2='15.49' y2='11' />
    <line x1='13.49' y1='11.33' x2='13.49' y2='9.67' />
  </Fragment>
)

const HandRingFinger = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default HandRingFinger
