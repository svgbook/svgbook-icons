import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path d='M6.71,6.71H8.12' />
    <path d='M7.41,6V7.41' />
    <path d='M12,6l-.35,1.41' />
    <path d='M16.59,6.71H18' />
    <path d='M17.29,6V7.41' />
    <path d='M14.47,9.53l-.71.71' />
    <path d='M16.59,12.35,18,12' />
    <path d='M16.59,16.59H18' />
    <path d='M17.29,15.88v1.41' />
    <path
      fill='none'
      d='M13.76,14.84l-4.6-4.6L6.06,17a.72.72,0,0,0,.35.94.76.76,0,0,0,.59,0l6.76-3.1Z'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path d='M6.71,6.71H8.12' />
    <path d='M7.41,6V7.41' />
    <path d='M12,6l-.35,1.41' />
    <path d='M16.59,6.71H18' />
    <path d='M17.29,6V7.41' />
    <path d='M14.47,9.53l-.71.71' />
    <path d='M16.59,12.35,18,12' />
    <path d='M16.59,16.59H18' />
    <path d='M17.29,15.88v1.41' />
    <path d='M13.76,14.84l-4.6-4.6L6.06,17a.72.72,0,0,0,.35.94.76.76,0,0,0,.59,0l6.76-3.1Z' />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path d='M6.71,6.71H8.12' />
    <path d='M7.41,6V7.41' />
    <path d='M12,6l-.35,1.41' />
    <path d='M16.59,6.71H18' />
    <path d='M17.29,6V7.41' />
    <path d='M14.47,9.53l-.71.71' />
    <path d='M16.59,12.35,18,12' />
    <path d='M16.59,16.59H18' />
    <path d='M17.29,15.88v1.41' />
    <path
      fillOpacity='.2'
      d='M13.76,14.84l-4.6-4.6L6.06,17a.72.72,0,0,0,.35.94.76.76,0,0,0,.59,0l6.76-3.1Z'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path d='M6.71,6.71H8.12' />
    <path d='M7.41,6V7.41' />
    <path stroke={secondaryColor} d='M12,6l-.35,1.41' />
    <path d='M16.59,6.71H18' />
    <path d='M17.29,6V7.41' />
    <path stroke={secondaryColor} d='M14.47,9.53l-.71.71' />
    <path stroke={secondaryColor} d='M16.59,12.35,18,12' />
    <path d='M16.59,16.59H18' />
    <path d='M17.29,15.88v1.41' />
    <path
      fill={secondaryColor}
      d='M13.76,14.84l-4.6-4.6L6.06,17a.72.72,0,0,0,.35.94.76.76,0,0,0,.59,0l6.76-3.1Z'
    />
  </Fragment>
)

const Confetti = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Confetti
