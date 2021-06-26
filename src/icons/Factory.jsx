import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6,18A31.54,31.54,0,0,0,7.41,9.53h4.24A31.54,31.54,0,0,0,13.06,18'
    />
    <path fill='none' d='M12,12.35h3.18A15.55,15.55,0,0,0,16.59,18' />
    <path
      fill='none'
      d='M9.53,6.71a1.76,1.76,0,0,1,2.82,0,1.78,1.78,0,0,0,2.83,0,1.76,1.76,0,0,1,2.82,0'
    />
    <line fill='none' x1='5.29' y1='18' x2='18.71' y2='18' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M6,18A31.54,31.54,0,0,0,7.41,9.53h4.24A31.54,31.54,0,0,0,13.06,18' />
    <path fill='none' d='M12,12.35h3.18A15.55,15.55,0,0,0,16.59,18' />
    <path
      fill='none'
      d='M9.53,6.71a1.76,1.76,0,0,1,2.82,0,1.78,1.78,0,0,0,2.83,0,1.76,1.76,0,0,1,2.82,0'
    />
    <line fill='none' x1='5.29' y1='18' x2='18.71' y2='18' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M6,18A31.54,31.54,0,0,0,7.41,9.53h4.24A31.54,31.54,0,0,0,13.06,18'
    />
    <path fill='none' d='M12,12.35h3.18A15.55,15.55,0,0,0,16.59,18' />
    <path
      fill='none'
      d='M9.53,6.71a1.76,1.76,0,0,1,2.82,0,1.78,1.78,0,0,0,2.83,0,1.76,1.76,0,0,1,2.82,0'
    />
    <line fill='none' x1='5.29' y1='18' x2='18.71' y2='18' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M6,18A31.54,31.54,0,0,0,7.41,9.53h4.24A31.54,31.54,0,0,0,13.06,18'
    />
    <path fill='none' d='M12,12.35h3.18A15.55,15.55,0,0,0,16.59,18' />
    <path
      fill='none'
      stroke={secondaryColor}
      d='M9.53,6.71a1.76,1.76,0,0,1,2.82,0,1.78,1.78,0,0,0,2.83,0,1.76,1.76,0,0,1,2.82,0'
    />
    <line fill='none' x1='5.29' y1='18' x2='18.71' y2='18' />
  </Fragment>
)

const Factory = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Factory
