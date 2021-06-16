import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6,8.33v7.34M6,13H18m0,2.67V10.33A1.34,1.34,0,0,0,16.67,9H11.33v4'
    />
    <circle fill='none' cx='8.67' cy='10.33' r='0.67' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M16.67,8.5H11.33a.5.5,0,0,0-.5.5v3.5H6.5V8.33a.5.5,0,0,0-1,0v7.34a.5.5,0,0,0,1,0V13.5h11v2.17a.5.5,0,1,0,1,0V10.33A1.83,1.83,0,0,0,16.67,8.5Zm.83,4H11.83v-3h4.84a.83.83,0,0,1,.83.83Z'
    />
    <path d='M17.5,10.33V12.5H11.83v-3h4.84A.83.83,0,0,1,17.5,10.33Z' />
    <circle cx='8.67' cy='10.33' r='0.67' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      stroke='none'
      d='M16.67,8.5H11.33a.5.5,0,0,0-.5.5v3.5H6.5V8.33a.5.5,0,0,0-1,0v7.34a.5.5,0,0,0,1,0V13.5h11v2.17a.5.5,0,1,0,1,0V10.33A1.83,1.83,0,0,0,16.67,8.5Zm.83,4H11.83v-3h4.84a.83.83,0,0,1,.83.83Z'
    />
    <path
      fillOpacity='.2'
      stroke='none'
      d='M17.5,10.33V12.5H11.83v-3h4.84A.83.83,0,0,1,17.5,10.33Z'
    />
    <circle fillOpacity='.2' cx='8.67' cy='10.33' r='0.67' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      stroke='none'
      d='M16.67,8.5H11.33a.5.5,0,0,0-.5.5v3.5H6.5V8.33a.5.5,0,0,0-1,0v7.34a.5.5,0,0,0,1,0V13.5h11v2.17a.5.5,0,1,0,1,0V10.33A1.83,1.83,0,0,0,16.67,8.5Zm.83,4H11.83v-3h4.84a.83.83,0,0,1,.83.83Z'
    />
    <path
      fill={secondaryColor}
      stroke='none'
      d='M17.5,10.33V12.5H11.83v-3h4.84A.83.83,0,0,1,17.5,10.33Z'
    />
    <circle
      fill={secondaryColor}
      stroke={secondaryColor}
      cx='8.67'
      cy='10.33'
      r='0.67'
    />
  </Fragment>
)

const Bed = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bed
