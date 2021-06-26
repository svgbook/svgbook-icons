import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,7.58H9.79v8.84H6Z' />
    <path fill='none' d='M11.68,10.11H18v4.42H11.68Z' />
    <path fill='none' d='M13,16.42h3.79' />
    <path fill='none' d='M14.84,14.53v1.89' />
    <path fill='none' d='M7.9,12.63h0' />
    <path fill='none' d='M7.9,14.53h0' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M9.79,7.08H6a.5.5,0,0,0-.5.5v8.84a.5.5,0,0,0,.5.5H9.79a.5.5,0,0,0,.5-.5V7.58A.5.5,0,0,0,9.79,7.08ZM7.9,15a.5.5,0,0,1-.5-.5.5.5,0,1,1,.5.5Zm.5-2.39a.51.51,0,0,1-.5.5.51.51,0,1,1,.5-.51Z'
    />
    <path
      stroke='none'
      d='M18.5,10.11v4.42a.5.5,0,0,1-.5.5H15.34v.89h1.4a.5.5,0,0,1,0,1H13a.5.5,0,0,1,0-1h1.39V15H11.68a.51.51,0,0,1-.5-.5V10.11a.5.5,0,0,1,.5-.5H18A.5.5,0,0,1,18.5,10.11Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M6,7.58H9.79v8.84H6Z' />
    <path fillOpacity='.2' d='M11.68,10.11H18v4.42H11.68Z' />
    <path fill='none' d='M13,16.42h3.79' />
    <path fill='none' d='M14.84,14.53v1.89' />
    <path fill='none' d='M7.9,12.63h0' />
    <path fill='none' d='M7.9,14.53h0' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M6,7.58H9.79v8.84H6Z' />
    <path fill={secondaryColor} d='M11.68,10.11H18v4.42H11.68Z' />
    <path fill='none' d='M13,16.42h3.79' />
    <path fill='none' d='M14.84,14.53v1.89' />
    <path fill='none' d='M7.9,12.63h0' />
    <path fill='none' d='M7.9,14.53h0' />
  </Fragment>
)

const PC = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default PC
