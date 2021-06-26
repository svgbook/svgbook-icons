import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M17.79,11.19l-1.66,1.66L11.61,8.33l1.66-1.67a.71.71,0,0,1,1,0l3.53,3.53A.7.7,0,0,1,17.79,11.19Z'
    />
    <path
      fill='none'
      d='M16.13,12.85l-4.69,4.69H9L6.21,14.72a.7.7,0,0,1,0-1l5.4-5.39Z'
    />
    <line x1='16.8' y1='17.54' x2='11.44' y2='17.54' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M17.79,11.19l-1.66,1.66L11.61,8.33l1.66-1.67a.71.71,0,0,1,1,0l3.53,3.53A.7.7,0,0,1,17.79,11.19Z' />
    <path
      fill='none'
      d='M16.13,12.85l-4.69,4.69H9L6.21,14.72a.7.7,0,0,1,0-1l5.4-5.39Z'
    />
    <line x1='16.8' y1='17.54' x2='11.44' y2='17.54' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M17.79,11.19l-1.66,1.66L11.61,8.33l1.66-1.67a.71.71,0,0,1,1,0l3.53,3.53A.7.7,0,0,1,17.79,11.19Z'
    />
    <path
      fillOpacity='.2'
      d='M16.13,12.85l-4.69,4.69H9L6.21,14.72a.7.7,0,0,1,0-1l5.4-5.39Z'
    />
    <line x1='16.8' y1='17.54' x2='11.44' y2='17.54' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1='16.8' y1='17.54' x2='11.44' y2='17.54' />
    <path
      fill={secondaryColor}
      d='M17.79,11.19l-1.66,1.66L11.61,8.33l1.66-1.67a.71.71,0,0,1,1,0l3.53,3.53A.7.7,0,0,1,17.79,11.19Z'
    />
    <path
      fill='none'
      d='M16.13,12.85l-4.69,4.69H9L6.21,14.72a.7.7,0,0,1,0-1l5.4-5.39Z'
    />
  </Fragment>
)

const Eraser = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Eraser
