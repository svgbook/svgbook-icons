import React, { forwardRef, Fragment } from 'react'
import IconBase from '../primitives/IconBase'

const renderPath = {}

renderPath['outline'] = (color) => (
  <Fragment>
    <path fill='none' d='M6,18l1.1-2.54a6,6,0,1,1,2.27,1.94L6,18' />
    <path
      fill='none'
      d='M10,10.66a.34.34,0,0,0,.67,0V10A.34.34,0,0,0,10,10v.67A3.33,3.33,0,0,0,13.33,14H14a.34.34,0,0,0,0-.67h-.67a.34.34,0,0,0,0,.67'
    />
  </Fragment>
)

renderPath['fill'] = () => (
  <Fragment>
    <path
      stroke='none'
      d='M17.32,8.26A6.5,6.5,0,0,0,6.53,15.51l-1,2.28a.5.5,0,0,0,.07.51.51.51,0,0,0,.48.18l3.21-.57a6.5,6.5,0,0,0,8-9.65ZM14,14.49h-.67A3.84,3.84,0,0,1,9.5,10.65V10a.84.84,0,0,1,.83-.84.85.85,0,0,1,.84.84v.66a.84.84,0,0,1-.56.79,2.84,2.84,0,0,0,1.94,1.94.82.82,0,0,1,.78-.56H14a.83.83,0,0,1,.83.83A.84.84,0,0,1,14,14.49Z'
    />
  </Fragment>
)

renderPath['duotone'] = (color) => (
  <Fragment>
    <path fillOpacity='.2' d='M6,18l1.1-2.54a6,6,0,1,1,2.27,1.94L6,18' />
    <path
      fill='none'
      d='M10,10.66a.34.34,0,0,0,.67,0V10A.34.34,0,0,0,10,10v.67A3.33,3.33,0,0,0,13.33,14H14a.34.34,0,0,0,0-.67h-.67a.34.34,0,0,0,0,.67'
    />
  </Fragment>
)

renderPath['color'] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d='M6,18l1.1-2.54a6,6,0,1,1,2.27,1.94L6,18' />
    <path
      fill='none'
      d='M10,10.66a.34.34,0,0,0,.67,0V10A.34.34,0,0,0,10,10v.67A3.33,3.33,0,0,0,13.33,14H14a.34.34,0,0,0,0-.67h-.67a.34.34,0,0,0,0,.67'
    />
  </Fragment>
)

const Whatsapp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />
})

export default Whatsapp
