import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M7.33,18V8.67L12.67,6V18' />
    <path fill='none' d='M16.67,18V11.33l-4-2.66' />
    <line x1='6' y1='18' x2='18' y2='18' />
    <line x1='10' y1='10' x2='10' y2='10.01' />
    <line x1='10' y1='12' x2='10' y2='12.01' />
    <line x1='10' y1='14' x2='10' y2='14.01' />
    <line x1='10' y1='16' x2='10' y2='16.01' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18,17.5h-.83V11.33a.5.5,0,0,0-.23-.41L13.17,8.4V6a.49.49,0,0,0-.24-.42.5.5,0,0,0-.49,0L7.11,8.22a.51.51,0,0,0-.28.45V17.5H6a.5.5,0,0,0,0,1H18a.5.5,0,0,0,0-1ZM10.5,16a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm0-2a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm0-2a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm0-2A.5.5,0,1,1,10,9.5a.5.5,0,0,1,.5.5Zm5.67,7.49h-3V9.6l3,2Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M7.33,18V8.67L12.67,6V18' />
    <line x1='6' y1='18' x2='18' y2='18' />
    <path fill='none' d='M16.67,18V11.33l-4-2.66' />
    <line x1='10' y1='10' x2='10' y2='10.01' />
    <line x1='10' y1='12' x2='10' y2='12.01' />
    <line x1='10' y1='14' x2='10' y2='14.01' />
    <line x1='10' y1='16' x2='10' y2='16.01' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M7.33,18V8.67L12.67,6V18' />
    <line x1='6' y1='18' x2='18' y2='18' />
    <path fill='none' d='M16.67,18V11.33l-4-2.66' />
    <line x1='10' y1='10' x2='10' y2='10.01' />
    <line x1='10' y1='12' x2='10' y2='12.01' />
    <line x1='10' y1='14' x2='10' y2='14.01' />
    <line x1='10' y1='16' x2='10' y2='16.01' />
  </Fragment>
)

const Skyscraper = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Skyscraper
