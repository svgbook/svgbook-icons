import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.11,11.05V9.79a1.26,1.26,0,0,0-1.27-1.26H9.79A1.25,1.25,0,0,0,8.53,9.79v5.05a1.26,1.26,0,0,0,1.26,1.27h1.26'
    />
    <path
      fill='none'
      d='M12.32,12.32,18,14.21l-2.53,1.26L14.21,18l-1.89-5.68'
    />
    <line x1='6' y1='6' x2='6' y2='6.01' />
    <line x1='8.53' y1='6' x2='8.53' y2='6.01' />
    <line x1='11.05' y1='6' x2='11.05' y2='6.01' />
    <line x1='13.58' y1='6' x2='13.58' y2='6.01' />
    <line x1='6' y1='8.53' x2='6' y2='8.53' />
    <line x1='6' y1='11.05' x2='6' y2='11.06' />
    <line x1='6' y1='13.58' x2='6' y2='13.59' />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      fill='none'
      d='M16.11,11.05V9.79a1.26,1.26,0,0,0-1.27-1.26H9.79A1.25,1.25,0,0,0,8.53,9.79v5.05a1.26,1.26,0,0,0,1.26,1.27h1.26'
    />
    <path d='M12.32,12.32,18,14.21l-2.53,1.26L14.21,18l-1.89-5.68' />
    <line x1='6' y1='6' x2='6' y2='6.01' />
    <line x1='8.53' y1='6' x2='8.53' y2='6.01' />
    <line x1='11.05' y1='6' x2='11.05' y2='6.01' />
    <line x1='13.58' y1='6' x2='13.58' y2='6.01' />
    <line x1='6' y1='8.53' x2='6' y2='8.53' />
    <line x1='6' y1='11.05' x2='6' y2='11.06' />
    <line x1='6' y1='13.58' x2='6' y2='13.59' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path
      fill='none'
      d='M16.11,11.05V9.79a1.26,1.26,0,0,0-1.27-1.26H9.79A1.25,1.25,0,0,0,8.53,9.79v5.05a1.26,1.26,0,0,0,1.26,1.27h1.26'
    />
    <path
      fillOpacity='.2'
      d='M12.32,12.32,18,14.21l-2.53,1.26L14.21,18l-1.89-5.68'
    />
    <line x1='6' y1='6' x2='6' y2='6.01' />
    <line x1='8.53' y1='6' x2='8.53' y2='6.01' />
    <line x1='11.05' y1='6' x2='11.05' y2='6.01' />
    <line x1='13.58' y1='6' x2='13.58' y2='6.01' />
    <line x1='6' y1='8.53' x2='6' y2='8.53' />
    <line x1='6' y1='11.05' x2='6' y2='11.06' />
    <line x1='6' y1='13.58' x2='6' y2='13.59' />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill='none'
      d='M16.11,11.05V9.79a1.26,1.26,0,0,0-1.27-1.26H9.79A1.25,1.25,0,0,0,8.53,9.79v5.05a1.26,1.26,0,0,0,1.26,1.27h1.26'
    />
    <path
      fill={secondaryColor}
      d='M12.32,12.32,18,14.21l-2.53,1.26L14.21,18l-1.89-5.68'
    />
    <line x1='6' y1='6' x2='6' y2='6.01' />
    <line x1='8.53' y1='6' x2='8.53' y2='6.01' />
    <line x1='11.05' y1='6' x2='11.05' y2='6.01' />
    <line x1='13.58' y1='6' x2='13.58' y2='6.01' />
    <line x1='6' y1='8.53' x2='6' y2='8.53' />
    <line x1='6' y1='11.05' x2='6' y2='11.06' />
    <line x1='6' y1='13.58' x2='6' y2='13.59' />
  </Fragment>
)

const DragDrop = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default DragDrop
