import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M7.77,7.76h2.47L12,6l1.76,1.76h2.48v2.48L18,12l-1.76,1.76v2.48H13.76L12,18l-1.76-1.76H7.77V13.76L6,12l1.77-1.76Z'
    />
    <circle fill='none' cx='12' cy='12' r='2.12' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M18.35,11.65,16.73,10V7.77a.5.5,0,0,0-.5-.5H14L12.35,5.65a.48.48,0,0,0-.7,0L10,7.27H7.76a.5.5,0,0,0-.5.5V10L5.65,11.65a.48.48,0,0,0,0,.7L7.26,14v2.27a.51.51,0,0,0,.5.5H10l1.62,1.61a.48.48,0,0,0,.7,0L14,16.74h2.26a.5.5,0,0,0,.5-.5V14l1.62-1.62A.48.48,0,0,0,18.35,11.65Zm-6.35,3A2.62,2.62,0,1,1,14.62,12,2.63,2.63,0,0,1,12,14.62Z'
    />
    <circle stroke='none' cx='12' cy='12' r='1.62' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fillOpacity='.2'
      d='M7.77,7.76h2.47L12,6l1.76,1.76h2.48v2.48L18,12l-1.76,1.76v2.48H13.76L12,18l-1.76-1.76H7.77V13.76L6,12l1.77-1.76Z'
    />
    <circle fill='none' cx='12' cy='12' r='2.12' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d='M7.77,7.76h2.47L12,6l1.76,1.76h2.48v2.48L18,12l-1.76,1.76v2.48H13.76L12,18l-1.76-1.76H7.77V13.76L6,12l1.77-1.76Z'
    />
    <circle fill='none' cx='12' cy='12' r='2.12' />
  </Fragment>
)

const Brightness2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Brightness2
