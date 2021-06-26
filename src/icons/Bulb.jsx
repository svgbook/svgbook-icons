import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6,12h.67M12,6v.67M17.33,12H18M7.73,7.73l.47.47m8.07-.47-.47.47'
    />
    <path
      fill='none'
      d='M10,14.67A3.34,3.34,0,1,1,14.67,14a3.54,3.54,0,0,1-.67.67,2.32,2.32,0,0,0-.67,2,1.33,1.33,0,1,1-2.66,0,2.32,2.32,0,0,0-.67-2'
    />
    <line x1='10.47' y1='15.33' x2='13.53' y2='15.33' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M6,12h.67M12,6v.67M17.33,12H18M7.73,7.73l.47.47m8.07-.47-.47.47'
    />
    <path d='M10,14.67A3.34,3.34,0,1,1,14.67,14a3.54,3.54,0,0,1-.67.67,2.32,2.32,0,0,0-.67,2,1.33,1.33,0,1,1-2.66,0,2.32,2.32,0,0,0-.67-2' />
    <line x1='10.47' y1='15.33' x2='13.53' y2='15.33' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M6,12h.67M12,6v.67M17.33,12H18M7.73,7.73l.47.47m8.07-.47-.47.47'
    />
    <path
      fillOpacity='.2'
      d='M10,14.67A3.34,3.34,0,1,1,14.67,14a3.54,3.54,0,0,1-.67.67,2.32,2.32,0,0,0-.67,2,1.33,1.33,0,1,1-2.66,0,2.32,2.32,0,0,0-.67-2'
    />
    <line x1='10.47' y1='15.33' x2='13.53' y2='15.33' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M6,12h.67M12,6v.67M17.33,12H18M7.73,7.73l.47.47m8.07-.47-.47.47'
    />
    <path
      fill={secondaryColor}
      d='M10,14.67A3.34,3.34,0,1,1,14.67,14a3.54,3.54,0,0,1-.67.67,2.32,2.32,0,0,0-.67,2,1.33,1.33,0,1,1-2.66,0,2.32,2.32,0,0,0-.67-2'
    />
    <line x1='10.47' y1='15.33' x2='13.53' y2='15.33' />
  </Fragment>
)

const Bulb = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Bulb
