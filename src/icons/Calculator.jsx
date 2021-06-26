import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <rect fill='none' x='6.67' y='6' width='10.67' height='12' rx='1.33' />
    <rect fill='none' x='9.33' y='8.67' width='5.33' height='2' rx='0.67' />
    <line fill='none' x1='9.33' y1='13.33' x2='9.33' y2='13.34' />
    <line fill='none' x1='12' y1='13.33' x2='12' y2='13.34' />
    <line fill='none' x1='14.67' y1='13.33' x2='14.67' y2='13.34' />
    <line fill='none' x1='9.33' y1='15.33' x2='9.33' y2='15.34' />
    <line fill='none' x1='12' y1='15.33' x2='12' y2='15.34' />
    <line fill='none' x1='14.67' y1='15.33' x2='14.67' y2='15.34' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16,5.5H8A1.83,1.83,0,0,0,6.17,7.33v9.34A1.83,1.83,0,0,0,8,18.5h8a1.83,1.83,0,0,0,1.83-1.83V7.33A1.83,1.83,0,0,0,16,5.5ZM9.83,15.34a.5.5,0,0,1-.5.5.5.5,0,0,1,0-1,.49.49,0,0,1,.5.49Zm0-2a.5.5,0,0,1-.5.5.5.5,0,0,1,0-1,.49.49,0,0,1,.5.49Zm2.67,2a.5.5,0,1,1-.5-.5.5.5,0,0,1,.5.5Zm0-2a.5.5,0,1,1-.5-.5.5.5,0,0,1,.5.5Zm2.67,2a.5.5,0,0,1-.5.5.5.5,0,1,1,.5-.51Zm0-2a.5.5,0,0,1-.5.5.5.5,0,1,1,.5-.51Zm0-3.34A1.18,1.18,0,0,1,14,11.17H10A1.18,1.18,0,0,1,8.83,10V9.33A1.17,1.17,0,0,1,10,8.17h4a1.17,1.17,0,0,1,1.17,1.16Z'
    />
    <path
      stroke='none'
      d='M14.17,9.33V10a.18.18,0,0,1-.17.17H10A.18.18,0,0,1,9.83,10V9.33A.17.17,0,0,1,10,9.17h4A.17.17,0,0,1,14.17,9.33Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <rect fillOpacity='.2' x='6.67' y='6' width='10.67' height='12' rx='1.33' />
    <rect
      fillOpacity='.2'
      x='9.33'
      y='8.67'
      width='5.33'
      height='2'
      rx='0.67'
    />
    <line fill='none' x1='9.33' y1='13.33' x2='9.33' y2='13.34' />
    <line fill='none' x1='12' y1='13.33' x2='12' y2='13.34' />
    <line fill='none' x1='14.67' y1='13.33' x2='14.67' y2='13.34' />
    <line fill='none' x1='9.33' y1='15.33' x2='9.33' y2='15.34' />
    <line fill='none' x1='12' y1='15.33' x2='12' y2='15.34' />
    <line fill='none' x1='14.67' y1='15.33' x2='14.67' y2='15.34' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <rect
      fill={secondaryColor}
      x='6.67'
      y='6'
      width='10.67'
      height='12'
      rx='1.33'
    />
    <rect
      fill={secondaryColor}
      x='9.33'
      y='8.67'
      width='5.33'
      height='2'
      rx='0.67'
    />
    <line fill='none' x1='9.33' y1='13.33' x2='9.33' y2='13.34' />
    <line fill='none' x1='12' y1='13.33' x2='12' y2='13.34' />
    <line fill='none' x1='14.67' y1='13.33' x2='14.67' y2='13.34' />
    <line fill='none' x1='9.33' y1='15.33' x2='9.33' y2='15.34' />
    <line fill='none' x1='12' y1='15.33' x2='12' y2='15.34' />
    <line fill='none' x1='14.67' y1='15.33' x2='14.67' y2='15.34' />
  </Fragment>
)

const Calculator = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Calculator
