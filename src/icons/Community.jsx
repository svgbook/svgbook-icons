import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M9.33,10l3.34,3.33V18H9.33V15.33m0,2.67H6V13.33L9.33,10m.67.67v-4A.67.67,0,0,1,10.67,6h6.66a.67.67,0,0,1,.67.67V18H12.67'
    />
    <line x1='12.67' y1='8.67' x2='12.67' y2='8.67' />
    <line x1='15.33' y1='8.67' x2='15.33' y2='8.67' />
    <line x1='15.33' y1='11.33' x2='15.33' y2='11.34' />
    <line x1='15.33' y1='14' x2='15.33' y2='14.01' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M9.33,10l3.34,3.33V18H9.33V15.33m0,2.67H6V13.33L9.33,10m.67.67v-4A.67.67,0,0,1,10.67,6h6.66a.67.67,0,0,1,.67.67V18H12.67'
    />
    <line x1='12.67' y1='8.67' x2='12.67' y2='8.67' />
    <line x1='15.33' y1='8.67' x2='15.33' y2='8.67' />
    <line x1='15.33' y1='11.33' x2='15.33' y2='11.34' />
    <line x1='15.33' y1='14' x2='15.33' y2='14.01' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M9.33,10l3.34,3.33V18H9.33V15.33m0,2.67H6V13.33L9.33,10m.67.67v-4A.67.67,0,0,1,10.67,6h6.66a.67.67,0,0,1,.67.67V18H12.67'
    />
    <line x1='12.67' y1='8.67' x2='12.67' y2='8.67' />
    <line x1='15.33' y1='8.67' x2='15.33' y2='8.67' />
    <line x1='15.33' y1='11.33' x2='15.33' y2='11.34' />
    <line x1='15.33' y1='14' x2='15.33' y2='14.01' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M9.33,10l3.34,3.33V18H9.33V15.33m0,2.67H6V13.33L9.33,10m.67.67v-4A.67.67,0,0,1,10.67,6h6.66a.67.67,0,0,1,.67.67V18H12.67'
    />
    <line x1='12.67' y1='8.67' x2='12.67' y2='8.67' />
    <line x1='15.33' y1='8.67' x2='15.33' y2='8.67' />
    <line x1='15.33' y1='11.33' x2='15.33' y2='11.34' />
    <line x1='15.33' y1='14' x2='15.33' y2='14.01' />
  </Fragment>
)

const Community = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Community
