import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M15.93,14.68a2.07,2.07,0,0,0,0-4.14h-.59A3,3,0,0,0,12.74,7,3.33,3.33,0,0,0,8.83,9.35,2.68,2.68,0,0,0,6,11.85a2.6,2.6,0,0,0,1.59,2.47'
    />
    <line x1='11.79' y1='11.72' x2='11.79' y2='17.04' />
    <polyline fill='none' points='10.02 15.27 11.79 17.04 13.56 15.27' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M15.93,14.68a2.07,2.07,0,0,0,0-4.14h-.59A3,3,0,0,0,12.74,7,3.33,3.33,0,0,0,8.83,9.35,2.68,2.68,0,0,0,6,11.85a2.6,2.6,0,0,0,1.59,2.47'
    />
    <line x1='11.79' y1='11.72' x2='11.79' y2='17.04' />
    <polyline fill='none' points='10.02 15.27 11.79 17.04 13.56 15.27' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      strokeOpacity='.2'
      d='M15.93,14.68a2.07,2.07,0,0,0,0-4.14h-.59A3,3,0,0,0,12.74,7,3.33,3.33,0,0,0,8.83,9.35,2.68,2.68,0,0,0,6,11.85a2.6,2.6,0,0,0,1.59,2.47'
    />
    <line x1='11.79' y1='11.72' x2='11.79' y2='17.04' />
    <polyline fill='none' points='10.02 15.27 11.79 17.04 13.56 15.27' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M15.93,14.68a2.07,2.07,0,0,0,0-4.14h-.59A3,3,0,0,0,12.74,7,3.33,3.33,0,0,0,8.83,9.35,2.68,2.68,0,0,0,6,11.85a2.6,2.6,0,0,0,1.59,2.47'
    />
    <line stroke={secondaryColor} x1='11.79' y1='11.72' x2='11.79' y2='17.04' />
    <polyline
      fill='none'
      stroke={secondaryColor}
      points='10.02 15.27 11.79 17.04 13.56 15.27'
    />
  </Fragment>
)

const CloudDownload = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default CloudDownload
