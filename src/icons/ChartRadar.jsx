import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M12,6.32l6,4.42-2.21,6.94H8.21L6,10.74Z' />
    <path fill='none' d='M12,9.16l3.47,2.52-1.58,3.48H9.79L8.53,11.68Z' />
    <path fill='none' d='M6,10.74l6,1.89,6-1.89' />
    <path fill='none' d='M12,6.32v6.31l3.79,5' />
    <path fill='none' d='M8.21,17.68l3.79-5' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path fill='none' d='M12,6.32l6,4.42-2.21,6.94H8.21L6,10.74Z' />
    <path fill='none' d='M12,9.16l3.47,2.52-1.58,3.48H9.79L8.53,11.68Z' />
    <path fill='none' d='M6,10.74l6,1.89,6-1.89' />
    <path fill='none' d='M12,6.32v6.31l3.79,5' />
    <path fill='none' d='M8.21,17.68l3.79-5' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M12,6.32l6,4.42-2.21,6.94H8.21L6,10.74Z' />
    <path fill='none' d='M12,9.16l3.47,2.52-1.58,3.48H9.79L8.53,11.68Z' />
    <path fill='none' d='M6,10.74l6,1.89,6-1.89' />
    <path fill='none' d='M12,6.32v6.31l3.79,5' />
    <path fill='none' d='M8.21,17.68l3.79-5' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M12,6.32l6,4.42-2.21,6.94H8.21L6,10.74Z' />
    <path fill='none' d='M12,9.16l3.47,2.52-1.58,3.48H9.79L8.53,11.68Z' />
    <path fill='none' d='M6,10.74l6,1.89,6-1.89' />
    <path fill='none' d='M12,6.32v6.31l3.79,5' />
    <path fill='none' d='M8.21,17.68l3.79-5' />
  </Fragment>
)

const ChartRadar = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default ChartRadar
