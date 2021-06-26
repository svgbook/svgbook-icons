import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M14.63,16.88,12.38,18l.37-2.62-1.5-1.5,2.25-.38,1.13-2.25,1.12,2.25,2.25.38-1.5,1.5L16.88,18Z'
    />
    <line x1='6' y1='6' x2='11.25' y2='11.25' />
    <line x1='9.75' y1='6' x2='12.38' y2='8.63' />
    <line x1='6' y1='9.75' x2='8.63' y2='12.38' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M14.63,16.88,12.38,18l.37-2.62-1.5-1.5,2.25-.38,1.13-2.25,1.12,2.25,2.25.38-1.5,1.5L16.88,18Z' />
    <line x1='6' y1='6' x2='11.25' y2='11.25' />
    <line x1='9.75' y1='6' x2='12.38' y2='8.63' />
    <line x1='6' y1='9.75' x2='8.63' y2='12.38' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M14.63,16.88,12.38,18l.37-2.62-1.5-1.5,2.25-.38,1.13-2.25,1.12,2.25,2.25.38-1.5,1.5L16.88,18Z'
    />
    <line x1='6' y1='6' x2='11.25' y2='11.25' />
    <line x1='9.75' y1='6' x2='12.38' y2='8.63' />
    <line x1='6' y1='9.75' x2='8.63' y2='12.38' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M14.63,16.88,12.38,18l.37-2.62-1.5-1.5,2.25-.38,1.13-2.25,1.12,2.25,2.25.38-1.5,1.5L16.88,18Z'
    />
    <line x1='6' y1='6' x2='11.25' y2='11.25' />
    <line x1='9.75' y1='6' x2='12.38' y2='8.63' />
    <line x1='6' y1='9.75' x2='8.63' y2='12.38' />
  </Fragment>
)

const comet = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default comet
