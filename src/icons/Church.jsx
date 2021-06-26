import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <line x1='6' y1='18' x2='18' y2='18' />
    <path fill='none' d='M10.67,18V15.33a1.33,1.33,0,1,1,2.66,0V18' />
    <line x1='10.67' y1='7.33' x2='13.33' y2='7.33' />
    <line x1='12' y1='6' x2='12' y2='9.33' />
    <path
      fill='none'
      d='M8,18V13.33M6.67,14.67,12,9.33l5.33,5.34M16,13.33V18'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <line x1='18' y1='18' x2='16' y2='18' />
    <line x1='13.33' y1='18' x2='10.67' y2='18' />
    <line x1='8' y1='18' x2='6' y2='18' />
    <line x1='10.67' y1='7.33' x2='13.33' y2='7.33' />
    <line x1='12' y1='6' x2='12' y2='9.33' />
    <path d='M8,13.34,6.67,14.67m10.66,0L16,13.34' />
    <path d='M16,13.33V18H13.33V15.33a1.33,1.33,0,1,0-2.66,0V18H8V13.33l4-4Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M16,13.33V18H13.33V15.33a1.33,1.33,0,1,0-2.66,0V18H8V13.33l4-4Z'
    />
    <line x1='18' y1='18' x2='16' y2='18' />
    <line x1='13.33' y1='18' x2='10.67' y2='18' />
    <line x1='8' y1='18' x2='6' y2='18' />
    <line x1='10.67' y1='7.33' x2='13.33' y2='7.33' />
    <line x1='12' y1='6' x2='12' y2='9.33' />
    <path d='M8,13.34,6.67,14.67m10.66,0L16,13.34' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M16,13.33V18H13.33V15.33a1.33,1.33,0,1,0-2.66,0V18H8V13.33l4-4Z'
    />
    <line x1='18' y1='18' x2='16' y2='18' />
    <line x1='13.33' y1='18' x2='10.67' y2='18' />
    <line x1='8' y1='18' x2='6' y2='18' />
    <line x1='10.67' y1='7.33' x2='13.33' y2='7.33' />
    <line x1='12' y1='6' x2='12' y2='9.33' />
    <path d='M8,13.34,6.67,14.67m10.66,0L16,13.34' />
  </Fragment>
)

const Church = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Church
