import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M13.5,6h3a.76.76,0,0,1,.75.75v10.5a.76.76,0,0,1-.75.75h-3a.76.76,0,0,1-.75-.75V6.75A.76.76,0,0,1,13.5,6Z'
    />
    <line x1='6.75' y1='12' x2='9.75' y2='12' />
    <line x1='8.25' y1='10.5' x2='8.25' y2='13.5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M13.5,6h3a.76.76,0,0,1,.75.75v10.5a.76.76,0,0,1-.75.75h-3a.76.76,0,0,1-.75-.75V6.75A.76.76,0,0,1,13.5,6Z' />
    <line x1='6.75' y1='12' x2='9.75' y2='12' />
    <line x1='8.25' y1='10.5' x2='8.25' y2='13.5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M13.5,6h3a.76.76,0,0,1,.75.75v10.5a.76.76,0,0,1-.75.75h-3a.76.76,0,0,1-.75-.75V6.75A.76.76,0,0,1,13.5,6Z'
    />
    <line x1='6.75' y1='12' x2='9.75' y2='12' />
    <line x1='8.25' y1='10.5' x2='8.25' y2='13.5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M13.5,6h3a.76.76,0,0,1,.75.75v10.5a.76.76,0,0,1-.75.75h-3a.76.76,0,0,1-.75-.75V6.75A.76.76,0,0,1,13.5,6Z'
    />
    <line x1='6.75' y1='12' x2='9.75' y2='12' />
    <line x1='8.25' y1='10.5' x2='8.25' y2='13.5' />
  </Fragment>
)

const ColumnInsertLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ColumnInsertLeft
